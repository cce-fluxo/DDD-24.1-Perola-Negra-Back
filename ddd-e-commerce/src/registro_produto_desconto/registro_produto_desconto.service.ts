import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRegistroProdutoDescontoDto } from './dto/create-registro_produto_desconto.dto';
import { UpdateRegistroProdutoDescontoDto } from './dto/update-registro_produto_desconto.dto';

@Injectable()
export class RegistroProdutoDescontoService {
  constructor(private readonly prisma: PrismaService) {}

  // Cria um novo registro de produto e deconto
  async create(data: CreateRegistroProdutoDescontoDto) {
    const registroCriado = await this.prisma.registro_produto_desconto.create({
      data,
    });
    return registroCriado;
  }

  // Retorna todos os registros de produto e desconto
  async findAll() {
    return this.prisma.registro_produto_desconto.findMany();
  }

  // Retorna um registro específico por ID
  async findOne(id: number) {
    return this.prisma.registro_produto_desconto.findUnique({ where: { id } });
  }

  // Atualiza um registro existente
  async update(
    id: number,
    updateRegistroProdutoDescontoDto: UpdateRegistroProdutoDescontoDto,
  ) {
    const registroAtualizado =
      await this.prisma.registro_produto_desconto.update({
        where: { id },
        data: updateRegistroProdutoDescontoDto,
      });
    return registroAtualizado;
  }

  // Remove um registro existente
  async remove(id: number) {
    await this.prisma.registro_produto_desconto.delete({ where: { id } });
    return `Registro de produto e desconto com ID ${id} removido com sucesso!`;
  }
}
