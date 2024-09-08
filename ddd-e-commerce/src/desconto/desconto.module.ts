import { Module } from '@nestjs/common';
import { DescontoService } from './desconto.service';
import { DescontoController } from './desconto.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [DescontoController],
  providers: [DescontoService, PrismaService],
})
export class DescontoModule {}
