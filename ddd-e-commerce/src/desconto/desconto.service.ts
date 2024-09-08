import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDescontoDto } from './dto/create-desconto.dto';
import { UpdateDescontoDto } from './dto/update-desconto.dto';

@Injectable()
export class DescontoService {
  constructor(private readonly prisma: PrismaService) {}

  // Cria um novo desconto
  async create(data: CreateDescontoDto) {
    const descontoCriado = await this.prisma.desconto.create({ data });
    return descontoCriado;
  }

  // Retorna todos os descontos
  async findAll() {
    return this.prisma.desconto.findMany();
  }

  // Retorna um desconto específico por ID
  async findOne(id: number) {
    return this.prisma.desconto.findUnique({ where: { id } });
  }

  // Atualiza um desconto existente
  async update(id: number, updateDescontoDto: UpdateDescontoDto) {
    const descontoAtualizado = await this.prisma.desconto.update({
      where: { id },
      data: updateDescontoDto,
    });
    return descontoAtualizado;
  }

  // Remove um desconto existente
  async remove(id: number) {
    await this.prisma.desconto.delete({ where: { id } });
    return `Desconto com ID ${id} removido com sucesso!`;
  }
}
