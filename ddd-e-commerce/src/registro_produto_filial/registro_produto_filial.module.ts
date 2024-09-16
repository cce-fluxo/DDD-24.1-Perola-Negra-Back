import { Module } from '@nestjs/common';
import { RegistroProdutoFilialService } from './registro_produto_filial.service';
import { RegistroProdutoFilialController } from './registro_produto_filial.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RegistroProdutoFilialController],
  providers: [RegistroProdutoFilialService, PrismaService],
})
export class RegistroProdutoFilialModule {}
