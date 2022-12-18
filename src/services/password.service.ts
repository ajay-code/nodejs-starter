import bcrypt, { hash } from "bcrypt"

class Password {
  private slatRounds: number

  constructor(saltRounds: number) {
    this.slatRounds = saltRounds
  }

  public hash(password: string) {
    return bcrypt.hash(password, this.slatRounds)
  }

  public compare(password: string, hash: string) {
    return bcrypt.compare(password, hash)
  }
}

export default new Password(10)