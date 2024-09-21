import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClienteService } from 'src/cliente/cliente.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, ClienteService]
})
export class AuthModule {}
