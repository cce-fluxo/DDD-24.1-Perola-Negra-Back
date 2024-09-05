import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistroProdutoCarrinhoService } from './registro_produto_carrinho.service';
import { CreateRegistroProdutoCarrinhoDto } from './dto/create-registro_produto_carrinho.dto';
import { UpdateRegistroProdutoCarrinhoDto } from './dto/update-registro_produto_carrinho.dto';

@Controller('registro-produto-carrinho')
export class RegistroProdutoCarrinhoController {
  constructor(private readonly registroProdutoCarrinhoService: RegistroProdutoCarrinhoService) {}

  @Post()
  create(@Body() createRegistroProdutoCarrinhoDto: CreateRegistroProdutoCarrinhoDto) {
    return this.registroProdutoCarrinhoService.create(createRegistroProdutoCarrinhoDto);
  }

  @Get()
  findAll() {
    return this.registroProdutoCarrinhoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registroProdutoCarrinhoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistroProdutoCarrinhoDto: UpdateRegistroProdutoCarrinhoDto) {
    return this.registroProdutoCarrinhoService.update(+id, updateRegistroProdutoCarrinhoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registroProdutoCarrinhoService.remove(+id);
  }
}
