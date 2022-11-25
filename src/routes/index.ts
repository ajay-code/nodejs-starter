import { Express, Request, Response } from "express";

export const routes = (app: Express) => {
  app.get("/", (req: Request, res: Response) => {
    res.send("<h1>Hello, World!</h1>");
  });
};

export default routes;
