import { Knex } from 'knex'
import { PasswordService } from '#src/services/password.service.js'

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const passwordService = new PasswordService()
export const seed = async function (knex: Knex) {
    // Deletes ALL existing entries
    await knex('users').del()
    const password = await passwordService.hash('secret')
    await knex('users').insert([
        { id: 1, email: 'ajay@email.com', name: 'Ajay Singh', password },
    ])
}
