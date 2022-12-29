import * as zod from 'zod'

export const registerSchema = zod
    .object({
        name: zod.string({ required_error: 'name is required' }),
        email: zod
            .string({ required_error: 'email is required' })
            .email('email should be valid'),
        password: zod.string({ required_error: 'password is required' }),
        confirmPassword: zod.string({
            required_error: 'confirm password is required',
        }),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
        message: 'confirm password does not match password',
        path: ['confirmPassword'],
    })

export const loginSchema = zod.object({
    email: zod.string({ required_error: 'name is required' }),
    password: zod.string({ required_error: 'password is required' }),
})
