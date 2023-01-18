export class UnauthorizedError extends Error implements HttpError {
    statusCode: number = 401
    constructor(message: string = 'Unauthorized') {
        super(message)
        this.name = 'UnauthorizedError'
    }
}
