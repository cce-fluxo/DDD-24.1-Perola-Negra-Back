import { Module } from '@nestjs/common';
import { RegistroPedidoProdutoService } from './registro_pedido_produto.service';
import { RegistroPedidoProdutoController } from './registro_pedido_produto.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RegistroPedidoProdutoController],
  providers: [RegistroPedidoProdutoService, PrismaService],
})
export class RegistroPedidoProdutoModule {}
