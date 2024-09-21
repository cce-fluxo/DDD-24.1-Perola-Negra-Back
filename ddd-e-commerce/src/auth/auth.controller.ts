import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly AuthService: AuthService) {}

    @UseGuards(localAuthGuard)
    @Post ('login')
        login(@Request() req ){
           // return this.authService.login(req.user)
        }

}
