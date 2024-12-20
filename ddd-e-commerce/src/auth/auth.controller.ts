import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local.auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  // exemplo de uso do login: POST http://localhost:3000/auth/login { "email": " ", "senha": "123456" }
  login(@Request() req) {
    console.log(this.login);
    return this.authService.login(req.user);
  }
}
