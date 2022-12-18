import db from "#src/db/index.js"
import JWTService, { JWTPayload } from "#src/services/jwt.service.js"
import { Request, Response } from "express"

declare global {
  namespace Express {
    export interface Request {
      payload: JWTPayload,
      user: User
    }
  }
}

export async function isAuthenticated(req: Request, res: Response, next: Function) {
  const authorization = req.headers.authorization

  if (!authorization) {
    res.status(401).json({ error: "no token provided" })
    return
  }

  const token = authorization.split(' ')[1]
  const payload = JWTService.verifyToken(token)

  if (!payload) {
    res.status(401).json({ error: "invalid token" })
  }

  req.payload = payload as JWTPayload

  const user = await db<User>('users').select('id', 'name', 'email', 'created_at', 'updated_at').where({ id: req.payload.userId }).first()
  if (!user) {
    throw Error("user not found")
  }
  req.user = user

  next()
}