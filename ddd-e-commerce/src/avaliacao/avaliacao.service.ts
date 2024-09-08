import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';

@Injectable()
export class AvaliacaoService {
  constructor(private readonly prisma: PrismaService) {}

  // Cria uma nova avaliação
  async create(data: CreateAvaliacaoDto) {
    const avaliacaoCriada = await this.prisma.avaliacao.create({ data });
    return avaliacaoCriada;
  }

  // Retorna todas as avaliações
  async findAll() {
    return this.prisma.avaliacao.findMany();
  }

  // Retorna uma avaliação específica por ID
  async findOne(id: number) {
    return this.prisma.avaliacao.findUnique({ where: { id } });
  }

  // Atualiza uma avaliação existente
  async update(id: number, updateAvaliacaoDto: UpdateAvaliacaoDto) {
    const avaliacaoAtualizada = await this.prisma.avaliacao.update({
      where: { id },
      data: updateAvaliacaoDto,
    });
    return avaliacaoAtualizada;
  }

  // Remove uma avaliação existente
  async remove(id: number) {
    await this.prisma.avaliacao.delete({ where: { id } });
    return `Avaliação com ID ${id} removida com sucesso!`;
  }
}
