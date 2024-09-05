import { Injectable } from '@nestjs/common';
import { CreateRegistroFavoritadoDto } from './dto/create-registro_favoritado.dto';
import { UpdateRegistroFavoritadoDto } from './dto/update-registro_favoritado.dto';

@Injectable()
export class RegistroFavoritadoService {
  create(createRegistroFavoritadoDto: CreateRegistroFavoritadoDto) {
    return 'This action adds a new registroFavoritado';
  }

  findAll() {
    return `This action returns all registroFavoritado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} registroFavoritado`;
  }

  update(id: number, updateRegistroFavoritadoDto: UpdateRegistroFavoritadoDto) {
    return `This action updates a #${id} registroFavoritado`;
  }

  remove(id: number) {
    return `This action removes a #${id} registroFavoritado`;
  }
}
