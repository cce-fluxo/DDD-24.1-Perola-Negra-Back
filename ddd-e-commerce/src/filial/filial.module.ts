import { Module } from '@nestjs/common';
import { FilialService } from './filial.service';
import { FilialController } from './filial.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProdutoService } from 'src/produto/produto.service';

@Module({
  controllers: [FilialController],
  providers: [FilialService, PrismaService, ProdutoService],
})
export class FilialModule {}
