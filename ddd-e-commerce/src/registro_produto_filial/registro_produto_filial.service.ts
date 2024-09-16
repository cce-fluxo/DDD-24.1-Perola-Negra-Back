import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRegistroProdutoFilialDto } from './dto/create-registro_produto_filial.dto';
import { UpdateRegistroProdutoFilialDto } from './dto/update-registro_produto_filial.dto';

@Injectable()
export class RegistroProdutoFilialService {
  constructor(private readonly prisma: PrismaService) {}

  // Cria um novo registro de produto e filial
  async create(data: CreateRegistroProdutoFilialDto) {
    const registroCriado = await this.prisma.registro_produto_filial.create({
      data,
    });
    return registroCriado;
  }

  // Retorna todos os registros de produto e filial
  async findAll() {
    return this.prisma.registro_produto_filial.findMany();
  }

  // Retorna um registro específico por ID
  async findOne(id: number) {
    return this.prisma.registro_produto_filial.findUnique({ where: { id } });
  }

  // Atualiza um registro existente
  async update(
    id: number,
    updateRegistroProdutoFilialDto: UpdateRegistroProdutoFilialDto,
  ) {
    const registroAtualizado =
      await this.prisma.registro_produto_filial.update({
        where: { id },
        data: updateRegistroProdutoFilialDto,
      });
    return registroAtualizado;
  }

  // Remove um registro existente
  async remove(id: number) {
    await this.prisma.registro_produto_filial.delete({ where: { id } });
    return `Registro de produto e filial com ID ${id} removido com sucesso!`;
  }
}
