import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateCategoriaDto) {
    const categoriaCriada = await this.prisma.categoria.create({ data });
    return categoriaCriada;
  }

  findAll() {
    return this.prisma.categoria.findMany();
  }

  findOne(nome: string) {
    return this.prisma.categoria.findFirst({
      where: { nome },
      include: { produtos: true },
    });
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    const categoriaAtualizada = await this.prisma.categoria.update({
      where: { id },
      data: updateCategoriaDto,
    });
    return categoriaAtualizada;
  }

  async remove(id: number) {
    await this.prisma.categoria.delete({ where: { id } });
    return `categoria removida com sucesso!`;
  }

  async findProdutos(nome: string) {
    const categoria = await this.prisma.categoria.findFirst({
      where: { nome },
      include: { produtos: true },
    });

    if (!categoria) {
      //segura esse tratamento de erro pai
      throw new HttpException(
        'Categoria nao encontrada',
        HttpStatus.NOT_FOUND,
        {
          cause: new Error('ID invalido'),
        },
      );
    }

    const produtos = categoria.produtos;
    if (produtos.length === 0) {
      throw new HttpException('Categoria sem produtos', HttpStatus.NOT_FOUND);
    }

    return produtos;
  }
}
