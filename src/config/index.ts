import dotenv from "dotenv";
dotenv.config();

export const BASE_URL = process.env.BASE_URL || "http://localhost";
export const APP_PORT = process.env.APP_PORT || 3000;
export const API_URL = `${BASE_URL}:${APP_PORT}/api`;

export const DB = {
  dbClient: process.env.DB_CLIENT || "mysql",
  dbHost: process.env.DB_HOST || "127.0.0.1",
  dbPort: parseInt(process.env.DB_PORT ?? "") || 3306,
  dbUser: process.env.DB_USERNAME || "user",
  dbPassword: process.env.DB_PASSWORD || "password",
  dbName: process.env.DB_NAME || "test", // name of the database to connect to
};

export default {
  BASE_URL,
  APP_PORT,
  API_URL,
  DB,
};
