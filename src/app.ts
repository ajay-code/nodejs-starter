import "express-async-errors";
import path from "path";
import config from "#src/config/index.js";
import express from "express";
import session from "express-session";
import knexSession from "connect-session-knex";
import * as middleware from "#src/middleware/index.js";
import routes from "#src/routes/index.js";
import { getDirname } from "./utils/index.js";
import passport from "./auth/passport.js";
import db from "./db/index.js";

const __dirname = getDirname(import.meta.url);
const app = express();
const knexSessionStore = knexSession(session);

app.use(express.static(path.resolve(__dirname, "../public")));
app.set("views", path.resolve(__dirname, "../views"));
app.set("view engine", "ejs");

// parse request data
app.use(express.json()); // parse json
app.use(express.urlencoded()); // parse form data

// initialize session middleware
const sessionOpt = {
  secret: config.APP_KEY,
  resave: false,
  saveUninitialized: true,
  store: new knexSessionStore({
    knex: db,
    tablename: "sessions",
    createtable: true,
    clearInterval: 1000 * 60 * 60,
  }),
};
app.use(session(sessionOpt));

app.use(passport.initialize());
app.use(passport.session());
// add routes to the app
routes(app);

// 404 middleware
app.use(middleware.notFound);
app.use(middleware.errorHandler);
export default app;
