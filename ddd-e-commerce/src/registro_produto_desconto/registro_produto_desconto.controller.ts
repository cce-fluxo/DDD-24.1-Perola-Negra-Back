import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistroProdutoDescontoService } from './registro_produto_desconto.service';
import { CreateRegistroProdutoDescontoDto } from './dto/create-registro_produto_desconto.dto';
import { UpdateRegistroProdutoDescontoDto } from './dto/update-registro_produto_desconto.dto';

@Controller('registro-produto-desconto')
export class RegistroProdutoDescontoController {
  constructor(private readonly registroProdutoDescontoService: RegistroProdutoDescontoService) {}

  @Post()
  create(@Body() createRegistroProdutoDescontoDto: CreateRegistroProdutoDescontoDto) {
    return this.registroProdutoDescontoService.create(createRegistroProdutoDescontoDto);
  }

  @Get()
  findAll() {
    return this.registroProdutoDescontoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registroProdutoDescontoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistroProdutoDescontoDto: UpdateRegistroProdutoDescontoDto) {
    return this.registroProdutoDescontoService.update(+id, updateRegistroProdutoDescontoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registroProdutoDescontoService.remove(+id);
  }
}
