import db from "#src/db/index.js"


export type Done = (error: any, user?: any) => void

export const localLogin = async (email: string, password: string, done: Done) => {
  console.log("local login")
  const user = await db<User>('users').where('email', email).first()

  if (!user) {
    done(Error("wrong credencials."))
    return
  }

  if (user.password == password) {
    done(null, user)
  }
}

export const jwtAuth = async (payload: any, done: Done) => {
  console.log("jwt login")
  const user = await db<User>('users').where('id', payload.sub).first()
  if (!user) {
    done(Error("No such User"), null)
    return
  }
  console.log(user)
  done(null, user)
}