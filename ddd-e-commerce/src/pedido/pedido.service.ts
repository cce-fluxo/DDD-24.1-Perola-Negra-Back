import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidoService {
  constructor(private readonly prisma: PrismaService) {}

  // Cria um novo pedido
  async create(data: CreatePedidoDto) {
    // Adicione qualquer validação ou lógica adicional aqui, se necessário

    const pedidoCriado = await this.prisma.pedido.create({ data });
    return pedidoCriado;
  }

  // Retorna todos os pedidos
  async findAll() {
    return this.prisma.pedido.findMany();
  }

  // Retorna um pedido específico por ID
  async findOne(id: number) {
    const pedido = await this.prisma.pedido.findUnique({ where: { id } });
    if (!pedido) {
      throw new BadRequestException(`Pedido com ID ${id} não encontrado.`);
    }
    return pedido;
  }

  // Atualiza um pedido existente
  async update(id: number, updatePedidoDto: UpdatePedidoDto) {
    const pedidoAtualizado = await this.prisma.pedido.update({
      where: { id },
      data: updatePedidoDto,
    });
    return pedidoAtualizado;
  }

  // Remove um pedido existente
  async remove(id: number) {
    await this.prisma.pedido.delete({ where: { id } });
    return `Pedido com ID ${id} removido com sucesso!`;
  }
}
