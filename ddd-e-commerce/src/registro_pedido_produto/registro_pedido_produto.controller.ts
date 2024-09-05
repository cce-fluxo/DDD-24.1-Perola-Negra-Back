import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistroPedidoProdutoService } from './registro_pedido_produto.service';
import { CreateRegistroPedidoProdutoDto } from './dto/create-registro_pedido_produto.dto';
import { UpdateRegistroPedidoProdutoDto } from './dto/update-registro_pedido_produto.dto';

@Controller('registro-pedido-produto')
export class RegistroPedidoProdutoController {
  constructor(private readonly registroPedidoProdutoService: RegistroPedidoProdutoService) {}

  @Post()
  create(@Body() createRegistroPedidoProdutoDto: CreateRegistroPedidoProdutoDto) {
    return this.registroPedidoProdutoService.create(createRegistroPedidoProdutoDto);
  }

  @Get()
  findAll() {
    return this.registroPedidoProdutoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registroPedidoProdutoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistroPedidoProdutoDto: UpdateRegistroPedidoProdutoDto) {
    return this.registroPedidoProdutoService.update(+id, updateRegistroPedidoProdutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registroPedidoProdutoService.remove(+id);
  }
}
