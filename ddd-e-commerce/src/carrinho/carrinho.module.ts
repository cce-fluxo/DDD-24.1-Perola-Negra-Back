import { Module } from '@nestjs/common';
import { CarrinhoService } from './carrinho.service';
import { CarrinhoController } from './carrinho.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [CarrinhoController],
  providers: [CarrinhoService, PrismaService],
})
export class CarrinhoModule {}
