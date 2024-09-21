import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { AuthService } from "../auth.service";

export class LocalStraegy extends PassportStrategy(Strategy){
    constructor(){
        super({ usernameField: 'email', passwordfield: 'password' });
    }

    validate (email: string, password: string){
        return this.Authservice.validateUser(email, password)
    }
}