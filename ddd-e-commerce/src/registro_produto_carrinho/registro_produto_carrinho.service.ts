import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRegistroProdutoCarrinhoDto } from './dto/create-registro_produto_carrinho.dto';
import { UpdateRegistroProdutoCarrinhoDto } from './dto/update-registro_produto_carrinho.dto';

@Injectable()
export class RegistroProdutoCarrinhoService {
  constructor(private readonly prisma: PrismaService) {}

  // Cria um novo registro de produto e carrinho
  async create(data: CreateRegistroProdutoCarrinhoDto) {
    const registroCriado = await this.prisma.registro_produto_carrinho.create({
      data,
    });
    return registroCriado;
  }

  // Retorna todos os registros de produto e carrinho
  async findAll() {
    return this.prisma.registro_produto_carrinho.findMany();
  }

  // Retorna um registro específico por ID
  async findOne(id: number) {
    return this.prisma.registro_produto_carrinho.findUnique({ where: { id } });
  }

  findByCarrinhoId(carrinhoId: number) {
    return this.prisma.registro_produto_carrinho.findMany({
      where: { id_carrinho: carrinhoId },
    });
  }

  // Atualiza um registro existente
  async update(
    id: number,
    updateRegistroProdutoCarrinhoDto: UpdateRegistroProdutoCarrinhoDto,
  ) {
    const registroAtualizado =
      await this.prisma.registro_produto_carrinho.update({
        where: { id },
        data: updateRegistroProdutoCarrinhoDto,
      });
    return registroAtualizado;
  }

  // Remove um registro existente
  async remove(id: number) {
    await this.prisma.registro_produto_carrinho.delete({ where: { id } });
    return `Registro de produto e carrinho com ID ${id} removido com sucesso!`;
  }
}
