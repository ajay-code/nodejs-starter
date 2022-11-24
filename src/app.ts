import "express-async-errors";
import config from "@/config";
import express, { Request, Response } from "express";
import { errorHandler, notFound } from "@/middleware";

const app = express();
const port = config.APP_PORT;
const baseUrl = config.BASE_URL;

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello, World!</h1>");
});

// 404 middleware
app.use(notFound);
// errorHandler middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`The website is running on ${baseUrl}:${port}`);
});
