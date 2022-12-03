import { Knex } from "knex";

export interface User {
  id: number;
  email: string;
  fullname: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export const up = (knex: Knex): Promise<void> => {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("email").notNullable().unique();
    table.string("name").notNullable();
    table.string("password").notNullable();
    table.timestamp("created_at").defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table.timestamp("updated_at").defaultTo(knex.raw("CURRENT_TIMESTAMP"));
  });
};

export const down = (knex: Knex): Promise<void> => {
  return knex.schema.dropTable("users");
};
