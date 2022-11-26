import "./loadEnv.js";
import DB from "./database.js";

const NODE_ENV = process.env.NODE_ENV || "development";
const BASE_URL = process.env.BASE_URL || "http://localhost";
const APP_PORT = process.env.APP_PORT || 3000;
const API_URL = `${BASE_URL}:${APP_PORT}/api`;

export default {
  NODE_ENV,
  BASE_URL,
  APP_PORT,
  API_URL,
  DB,
};
