import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProdutoService } from 'src/produto/produto.service';

@Module({
  controllers: [ClienteController],
  providers: [ClienteService, PrismaService, ProdutoService],
})
export class ClienteModule {}
