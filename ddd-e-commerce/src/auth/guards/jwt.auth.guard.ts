import { ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { IS_PUBLIC_KEY } from "../decorators/is-public-decorator";

export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor(private reflector: Reflector) {
        super();
    }


    async canActivate(context: ExecutionContext) {
        // const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
        //     context.getHandler(),
        //     context.getClass(),
        // ]);
        // if (isPublic) {
        //     return true;
        // }
        //deixa acessar a rota
        await super.canActivate(context)

        return true
    }
}