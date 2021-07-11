import { Login } from "../entities/login";
import jwt from 'jsonwebtoken'
import { EnvConfig } from "../helper/envConfig";

export class AuthService {
    public static validatePassword(body : Login) : Boolean{
        return body.username === body.password
    }

    public static generateToken(body : Login) : string {
        console.log(EnvConfig.envValues.secret)
        return jwt.sign(body, EnvConfig.envValues.secret, { expiresIn: '1800s' });
    }
}