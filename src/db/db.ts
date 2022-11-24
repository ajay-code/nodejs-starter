import config from "@/config";
import knex from "knex";

const db = knex(config.db);

export default db;
