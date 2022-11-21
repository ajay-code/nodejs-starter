import {Request, Response} from "express"
function errorHandler(error: Error, req: Request, res: Response, next: Function) {
    res.status(500).json({
        error: {
            msg: error.message,
            name: error.name
        }
    })
}

export default errorHandler