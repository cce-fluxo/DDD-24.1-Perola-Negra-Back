import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';

@Injectable()
export class PerfilService {
  constructor(private readonly prisma: PrismaService) {}

  // Cria um novo perfil
  async create(data: CreatePerfilDto) {
    const perfilCriado = await this.prisma.perfil.create({ data });
    return perfilCriado;
  }

  // Retorna todos os perfis
  async findAll() {
    return this.prisma.perfil.findMany();
  }

  // Retorna um perfil específico por ID
  async findOne(id: number) {
    return this.prisma.perfil.findUnique({ where: { id } });
  }

  // Atualiza um perfil existente
  async update(id: number, updatePerfilDto: UpdatePerfilDto) {
    const perfilAtualizado = await this.prisma.perfil.update({
      where: { id },
      data: updatePerfilDto,
    });
    return perfilAtualizado;
  }

  // Remove um perfil existente
  async remove(id: number) {
    await this.prisma.perfil.delete({ where: { id } });
    return `Perfil com ID ${id} removido com sucesso!`;
  }
}
