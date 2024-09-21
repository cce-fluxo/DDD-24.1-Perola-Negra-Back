import { ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

export class LocalAuthGuard extends AuthGuard('local'){
    canActivate(context: ExecutionContext) {

        //deixa acessar a rota
        return super.canActivate(context)
    }
}