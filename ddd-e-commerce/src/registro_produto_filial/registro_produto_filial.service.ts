import { Injectable } from '@nestjs/common';
import { CreateRegistroProdutoFilialDto } from './dto/create-registro_produto_filial.dto';
import { UpdateRegistroProdutoFilialDto } from './dto/update-registro_produto_filial.dto';

@Injectable()
export class RegistroProdutoFilialService {
  create(createRegistroProdutoFilialDto: CreateRegistroProdutoFilialDto) {
    return 'This action adds a new registroProdutoFilial';
  }

  findAll() {
    return `This action returns all registroProdutoFilial`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registroProdutoFilial`;
  }

  update(id: number, updateRegistroProdutoFilialDto: UpdateRegistroProdutoFilialDto) {
    return `This action updates a #${id} registroProdutoFilial`;
  }

  remove(id: number) {
    return `This action removes a #${id} registroProdutoFilial`;
  }
}
