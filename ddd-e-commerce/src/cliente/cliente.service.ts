import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(private readonly prisma: PrismaService) {}

  // Cria um novo cliente
  async create(data: CreateClienteDto) {
    const clienteCriado = await this.prisma.cliente.create({ data });
    return clienteCriado;
  }

  // Retorna todos os clientes
  async findAll() {
    return this.prisma.cliente.findMany();
  }

  // Retorna um cliente específico por ID
  async findOne(id: number) {
    return this.prisma.cliente.findUnique({ where: { id } });
  }

  // Atualiza um cliente existente
  async update(id: number, updateClienteDto: UpdateClienteDto) {
    const clienteAtualizado = await this.prisma.cliente.update({
      where: { id },
      data: updateClienteDto,
    });
    return clienteAtualizado;
  }

  // Remove um cliente existente
  async remove(id: number) {
    await this.prisma.cliente.delete({ where: { id } });
    return `Cliente com ID ${id} removido com sucesso!`;
  }
}
