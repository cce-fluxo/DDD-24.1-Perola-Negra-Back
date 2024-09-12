import { Module } from '@nestjs/common';
import { RegistroFavoritadoService } from './registro_favoritado.service';
import { RegistroFavoritadoController } from './registro_favoritado.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RegistroFavoritadoController],
  providers: [RegistroFavoritadoService, PrismaService],
})
export class RegistroFavoritadoModule {}
