import jwtService from '../jwt.service.js'

describe('jwtService', () => {
    it('should resolve to true and valid userId for hardcoded token', async () => {
        let fakeToken =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFqYXlAZW1haWwuY29tIiwidXNlcklkIjoxLCJpYXQiOjE2NzM0MzYxODAsImV4cCI6MTY3NTg1NTM4MH0.1YpHXDiBjv7e0GIj3GBYaQVbpS7d0gsQ0gNPxu3p3kw'
        const payload = jwtService.verifyToken(fakeToken)
        expect(payload).toBe({ userId: 1 })
    })

    it('should resolve to false for invalid token', async () => {
        let fakeToken =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXGHJ9.eyJlbWFpbCI6ImFqYXlAZW1haWwuY29tIsdfdXNlcklkIjoxLCJpYXQiOjE2NzM0MzYxODAsImV4cCI6MTY3NTg1NTM4MH0.1YpHXDiBjv7e0GIj3GBYaQVbpS7d0gsQ0gNPxu3p3kw'
        const payload = jwtService.verifyToken(fakeToken)
        expect(payload).toBe(false)
    })
})
