import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriaService {

  constructor(private readonly prisma: PrismaService ) {}

  create(data: CreateCategoriaDto) {
    const categoriaCriada = this.prisma.categoria.create({data})
    return categoriaCriada;
  }

  findAll() {
    return this.prisma.categoria.findMany();
  }

  findOne(id: number) {
    return this.prisma.categoria.findUnique({where: {id}});
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return this.prisma.categoria.update({
      where: {id}, 
      data: updateCategoriaDto});
  }

  async remove(id: number) {
    await this.prisma.categoria.delete({where: {id}});
    return `categoria removido com sucesso!`

  }
}
