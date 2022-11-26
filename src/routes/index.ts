import { Express, Request, Response } from "express";
import knex from "#src/db/index.js";
export const routes = (app: Express) => {
  app.get("/", (req: Request, res: Response) => {
    res.send("<h1>Hello, World!</h1>");
  });

  app.get("/db", (req: Request, res: Response) => {});
};

export default routes;
