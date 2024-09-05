import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistroProdutoFilialService } from './registro_produto_filial.service';
import { CreateRegistroProdutoFilialDto } from './dto/create-registro_produto_filial.dto';
import { UpdateRegistroProdutoFilialDto } from './dto/update-registro_produto_filial.dto';

@Controller('registro-produto-filial')
export class RegistroProdutoFilialController {
  constructor(private readonly registroProdutoFilialService: RegistroProdutoFilialService) {}

  @Post()
  create(@Body() createRegistroProdutoFilialDto: CreateRegistroProdutoFilialDto) {
    return this.registroProdutoFilialService.create(createRegistroProdutoFilialDto);
  }

  @Get()
  findAll() {
    return this.registroProdutoFilialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registroProdutoFilialService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistroProdutoFilialDto: UpdateRegistroProdutoFilialDto) {
    return this.registroProdutoFilialService.update(+id, updateRegistroProdutoFilialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registroProdutoFilialService.remove(+id);
  }
}
