import { Module } from '@nestjs/common';
import { RegistroProdutoFilialService } from './registro_produto_filial.service';
import { RegistroProdutoFilialController } from './registro_produto_filial.controller';

@Module({
  controllers: [RegistroProdutoFilialController],
  providers: [RegistroProdutoFilialService],
})
export class RegistroProdutoFilialModule {}
