import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import * as bcrypt from 'bcrypt';
import { Produto } from 'src/produto/entities/produto.entity';
import { ProdutoService } from 'src/produto/produto.service';

@Injectable()
export class ClienteService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly produtoService: ProdutoService) {}

 // Cria um novo cliente
  async create(data: CreateClienteDto) {
    const clienteCriado = await this.prisma.cliente.create({ 
      data: { 
        ...data,
        hash_senha: await bcrypt.hash(data.hash_senha, 10)
      }
    });

    return clienteCriado;
  }


  // Retorna todos os clientes
  async findAll() {
    return this.prisma.cliente.findMany();
  }

  // Retorna um cliente específico por ID
  async findOne(id: number) {
    return this.prisma.cliente.findUnique
    ({
      
      where: { id },
      include: {favoritos: true}, 

    });
  }

  async findByEmail(email: string){
    return this.prisma.cliente.findUnique({ where : {email:email} });
  }

  // Atualiza um cliente existente
  async update(id: number, updateClienteDto: UpdateClienteDto) {
    const clienteAtualizado = await this.prisma.cliente.update({
      where: { id },
      data: updateClienteDto,
    });
    return clienteAtualizado;
  }

  // Remove um cliente existente
  async remove(id: number) {
    await this.prisma.cliente.delete({ where: { id } });
    return `Cliente com ID ${id} removido com sucesso!`;
  }

  async findFavoritados (id: number){
    const cliente = await this.findOne(id); //busca o cliente pelo ID
    if (!cliente){
      throw new HttpException (
        "cliente nao encontrado",
        HttpStatus.NOT_FOUND,
        {cause: new Error('Id invalido'),}
      )
    }

    const registros = cliente.favoritos; //verifica os registros de registro_favoritado
    if (registros.length === 0){
      throw new HttpException (
        "Cliente nao tem produtos favoritados",
        HttpStatus.NOT_FOUND
      )
    }

    const produtosFavoritos = [];
    const idProdutosFavoritos = [];

    registros.forEach(registro => //pega o ID de cada produto associado ao cliente e coloca numa lista
      idProdutosFavoritos.push(registro.id_produto)
    );

    for (const id of idProdutosFavoritos) { 
      const produto = await this.produtoService.findOne(id); //busca no produtoService qual o produto por ID
      if (produto) {
          produtosFavoritos.push(produto); //joga o produto encontrado numa lista de produtos
      }

      else {
        produtosFavoritos.push(`${id} não encontrado`);

      }
  }

    return produtosFavoritos;
  }
}
