import knex from "knex";
import knexFile from "./knexfile.js";

const db = knex(knexFile.development);

export default db;
