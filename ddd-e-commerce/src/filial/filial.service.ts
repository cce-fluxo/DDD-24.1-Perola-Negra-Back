import { Injectable } from '@nestjs/common';
import { CreateFilialDto } from './dto/create-filial.dto';
import { UpdateFilialDto } from './dto/update-filial.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FilialService {

  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateFilialDto) {
    const filialCriada = await this.prisma.filial.create({ data });
    return filialCriada;
  }

  async findAll() {
    return this.prisma.filial.findMany();
  }

  async findOne(id: number) {
    return this.prisma.filial.findUnique({ where: { id } });
  }

  async update(id: number, updateFilialDto: UpdateFilialDto) {
    const filialAtualizada = await this.prisma.filial.update({
      where: { id },
      data: updateFilialDto,
    });
    return filialAtualizada;
  }

  async remove(id: number) {
    await this.prisma.filial.delete({ where: { id } });
    return `Filial removida com sucesso!`;
  }
}
