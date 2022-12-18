import { Express, Request, Response } from "express";
import apiRouter from "./api/api.routes.js";
import { isAuthenticated } from "#src/middleware/auth.middleware.js";
import authRouter from "./auth.routes.js";

/**
 * Add all the routes to the express app
 * @param app {Express}
 */
export const addRoutes = (app: Express) => {

  app.get("/", (req: Request, res: Response) => {
    res.render("index", { title: "Home Page" });
  });

  app.get("/me", isAuthenticated, (req: Request, res: Response) => {
    res.json(req.user)
  })

  app.get("/jwt-payload", isAuthenticated, (req: Request, res: Response) => {
    res.json(req.payload)
  })



  // add auth routes
  app.use(authRouter)

  // add api/v1 routes
  app.use("/api", isAuthenticated, apiRouter)

};

export default addRoutes;
