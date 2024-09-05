import { Module } from '@nestjs/common';
import { RegistroClienteEnderecoService } from './registro_cliente_endereco.service';
import { RegistroClienteEnderecoController } from './registro_cliente_endereco.controller';

@Module({
  controllers: [RegistroClienteEnderecoController],
  providers: [RegistroClienteEnderecoService],
})
export class RegistroClienteEnderecoModule {}
