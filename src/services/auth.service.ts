import { User } from "#src/models/user.model.js";
import { Knex } from "knex";
import passwordService from "./password.service.js";

interface UserInfo extends Omit<User, 'id' | 'created_at' | 'updated_at'> { }

class AuthService {

  public async registerUser(user: UserInfo, User: Knex.QueryBuilder<User>) {
    let { email, name, password } = user
    const hashedPassword = await passwordService.hash(password)
    password = hashedPassword;

    return User.insert({
      email,
      name,
      password
    })
  }

  public async loginUser(credentials: { email: string, password: string }, User: Knex.QueryBuilder<User>): Promise<User> {
    const user = await User.where('email', credentials.email).first()
    if (!user) {
      throw Error('no user found')
    }

    const passwordValid = await passwordService.compare(credentials.password, user.password)
    if (!passwordValid) {
      throw Error("password not valid")
    }
    user satisfies User
    return user
  }
}

export default new AuthService()