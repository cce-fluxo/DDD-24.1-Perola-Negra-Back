import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateFilialDto } from './dto/create-filial.dto';
import { UpdateFilialDto } from './dto/update-filial.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProdutoService } from 'src/produto/produto.service';

@Injectable()
export class FilialService {

  constructor(
    private readonly prisma: PrismaService,
    private readonly produtoService: ProdutoService) {}

  async create(data: CreateFilialDto) {
    const filialCriada = await this.prisma.filial.create({ data });
    return filialCriada;
  }

  async findAll() {
    return this.prisma.filial.findMany();
  }

  async findOne(id: number) {
    return this.prisma.filial.findUnique(
      { 
        where: { id }, 
        include: {produtos: true }
      });
  }

  async update(id: number, updateFilialDto: UpdateFilialDto) {
    const filialAtualizada = await this.prisma.filial.update({
      where: { id },
      data: updateFilialDto,
    });
    return filialAtualizada;
  }

  async findProdutos (id: number){
    const filial = await this.findOne(id); //busca a filial por ID
    if (!filial)
    {
      throw new HttpException (
        "Filial nao encontrada", 
        HttpStatus.NOT_FOUND, 
        {cause: new Error ('Id invalido')})
    }

    const registroProdutos = filial.produtos;//busca os registros produto_filial
    if (registroProdutos.length === 0)
    {
      throw new HttpException (
        "essa filial nao possui produtos",
        HttpStatus.NOT_FOUND
      )
    }

    const idProdutos = [];
    const qtdEstoqueFilial =[];
    let index = 0; 
    registroProdutos.forEach(registro => {
      idProdutos.push(registro.id_produto);//coloca os IDs de cada produto numa lista
      qtdEstoqueFilial.push(registro.qtd_produto);//coloca a quantidade dos produtos de cada registro nua lista
    });

    const produtos = [];
    for (const id of idProdutos) {
      const produto = await this.produtoService.findOne (id);//percorre a lista de IDs e procura qual produto por ID
      
      if (produto){
        produtos.push({
          ...produto, //copia as propriedades do produto 
          "qtd_estoque": qtdEstoqueFilial[index]}); //Atualiza a qtd_estoque do produto para aquela filial
        index ++;
      }
    }

    return produtos; //retorna a lista de produtos + a qtd de estoque na filial
  }

  async remove(id: number) {
    await this.prisma.filial.delete({ where: { id } });
    return `Filial removida com sucesso!`;
  }
}
