import { Router } from 'express'
import { authController } from '#src/controllers/index.js'

let authRouter: Router
const r = (authRouter = Router())

r.route('/login').post(authController.login)

r.route('/register').post(authController.register)

export default authRouter
