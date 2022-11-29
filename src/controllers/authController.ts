import { Request, Response } from "express"

export const loginForm = (req: Request, res: Response) => {
  res.render("auth/login", { title: "Login Page" });
}

export const login = (req: Request, res: Response) => {
  console.log(req.body)
  res.send("login post")
}