import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClienteService } from 'src/cliente/cliente.service';
import { LocalStrategy } from './strategies/localstrategy';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt-strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, ClienteService, LocalStrategy, JwtService, JwtStrategy]
})
export class AuthModule {}
