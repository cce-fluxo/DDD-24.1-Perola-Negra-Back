import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCarrinhoDto } from './dto/create-carrinho.dto';
import { UpdateCarrinhoDto } from './dto/update-carrinho.dto';

@Injectable()
export class CarrinhoService {
  constructor(private readonly prisma: PrismaService) {}

  // Cria um novo carrinho
  async create(data: CreateCarrinhoDto) {
    const carrinhoCriado = await this.prisma.carrinho.create({ data });
    return carrinhoCriado;
  }

  // Retorna todos os carrinhos
  async findAll() {
    return this.prisma.carrinho.findMany();
  }

  // Retorna um carrinho específico por ID
  async findOne(id: number) {
    return this.prisma.carrinho.findUnique({ 
      where: { id },
      include: {produtos: true}
    });
  }

  // Atualiza um carrinho existente
  async update(id: number, updateCarrinhoDto: UpdateCarrinhoDto) {
    const carrinhoAtualizado = await this.prisma.carrinho.update({
      where: { id },
      data: updateCarrinhoDto,
    });
    return carrinhoAtualizado;
  }

  // Remove um carrinho existente
  async remove(id: number) {
    await this.prisma.carrinho.delete({ where: { id } });
    return `Carrinho com ID ${id} removido com sucesso!`;
  }

  //Retorna os produtos do carrinho
  async findProdutos (id: number){
    const carrinho = await this.findOne(id);
    if (!carrinho){
      throw new HttpException(
        "carrinho nao encontrado",
        HttpStatus.NOT_FOUND,
        {
          cause: new Error("Id invalido")
        })
    }

    const produtos = carrinho.produtos;
    if (produtos.length === 0){
      throw new HttpException(
        "esse carrinho nao tem produtos",
        HttpStatus.NOT_FOUND,
        {
        cause: new Error ("carrinho vazio")
        })
    }

  }
}
