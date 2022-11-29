import db from "#src/db/index.js"
import passport from "passport"
import { Strategy as LocalStrategy } from "passport-local"

export const serialize = (user: Express.User, done: Function) => {
  done(null, user.id)
}

export const deserialize = async (user_id: any, done: Function) => {
  const user = await db<User>('users').where('id', user_id).first()
  done(null, user)
}

export const authUser = async (email: string, password: string, done: Function) => {
  const user = await db<User>('users').where('email', email).first()

  if (!user) {
    done(Error("wrong credencials."))
    return
  }

  if (user.password == password) {
    done(null, user)
  }
}

passport.serializeUser(serialize)
passport.deserializeUser(deserialize)
passport.use(new LocalStrategy({ usernameField: "email", passwordField: "password" }, authUser))

export default passport