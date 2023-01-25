import { AuthService } from '#src/services/auth.service.js'
import jwtService, { JWTPayload } from '#src/services/jwt.service.js'
import { loginSchema, registerSchema } from '#src/validators/auth.validators.js'
import { Request, Response } from 'express'
import { z } from 'zod'

const authService = new AuthService()
export const login = async (req: Request, res: Response) => {
    let credentials: z.infer<typeof loginSchema>

    try {
        credentials = loginSchema.parse(req.body)
    } catch (error: any) {
        res.status(401).json({ error: error.message })
        return
    }

    const user = await authService.login(credentials)
    const jwtPayload: JWTPayload = {
        email: user.email,
        userId: user.id,
    }
    const token = jwtService.generateToken(jwtPayload)

    res.cookie('token', token, {
        httpOnly: true,
        sameSite: true,
        maxAge: 3600 * 24 * 30,
        path: '/',
    })

    res.json({
        user,
    })
}

export const register = async (req: Request, res: Response) => {
    let userData: z.infer<typeof registerSchema>

    // validate data
    try {
        userData = registerSchema.parse(req.body)
    } catch (error: any) {
        console.log(error.message)
        res.json({ errors: error.message })
        return
    }

    // save user in DB
    await authService.register(userData)

    res.json({ name: userData.name, email: userData.email })
}
