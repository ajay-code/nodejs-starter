import config from "#src/config/index.js";

export const knexFile = {
  development: {
    client: config.DB.dbClient,
    connection: {
      host: config.DB.dbHost,
      port: config.DB.dbPort,
      user: config.DB.dbUser,
      password: config.DB.dbPassword,
      database: config.DB.dbName,
    },
    pool: {
      min: 0,
      max: 7,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

export default knexFile;
