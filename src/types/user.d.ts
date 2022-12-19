



interface UserApi extends Omit<User, "password" | "created_at" | "updated_at"> { }

const user: UserApi = {}
user