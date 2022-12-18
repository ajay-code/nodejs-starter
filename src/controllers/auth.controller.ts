import * as zod from "zod";
import { Request, Response } from "express"
import userdb from "#src/models/user.model.js"
import authService from "#src/services/auth.service.js";
import { registerSchema, loginSchema } from "./validators.js";
import jwtService, { JWTPayload } from "#src/services/jwt.service.js";

export const loginForm = (req: Request, res: Response) => {
  res.render("auth/login", { title: "Login Page" });
}

export const login = async (req: Request, res: Response) => {
  let credencials: zod.infer<typeof loginSchema>
  try {
    credencials = loginSchema.parse(req.body)
  } catch (error: any) {
    res.json({ error: error.message })
    return
  }

  const user = await authService.loginUser(credencials, userdb)
  const jwtPayload: JWTPayload = {
    email: user.email,
    userId: user.id
  }
  const token = jwtService.generateToken(jwtPayload)

  res.json({
    token,
    user
  })
}

export const registerForm = (req: Request, res: Response) => {
  res.render("auth/register", { title: "Register Page" })
}

export const register = async (req: Request, res: Response) => {
  let userData: zod.infer<typeof registerSchema>
  // validate data
  try {
    userData = registerSchema.parse(req.body)
  } catch (error: any) {
    console.log(error.message)
    res.json({ errors: error.message })
    return
  }

  // created user
  const userInfo = { name: userData.name, email: userData.email, password: userData.password }
  try {
    await authService.registerUser(userInfo, userdb)
  } catch (error: any) {
    throw error
  }

  res.json({ name: userInfo.name, email: userInfo.email })
}