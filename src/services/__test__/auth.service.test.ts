import authService from '../auth.service.js'
import * as zod from 'zod'
import { registerSchema } from '#src/validators/auth.validators.js'
import db from '#src/lib/knex/db.js'
import getUserModel from '#src/models/user.model.js'

describe('authService', () => {
    beforeAll(async () => {
        await db.raw('BEGIN')
    })
    afterAll(async () => {
        await db.raw('ROLLBACK')
        db.destroy()
    })

    const validUser: zod.infer<typeof registerSchema> = {
        name: 'user',
        email: 'user@email.com',
        password: 'secret',
        confirmPassword: 'secret',
    }

    it('should created user successfully', async () => {
        const mockUserModel = getUserModel()
        const result = await authService.registerUser(validUser, mockUserModel)
        expect(result[0]).toBeGreaterThan(0)
    })

    it('should login user successfully', async () => {
        const mockUserModel = getUserModel()
        const credentials = {
            email: validUser.email,
            password: validUser.password,
        }
        const result = await authService.loginUser(credentials, mockUserModel)

        expect(result).toEqual(
            expect.objectContaining({
                email: validUser.email,
                name: validUser.name,
            })
        )
    })
})
