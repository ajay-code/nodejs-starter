import db from "#src/db/index.js"
import passport from "passport"
import { Strategy as LocalStrategy } from "passport-local"
import { localLogin, Done } from "./statergy.js"

const serialize = (user: Express.User, done: Done) => {
  done(null, user.id)
}

const deserialize = async (user_id: any, done: Done) => {
  const user = await db<User>('users').where('id', user_id).first()
  done(null, user)
}


passport.serializeUser(serialize)
passport.deserializeUser(deserialize)
passport.use(new LocalStrategy({ usernameField: "email", passwordField: "password" }, localLogin))

export default passport