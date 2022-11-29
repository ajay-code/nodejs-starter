import { Express, Request, Response } from "express";
import * as authController from "#src/controllers/authController.js"
import passport from "passport";

/**
 * Add all the routes to the expresss app
 * @param app {Express}
 */
export const routes = (app: Express) => {

  app.get("/", (req: Request, res: Response) => {
    res.render("index", { title: "Home Page" });
  });

  app.route("/login")
    .get(authController.loginForm)
    .post(passport.authenticate("local", { failureRedirect: "/login", successRedirect: "/dashboard" }))

  app.get("/dashboard", (req: Request, res: Response) => {
    res.json(req.user)
  })



};

export default routes;
