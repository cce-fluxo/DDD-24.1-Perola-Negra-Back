import { Injectable } from '@nestjs/common';
import { CreateRegistroProdutoDescontoDto } from './dto/create-registro_produto_desconto.dto';
import { UpdateRegistroProdutoDescontoDto } from './dto/update-registro_produto_desconto.dto';

@Injectable()
export class RegistroProdutoDescontoService {
  create(createRegistroProdutoDescontoDto: CreateRegistroProdutoDescontoDto) {
    return 'This action adds a new registroProdutoDesconto';
  }

  findAll() {
    return `This action returns all registroProdutoDesconto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registroProdutoDesconto`;
  }

  update(id: number, updateRegistroProdutoDescontoDto: UpdateRegistroProdutoDescontoDto) {
    return `This action updates a #${id} registroProdutoDesconto`;
  }

  remove(id: number) {
    return `This action removes a #${id} registroProdutoDesconto`;
  }
}
