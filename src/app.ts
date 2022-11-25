import "express-async-errors";
import config from "#src/config/index.js";
import express, { Request, Response } from "express";
import { errorHandler, notFound } from "#src/middleware/index.js";
import routes from "#src/routes/index.js";

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
