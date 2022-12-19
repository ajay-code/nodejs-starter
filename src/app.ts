// import config from "#src/config/index.js";
import path from "node:path";
import express from "express";
import helmet from "helmet"
import * as middleware from "#src/middleware/index.middleware.js";
import addRoutes from "#src/routes/index.routes.js";
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
 * add security middlewares
 */
app.use(helmet())

/**
 * add routes to the app
 */
addRoutes(app);

/**
 * middleware
 */
app.use(middleware.notFound);
app.use(middleware.errorHandler);

export default app;
