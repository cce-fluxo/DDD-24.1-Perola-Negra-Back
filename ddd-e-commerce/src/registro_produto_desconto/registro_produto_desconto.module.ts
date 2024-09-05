import { Module } from '@nestjs/common';
import { RegistroProdutoDescontoService } from './registro_produto_desconto.service';
import { RegistroProdutoDescontoController } from './registro_produto_desconto.controller';

@Module({
  controllers: [RegistroProdutoDescontoController],
  providers: [RegistroProdutoDescontoService],
})
export class RegistroProdutoDescontoModule {}
