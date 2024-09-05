import { Injectable } from '@nestjs/common';
import { CreateRegistroPedidoProdutoDto } from './dto/create-registro_pedido_produto.dto';
import { UpdateRegistroPedidoProdutoDto } from './dto/update-registro_pedido_produto.dto';

@Injectable()
export class RegistroPedidoProdutoService {
  create(createRegistroPedidoProdutoDto: CreateRegistroPedidoProdutoDto) {
    return 'This action adds a new registroPedidoProduto';
  }

  findAll() {
    return `This action returns all registroPedidoProduto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registroPedidoProduto`;
  }

  update(id: number, updateRegistroPedidoProdutoDto: UpdateRegistroPedidoProdutoDto) {
    return `This action updates a #${id} registroPedidoProduto`;
  }

  remove(id: number) {
    return `This action removes a #${id} registroPedidoProduto`;
  }
}
