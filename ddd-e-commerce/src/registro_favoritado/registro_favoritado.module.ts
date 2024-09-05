import { Module } from '@nestjs/common';
import { RegistroFavoritadoService } from './registro_favoritado.service';
import { RegistroFavoritadoController } from './registro_favoritado.controller';

@Module({
  controllers: [RegistroFavoritadoController],
  providers: [RegistroFavoritadoService],
})
export class RegistroFavoritadoModule {}
