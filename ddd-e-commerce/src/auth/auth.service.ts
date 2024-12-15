import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClienteService } from 'src/cliente/cliente.service';
import { AdministradorService } from 'src/administrador/administrador.service';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: AdministradorService,
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
    const jwtToken = this.jwtService.sign(payload, {});
    return {
      acess_token: jwtToken,
    };
  }
}

// exemplo de uso do login:
// POST http://localhost:3000/auth/login
// {
//     "email": "
//     "senha": "123456"
// }
