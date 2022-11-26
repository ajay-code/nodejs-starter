import { Knex } from "knex";

interface User {
  id: number;
  email: string;
  fullname: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export const up = (knex: Knex): Promise<void> => {
  return knex.schema.hasTable("users").then((exists) => {
    if (!exists) {
      knex.schema.createTable("users", (table) => {
        table.increments("id");
        table.string("email").notNullable().unique();
        table.string("name").notNullable();
        table.string("username").notNullable().unique();
        table.string("password").notNullable();
        table.timestamp("createdAt").defaultTo(knex.raw("CURRENT_TIMESTAMP"));
        table.timestamp("updatedAt").defaultTo(knex.raw("CURRENT_TIMESTAMP"));
      });
    }
  });
};

export const down = (knex: Knex): Promise<void> => {
  return knex.schema.dropTable("users");
};
