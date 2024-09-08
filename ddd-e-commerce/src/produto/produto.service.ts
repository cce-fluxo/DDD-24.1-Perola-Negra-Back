import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProdutoService {

  constructor(private readonly prisma: PrismaService ) {}

  create(data: CreateProdutoDto) {
    const produtoCriado = this.prisma.produto.create({data})
    return produtoCriado;
  }

  findAll() {
    return this.prisma.produto.findMany({
      include: {
        categoria: true
      }
    });
  }

  findOne(id: number) {
    return this.prisma.produto.findUnique({where: {id}});
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return this.prisma.produto.update({
      where: {id}, 
      data: updateProdutoDto});
  }

  async remove(id: number) {
    await this.prisma.produto.delete({where: {id}});
    return `Produto removido com sucesso!`

  }
}
