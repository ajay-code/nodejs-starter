import "express-async-errors";
import path from "path";
import config from "#src/config/index.js";
import express from "express";
import session from "express-session"
import * as middleware from "#src/middleware/index.js";
import routes from "#src/routes/index.js";
import { getDirname } from "./utils/index.js";
import passport from "./auth/passport.js";

const __dirname = getDirname(import.meta.url);
const app = express();

app.use(express.static(path.resolve(__dirname, "../public")));
app.set("views", path.resolve(__dirname, "../views"));
app.set("view engine", "ejs");

// parse request data
app.use(express.json()) // parse json
app.use(express.urlencoded()) // parse formdata

// initialize session middleware
app.use(session({
  secret: config.APP_KEY,
  resave: false,
  saveUninitialized: true,
}))
app.use(passport.initialize())
app.use(passport.session())
// add routes to the app
routes(app);

// 404 middleware
app.use(middleware.notFound);
app.use(middleware.errorHandler);
export default app