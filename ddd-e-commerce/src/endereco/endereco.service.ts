import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto } from './dto/create-Endereco.dto';
import { UpdateEnderecoDto } from './dto/update-Endereco.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EnderecoService {

  constructor(private readonly prisma: PrismaService ) {}

  async create(data: CreateEnderecoDto) {
    const enderecoCriado = await this.prisma.endereco.create({data})
    return enderecoCriado;
  }

  findAll() {
    return this.prisma.endereco.findMany();
  }

  findOne(id: number) {
    return this.prisma.endereco.findUnique({where: {id}});
  }

  async update(id: number, updateenderecoDto: UpdateEnderecoDto) {
    const enderecoAtualizado = await this.prisma.endereco.update({
      where: { id },
      data: updateenderecoDto,
    });
    return enderecoAtualizado;
  }

  async remove(id: number) {
    await this.prisma.endereco.delete({where: {id}});
    return `Endereco removido com sucesso!`

  }
}