import dotenv from "dotenv";
dotenv.config();

export const BASE_URL = process.env.BASE_URL || "http://localhost";
export const APP_PORT = process.env.APP_PORT || 3000;
export const db = {
  client: process.env.DB_CLIENT || "mysql",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USERNAME || "user",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "test",
  },
};

export default {
  BASE_URL,
  APP_PORT,
  db,
};
