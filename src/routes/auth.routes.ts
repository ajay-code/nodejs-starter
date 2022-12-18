import { Router } from "express";
import * as authController from "#src/controllers/auth.controller.js"

let authRouter: Router;
const r = authRouter = Router()

r.route("/login")
  .get(authController.loginForm)
  .post(authController.login)

r.route("/register")
  .get(authController.registerForm)
  .post(authController.register)

export default authRouter