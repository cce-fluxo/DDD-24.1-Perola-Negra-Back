import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EnderecoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateEnderecoDto) {
    return this.prisma.endereco.create({ data });
  }

  findAll() {
    return this.prisma.endereco.findMany();
  }

  findOne(id: number) {
    return this.prisma.endereco.findUnique({ where: { id } });
  }

  async update(id: number, updateenderecoDto: UpdateEnderecoDto) {
    const enderecoAtualizado = await this.prisma.endereco.update({
      where: { id },
      data: updateenderecoDto,
    });
    return enderecoAtualizado;
  }

  async remove(id: number) {
    await this.prisma.endereco.delete({ where: { id } });
    return `Endereco removido com sucesso!`;
  }
}
