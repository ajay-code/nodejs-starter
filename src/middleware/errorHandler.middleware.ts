import { Request, Response } from "express";

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: Function
) {
  res.status(500).json({
    error: {
      msg: error.message,
      name: error.name,
    },
  });
}
