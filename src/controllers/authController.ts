import { Request, Response } from "express"
import jsonwebtoken from "jsonwebtoken"
import fs from "fs"

export const loginForm = (req: Request, res: Response) => {
  res.render("auth/login", { title: "Login Page" });
}

const JWT_KEY = fs.readFileSync(".keys/jwtRS256.key", "utf-8")

function issueBearerJWT(user: User) {
  const id = user.id
  const expiresIn = "1d"
  const payload = {
    sub: id,
    iat: Date.now()
  }

  const signedToken = jsonwebtoken.sign(payload, JWT_KEY, { expiresIn: expiresIn, algorithm: "RS256" })
  return "Bearer " + signedToken
}

export const login = (req: Request, res: Response) => {
  // console.log(req.user)
  const token = issueBearerJWT(req.user as User)
  res.json({
    token
  })
}