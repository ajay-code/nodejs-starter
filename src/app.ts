import "express-async-errors";
import path from "path";
import config from "#src/config/index.js";
import express from "express";
import { errorHandler, notFound } from "#src/middleware/index.js";
import routes from "#src/routes/index.js";
import { getDirname } from "./utils/index.js";

const __dirname = getDirname(import.meta.url);
const app = express();
const port = config.APP_PORT;
const baseUrl = config.BASE_URL;

app.use(express.static(path.resolve(__dirname, "../public")));
app.set("views", path.resolve(__dirname, "../views"));
app.set("view engine", "ejs");

// add routes to the app
routes(app);

// 404 middleware
app.use(notFound);
// errorHandler middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`The website is running on ${baseUrl}:${port}`);
});
