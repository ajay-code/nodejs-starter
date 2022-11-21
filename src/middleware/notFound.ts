import { Request, Response } from "express"

function notFound(req: Request, res: Response, next: Function) {
    next(new Error("Not Page Found"))
}

export default notFound