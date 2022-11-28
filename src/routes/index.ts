import { Express, Request, Response } from "express";

export const routes = (app: Express) => {
  app.get("/", (req: Request, res: Response) => {
    res.render("index", { title: "Home Page" });
  });

  app.get("/db", (req: Request, res: Response) => {});
};

export default routes;
