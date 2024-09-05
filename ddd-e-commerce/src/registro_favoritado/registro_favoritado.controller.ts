import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistroFavoritadoService } from './registro_favoritado.service';
import { CreateRegistroFavoritadoDto } from './dto/create-registro_favoritado.dto';
import { UpdateRegistroFavoritadoDto } from './dto/update-registro_favoritado.dto';

@Controller('registro-favoritado')
export class RegistroFavoritadoController {
  constructor(private readonly registroFavoritadoService: RegistroFavoritadoService) {}

  @Post()
  create(@Body() createRegistroFavoritadoDto: CreateRegistroFavoritadoDto) {
    return this.registroFavoritadoService.create(createRegistroFavoritadoDto);
  }

  @Get()
  findAll() {
    return this.registroFavoritadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registroFavoritadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistroFavoritadoDto: UpdateRegistroFavoritadoDto) {
    return this.registroFavoritadoService.update(+id, updateRegistroFavoritadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registroFavoritadoService.remove(+id);
  }
}
