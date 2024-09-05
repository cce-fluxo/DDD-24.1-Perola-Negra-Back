import { PartialType } from '@nestjs/mapped-types';
import { CreateRegistroClienteEnderecoDto } from './create-registro_cliente_endereco.dto';

export class UpdateRegistroClienteEnderecoDto extends PartialType(CreateRegistroClienteEnderecoDto) {}
