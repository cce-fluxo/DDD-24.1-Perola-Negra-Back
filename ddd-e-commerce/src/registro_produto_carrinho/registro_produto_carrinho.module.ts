import { Module } from '@nestjs/common';
import { RegistroProdutoCarrinhoService } from './registro_produto_carrinho.service';
import { RegistroProdutoCarrinhoController } from './registro_produto_carrinho.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RegistroProdutoCarrinhoController],
  providers: [RegistroProdutoCarrinhoService, PrismaService],
})
export class RegistroProdutoCarrinhoModule {}
