import config from "#src/config/index.js";
import knex from "knex";

const db = knex({
  client: config.DB.dbClient,
  connection: {
    host: config.DB.dbHost,
    port: config.DB.dbPort,
    user: config.DB.dbUser,
    password: config.DB.dbPassword,
    database: config.DB.dbName,
  },
});

export default db;
