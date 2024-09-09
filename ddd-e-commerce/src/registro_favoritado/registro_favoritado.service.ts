import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRegistroFavoritadoDto } from './dto/create-registro_favoritado.dto';
import { UpdateRegistroFavoritadoDto } from './dto/update-registro_favoritado.dto';

@Injectable()
export class RegistroFavoritadoService {
  constructor(private readonly prisma: PrismaService) {}

  // Cria um novo RegistroFavoritado
  async create(data: CreateRegistroFavoritadoDto) {
    const RegistroFavoritadoCriado =
      await this.prisma.registro_favoritado.create({ data });
    return RegistroFavoritadoCriado;
  }

  // Retorna todos os RegistroFavoritados
  async findAll() {
    return this.prisma.registro_favoritado.findMany();
  }

  // Retorna um RegistroFavoritado específico por ID
  async findOne(id: number) {
    return this.prisma.registro_favoritado.findUnique({ where: { id } });
  }

  // Atualiza um RegistroFavoritado existente
  async update(
    id: number,
    updateRegistroFavoritadoDto: UpdateRegistroFavoritadoDto,
  ) {
    const RegistroFavoritadoAtualizado =
      await this.prisma.registro_favoritado.update({
        where: { id },
        data: updateRegistroFavoritadoDto,
      });
    return RegistroFavoritadoAtualizado;
  }

  // Remove um RegistroFavoritado existente
  async remove(id: number) {
    await this.prisma.registro_favoritado.delete({ where: { id } });
    return `RegistroFavoritado com ID ${id} removido com sucesso!`;
  }
}
