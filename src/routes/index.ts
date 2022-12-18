import { Express, Request, Response } from "express";
import * as authController from "#src/controllers/auth.controller.js"
import apiRouter from "./api/v1/index.js";
import { isAuthenticated } from "#src/middleware/auth.middleware.js";

/**
 * Add all the routes to the express app
 * @param app {Express}
 */
export const addRoutes = (app: Express) => {

  app.get("/", (req: Request, res: Response) => {
    res.render("index", { title: "Home Page" });
  });

  app.route("/login")
    .get(authController.loginForm)
    .post(authController.login)

  app.route("/register")
    .get(authController.registerForm)
    .post(authController.register)

  app.get("/dashboard", isAuthenticated, (req: Request, res: Response) => {
    res.json(req.user)
  })

  app.get("/me", isAuthenticated, (req: Request, res: Response) => {
    res.json(req.payload)
  })

  // add api/v1 routes
  app.use("/api/v1", apiRouter)

};

export default addRoutes;
