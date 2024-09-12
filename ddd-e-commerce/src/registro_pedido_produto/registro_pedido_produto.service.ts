import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRegistroPedidoProdutoDto } from './dto/create-registro_pedido_produto.dto';
import { UpdateRegistroPedidoProdutoDto } from './dto/update-registro_pedido_produto.dto';

@Injectable()
export class RegistroPedidoProdutoService {
  constructor(private readonly prisma: PrismaService) {}

  // Cria um novo registro de pedido e produto
  async create(data: CreateRegistroPedidoProdutoDto) {
    const registroCriado = await this.prisma.registro_pedido_produto.create({ data });
    return registroCriado;
  }

  // Retorna todos os registros de pedido e produto
  async findAll() {
    return this.prisma.registro_pedido_produto.findMany();
  }

  // Retorna um registro específico por ID
  async findOne(id: number) {
    return this.prisma.registro_pedido_produto.findUnique({ where: { id } });
  }

  // Atualiza um registro existente
  async update(id: number, updateRegistroPedidoProdutoDto: UpdateRegistroPedidoProdutoDto) {
    const registroAtualizado = await this.prisma.registro_pedido_produto.update({
      where: { id },
      data: updateRegistroPedidoProdutoDto,
    });
    return registroAtualizado;
  }

  // Remove um registro existente
  async remove(id: number) {
    await this.prisma.registro_pedido_produto.delete({ where: { id } });
    return `Registro de pedido e produto com ID ${id} removido com sucesso!`;
  }
}
