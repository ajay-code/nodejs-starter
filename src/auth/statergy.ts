import db from "#src/db/index.js"

export type Done = (error: any, user?: any) => void

export const localLogin = async (email: string, password: string, done: Done) => {
  const user = await db<User>('users').where('email', email).first()

  if (!user) {
    done(Error("wrong credencials."))
    return
  }

  if (user.password == password) {
    done(null, user)
  }
}

export const jwtLogin = async (jwtPaylod: any, done: Done) => {

}