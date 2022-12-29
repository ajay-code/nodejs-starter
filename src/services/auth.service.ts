import { User } from '#src/models/user.model.js'
import { Knex } from 'knex'
import * as zod from 'zod'
import passwordService from './password.service.js'
import { registerSchema, loginSchema } from '#src/validators/auth.validators.js'

interface UserData extends Omit<User, 'id' | 'created_at' | 'updated_at'> { }

class AuthService {
    public async registerUser(user: zod.infer<typeof registerSchema>, User: Knex.QueryBuilder<User>) {
        let { email, name, password } = user
        const hashedPassword = await passwordService.hash(password)
        password = hashedPassword

        return User.insert({
            email,
            name,
            password,
        })
    }

    public async loginUser(
        credentials: zod.infer<typeof loginSchema>,
        User: Knex.QueryBuilder<User>
    ): Promise<User> {
        const user: User = await User.where('email', credentials.email).first()
        if (!user) {
            throw Error('no user found')
        }

        const passwordValid = await passwordService.compare(
            credentials.password,
            user.password
        )
        if (!passwordValid) {
            throw Error('password not valid')
        }

        return user
    }
}

export default new AuthService()
