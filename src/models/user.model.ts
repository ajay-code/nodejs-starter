import db from '#src/lib/knex/db.js'

export interface User {
    id: number
    email: string
    name: string
    password: string
    created_at: string
    updated_at: string
}

export interface UserInfo extends Omit<User, 'password'> {}

export default function getUserModel() {
    return db<User>('users')
}
