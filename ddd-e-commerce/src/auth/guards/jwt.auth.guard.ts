import { ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

export class JwtAuthGuard extends AuthGuard('jwt'){
    canActivate(context: ExecutionContext) {

        //deixa acessar a rota
        return super.canActivate(context)
    }
}