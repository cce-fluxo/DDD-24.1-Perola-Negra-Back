import { Injectable } from '@nestjs/common';
import { CreateRegistroProdutoCarrinhoDto } from './dto/create-registro_produto_carrinho.dto';
import { UpdateRegistroProdutoCarrinhoDto } from './dto/update-registro_produto_carrinho.dto';

@Injectable()
export class RegistroProdutoCarrinhoService {
  create(createRegistroProdutoCarrinhoDto: CreateRegistroProdutoCarrinhoDto) {
    return 'This action adds a new registroProdutoCarrinho';
  }

  findAll() {
    return `This action returns all registroProdutoCarrinho`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registroProdutoCarrinho`;
  }

  update(id: number, updateRegistroProdutoCarrinhoDto: UpdateRegistroProdutoCarrinhoDto) {
    return `This action updates a #${id} registroProdutoCarrinho`;
  }

  remove(id: number) {
    return `This action removes a #${id} registroProdutoCarrinho`;
  }
}
