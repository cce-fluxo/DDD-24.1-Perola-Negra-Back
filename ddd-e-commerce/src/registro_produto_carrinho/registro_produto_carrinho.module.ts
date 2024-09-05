import { Module } from '@nestjs/common';
import { RegistroProdutoCarrinhoService } from './registro_produto_carrinho.service';
import { RegistroProdutoCarrinhoController } from './registro_produto_carrinho.controller';

@Module({
  controllers: [RegistroProdutoCarrinhoController],
  providers: [RegistroProdutoCarrinhoService],
})
export class RegistroProdutoCarrinhoModule {}
