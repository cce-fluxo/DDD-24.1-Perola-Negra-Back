import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Avaliacao } from 'src/avaliacao/entities/avaliacao.entity';
import { error } from 'console';

@Injectable()
export class ProdutoService {

  constructor(private readonly prisma: PrismaService ) {}

  async create(data: CreateProdutoDto) {
    const produtoCriado = await this.prisma.produto.create({ data })
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
    return this.prisma.produto.findUnique(
      {
        where: {id},
        include: {avaliacoes: true}  
      });
  }

  async update(id: number, updateprodutoDto: UpdateProdutoDto) {
    const produtoAtualizado = await this.prisma.produto.update({
      where: { id },
      data: updateprodutoDto,
    });
    return produtoAtualizado;
  }

  async remove(id: number) {
    await this.prisma.produto.delete({where: {id}});
    return `Produto removido com sucesso!`

  }

  async findAvaliacoes (id: number){

    const produto = await this.findOne (id);

    if (!produto) {

      throw new HttpException (
        "Produto nao encontrado", 
        HttpStatus.NOT_FOUND,
        { 
        cause: new Error ('Id invalido')
        });
    }

    const avaliacoes = produto.avaliacoes;

    if (avaliacoes.length === 0)
    {
      throw new HttpException (
        "Nao ha avaliacoes para esse produto", 
        HttpStatus.NOT_FOUND,
        { 
        cause: new Error ('Produto nao avaliado')
        });
    }
    return avaliacoes;

  }
}
