import passport from "passport"
import config from "#src/config/index.js"
import db from "#src/db/index.js"
import { Strategy as LocalStrategy } from "passport-local"
import { localLogin, Done, jwtAuth } from "./statergy.js"
import { Strategy as JwtStrategy, ExtractJwt, StrategyOptions } from "passport-jwt"

const serialize = (user: Express.User, done: Done) => {
  console.log("serialize")
  done(null, user.id)
}

const deserialize = async (user_id: any, done: Done) => {
  console.log("deserialize")
  const user = await db<User>('users').where('id', user_id).first()
  done(null, user)
}

passport.serializeUser(serialize)
passport.deserializeUser(deserialize)


passport.use(new LocalStrategy({ usernameField: "email", passwordField: "password" }, localLogin))

// JWT Strategy
const jwtOpts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.JWT_KEY_PUB,
  algorithms: ["RS256"]
}

passport.use(new JwtStrategy(jwtOpts, jwtAuth))


export default passport