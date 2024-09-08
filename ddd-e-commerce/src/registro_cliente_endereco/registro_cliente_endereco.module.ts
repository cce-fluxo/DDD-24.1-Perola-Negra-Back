import { Module } from '@nestjs/common';
import { RegistroClienteEnderecoService } from './registro_cliente_endereco.service';
import { RegistroClienteEnderecoController } from './registro_cliente_endereco.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RegistroClienteEnderecoController],
  providers: [RegistroClienteEnderecoService, PrismaService],
})
export class RegistroClienteEnderecoModule {}
