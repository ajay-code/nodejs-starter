

interface User {
  id: number;
  email: string;
  name: string;
  password: string;
  created_at: string;
  updated_at: string;
}

interface UserApi extends Omit<User, "password" | "created_at" | "updated_at"> { }

const user: UserApi = {}
user