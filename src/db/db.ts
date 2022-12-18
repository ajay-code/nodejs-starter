import * as knexPkg from "knex";
import knexFile from "./knexfile.js";

const {knex} = knexPkg.default
const db = knex(knexFile.development);

export default db;