import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly authservice: AuthService){
        super({ usernameField: 'email', passwordField: 'hash_senha' });
    }

    validate (email: string, password: string){
        return this.authservice.validateUser(email, password)
    }
}