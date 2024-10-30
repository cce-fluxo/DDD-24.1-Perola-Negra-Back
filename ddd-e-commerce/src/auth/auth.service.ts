import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClienteService } from 'src/cliente/cliente.service';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: ClienteService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    const senha_valida = await bcrypt.compare(password, user.hash_senha);

    if (!user || !senha_valida) {
      throw new Error('Credenciais inválidas');
    }

    // Usando operador spread para retornar os dados do usuário
    return { ...user, password: undefined };
  }

  login(user) {
    const payload = { id: user.id, email: user.email };
    const jwtToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: '1d',
    });
    return {
      acess_token: jwtToken,
    };
  }
}
