import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClienteService } from 'src/cliente/cliente.service';
import { LocalStrategy } from './strategies/localstrategy';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt-strategy';
import { ProdutoService } from 'src/produto/produto.service';
import { AdministradorService } from 'src/administrador/administrador.service';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, ClienteService, LocalStrategy, JwtService, JwtStrategy, ProdutoService, AdministradorService]
})
export class AuthModule {}
