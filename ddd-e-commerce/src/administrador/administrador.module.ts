import { Module } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { AdministradorController } from './administrador.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AdministradorController],
  providers: [AdministradorService, PrismaService]
})
export class AdministradorModule {}
