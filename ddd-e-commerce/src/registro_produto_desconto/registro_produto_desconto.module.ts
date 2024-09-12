import { Module } from '@nestjs/common';
import { RegistroProdutoDescontoService } from './registro_produto_desconto.service';
import { RegistroProdutoDescontoController } from './registro_produto_desconto.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RegistroProdutoDescontoController],
  providers: [RegistroProdutoDescontoService, PrismaService],
})
export class RegistroProdutoDescontoModule {}
