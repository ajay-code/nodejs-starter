import { Request, Response } from 'express'

export function notFound(req: Request, res: Response, next: Function) {
    next(new Error('Not Page Found'))
}
