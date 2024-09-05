import { Injectable } from '@nestjs/common';
import { CreateRegistroClienteEnderecoDto } from './dto/create-registro_cliente_endereco.dto';
import { UpdateRegistroClienteEnderecoDto } from './dto/update-registro_cliente_endereco.dto';

@Injectable()
export class RegistroClienteEnderecoService {
  create(createRegistroClienteEnderecoDto: CreateRegistroClienteEnderecoDto) {
    return 'This action adds a new registroClienteEndereco';
  }

  findAll() {
    return `This action returns all registroClienteEndereco`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registroClienteEndereco`;
  }

  update(id: number, updateRegistroClienteEnderecoDto: UpdateRegistroClienteEnderecoDto) {
    return `This action updates a #${id} registroClienteEndereco`;
  }

  remove(id: number) {
    return `This action removes a #${id} registroClienteEndereco`;
  }
}
