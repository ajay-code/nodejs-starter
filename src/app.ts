// import config from "#src/config/index.js";
import * as middleware from "#src/middleware/index.js";
import routes from "#src/routes/index.js";
import express from "express";
// import session, { SessionOptions } from "express-session";
// import knexSession from "connect-session-knex";
import path from "node:path";
import passport from "./auth/passport.js";
import { getDirname } from "./utils/index.js";

const __dirname = getDirname(import.meta.url);
const app = express();

app.use(express.static(path.resolve(__dirname, "../public")));
app.set("views", path.resolve(__dirname, "../views"));
app.set("view engine", "ejs");

/**
 * parse request data
 */
app.use(express.json()); // parse json
app.use(express.urlencoded({ extended: false })); // parse form data

/** 
 *  setting up express session
 */
// const knexSessionStore = knexSession(session);
// const sessionOpts: SessionOptions = {
//   secret: config.APP_KEY,
//   resave: false,
//   saveUninitialized: true,
//   store: new knexSessionStore({
//     knex: db,
//     tablename: "sessions",
//     createtable: true,
//     clearInterval: 1000 * 60 * 60,
//   }),
// };
// app.use(session(sessionOpts));

/** 
 * setting passport auth
 */
app.use(passport.initialize());
// app.use(passport.session());

/**
 * add routes to the app
 */
routes(app);

/**
 * middleware
 */
app.use(middleware.notFound);
app.use(middleware.errorHandler);

export default app;
