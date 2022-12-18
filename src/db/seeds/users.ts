import passwordService from "#src/services/password.service.js";
import { Knex } from "knex";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function (knex: Knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  const password = await passwordService.hash('secret')
  await knex('users').insert([
    { id: 1, email: 'ajay@email.com', name: "Ajay Singh", password },
  ]);
};

