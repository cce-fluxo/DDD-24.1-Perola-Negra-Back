import { Module } from '@nestjs/common';
import { RegistroPedidoProdutoService } from './registro_pedido_produto.service';
import { RegistroPedidoProdutoController } from './registro_pedido_produto.controller';

@Module({
  controllers: [RegistroPedidoProdutoController],
  providers: [RegistroPedidoProdutoService],
})
export class RegistroPedidoProdutoModule {}
