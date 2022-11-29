#!/usr/bin/env node
import app from "../app.js"
import config from "#src/config/index.js"
const port = config.APP_PORT;
const baseUrl = config.BASE_URL;

app.listen(port, () => {
  console.log(`The website is running on ${baseUrl}:${port}`);
});
