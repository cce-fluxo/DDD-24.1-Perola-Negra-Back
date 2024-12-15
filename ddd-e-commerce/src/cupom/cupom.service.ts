import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCupomDto } from './dto/create-cupom.dto';
import { UpdateCupomDto } from './dto/update-cupom.dto';

@Injectable()
export class CupomService {
  constructor(private readonly prisma: PrismaService) {}

  // Cria um novo cupom
  async create(data: CreateCupomDto) {
    const cupomCriado = await this.prisma.cupom.create({ data });
    return cupomCriado;
  }

  // Retorna todos os cupons
  async findAll() {
    return this.prisma.cupom.findMany();
  }

  // Retorna um cupom específico por ID
  async findOne(id: number) {
    return this.prisma.cupom.findUnique({ where: { id } });
  }

  async findByCode(codigo: string) {
    return this.prisma.cupom.findMany({ where: { codigo } });
  }

  // Atualiza um cupom existente
  async update(id: number, updateCupomDto: UpdateCupomDto) {
    const cupomAtualizado = await this.prisma.cupom.update({
      where: { id },
      data: updateCupomDto,
    });
    return cupomAtualizado;
  }

  // Remove um cupom existente
  async remove(id: number) {
    await this.prisma.cupom.delete({ where: { id } });
    return `Cupom com ID ${id} removido com sucesso!`;
  }
}
