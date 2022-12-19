import db from "#src/db/db.js"

export interface User {
  id: number;
  email: string;
  name: string;
  password: string;
  created_at: string;
  updated_at: string;
}

export default db<User>('users')