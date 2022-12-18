import config from "#src/config/index.js";
import jwt from "jsonwebtoken"

export type JWTPayload = {
  userId: number;
  email: string;
}

class JWTService {
  private pvtKey: string
  private pubKey: string
  private expiresIn = '28d'

  constructor(pvtKey: string, pubKey: string) {
    this.pvtKey = pvtKey
    this.pubKey = pubKey
  }

  public generateToken(payload: JWTPayload): string {
    return jwt.sign(payload, this.pvtKey, {
      expiresIn: this.expiresIn,
      algorithm: "RS256"
    })
  }

  public verifyToken(token: string) {
    try {
      let decoded = jwt.verify(token, this.pubKey)
      return decoded;
    } catch (error) {
      return false
    }
  }
}

export default new JWTService(config.JWT.PVT_KEY, config.JWT.PUB_KEY)