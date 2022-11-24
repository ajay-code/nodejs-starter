import "module-alias/register";
import "express-async-errors";
import express, { Request, Response } from "express";
import { errorHandler, notFound } from "@/middleware";

const app = express();
const port = 3000;
const baseUrl = "http://localhost";

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello, World!!</h1>");
});

// 404 middleware
app.use(notFound);
// errorHandler middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`The website is running on ${baseUrl}:${port}`);
});
