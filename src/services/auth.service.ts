import config from "#src/config/index.js"
import { Knex } from "knex";
import passwordService from "./password.service.js";

interface UserInfo extends Omit<User, 'id' | 'created_at' | 'updated_at'> { }

class AuthService {

  public async registerUser(user: UserInfo, db: Knex.QueryBuilder<User>) {
    let { email, name, password } = user
    const hashedPassword = await passwordService.hash(password)
    password = hashedPassword;

    await db.insert({
      email,
      name,
      password
    })
  }

  public async loginUser(credencials: { email: string, password: string }, userdb: Knex.QueryBuilder<User>): Promise<User> {
    const user = await userdb.where('email', credencials.email).first()
    if (!user) {
      throw Error('no user found')
    }

    const passwordValid = await passwordService.compare(credencials.password, user.password)
    if (!passwordValid) {
      throw Error("password not valid")
    }
    user satisfies User
    return user
  }
}

export default new AuthService()