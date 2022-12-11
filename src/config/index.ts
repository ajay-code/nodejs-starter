import "./loadEnv.js";
import DB from "./database.js";
import {readFileSync} from 'node:fs'

const NODE_ENV = process.env.NODE_ENV || "development";
const BASE_URL = process.env.BASE_URL || "http://localhost";
const APP_PORT = parseInt(process.env.APP_PORT || "") || 3000;
const API_URL = `${BASE_URL}/api`;
const APP_KEY = process.env.APP_KYE || "secret";
const JWT_KEY = readFileSync(".keys/jwtRS256.key", 'utf-8')
const JWT_KEY_PUB = readFileSync(".keys/jwtRS256.key", 'utf-8')

export default {
  NODE_ENV,
  BASE_URL,
  APP_PORT,
  API_URL,
  APP_KEY,
  JWT_KEY,
  JWT_KEY_PUB,
  DB,
};
