import { Injectable } from '@nestjs/common';
import { CreateDescontoDto } from './dto/create-desconto.dto';
import { UpdateDescontoDto } from './dto/update-desconto.dto';

@Injectable()
export class DescontoService {
  create(createDescontoDto: CreateDescontoDto) {
    return 'This action adds a new desconto';
  }

  findAll() {
    return `This action returns all desconto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} desconto`;
  }

  update(id: number, updateDescontoDto: UpdateDescontoDto) {
    return `This action updates a #${id} desconto`;
  }

  remove(id: number) {
    return `This action removes a #${id} desconto`;
  }
}
