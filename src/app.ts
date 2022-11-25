import "express-async-errors";
import config from "./config";
import express, { Request, Response } from "express";
import { errorHandler, notFound } from "./middleware";
import routes from "./routes";

const app = express();
const port = config.APP_PORT;
const baseUrl = config.BASE_URL;

routes(app);

// 404 middleware
app.use(notFound);
// errorHandler middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`The website is running on ${baseUrl}:${port}`);
});
