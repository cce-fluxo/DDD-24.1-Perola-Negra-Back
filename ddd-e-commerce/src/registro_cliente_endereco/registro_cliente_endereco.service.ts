import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRegistroClienteEnderecoDto } from './dto/create-registro_cliente_endereco.dto';
import { UpdateRegistroClienteEnderecoDto } from './dto/update-registro_cliente_endereco.dto';

@Injectable()
export class RegistroClienteEnderecoService {
  constructor(private readonly prisma: PrismaService) {}

  // Cria um novo registro de cliente e endereço
  async create(data: CreateRegistroClienteEnderecoDto) {
    const registroCriado = await this.prisma.registro_cliente_endereco.create({
      data,
    });
    return registroCriado;
  }

  // Retorna todos os registros de cliente e endereço
  async findAll() {
    return this.prisma.registro_cliente_endereco.findMany();
  }

  // Retorna um registro específico por ID
  async findOne(id: number) {
    return this.prisma.registro_cliente_endereco.findUnique({ where: { id } });
  }

  // Atualiza um registro existente
  async update(
    id: number,
    updateRegistroClienteEnderecoDto: UpdateRegistroClienteEnderecoDto,
  ) {
    const registroAtualizado =
      await this.prisma.registro_cliente_endereco.update({
        where: { id },
        data: updateRegistroClienteEnderecoDto,
      });
    return registroAtualizado;
  }

  // Remove um registro existente
  async remove(id: number) {
    await this.prisma.registro_cliente_endereco.delete({ where: { id } });
    return `Registro de cliente e endereço com ID ${id} removido com sucesso!`;
  }
}
