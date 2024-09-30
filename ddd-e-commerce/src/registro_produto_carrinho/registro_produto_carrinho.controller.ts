import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistroProdutoCarrinhoService } from './registro_produto_carrinho.service';
import { CreateRegistroProdutoCarrinhoDto } from './dto/create-registro_produto_carrinho.dto';
import { UpdateRegistroProdutoCarrinhoDto } from './dto/update-registro_produto_carrinho.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('registro_produto_carrinho')
@Controller('registro-produto-carrinho')
export class RegistroProdutoCarrinhoController {
  constructor(private readonly registroProdutoCarrinhoService: RegistroProdutoCarrinhoService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um registro de produto e carrinho' })
  create(@Body() createRegistroProdutoCarrinhoDto: CreateRegistroProdutoCarrinhoDto) {
    return this.registroProdutoCarrinhoService.create(createRegistroProdutoCarrinhoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os registros de produto e carrinho' })
  findAll() {
    return this.registroProdutoCarrinhoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um registro de produto e carrinho específico por ID' })
  findOne(@Param('id') id: string) {
    return this.registroProdutoCarrinhoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um registro de produto e carrinho existente' })
  update(@Param('id') id: string, @Body() updateRegistroProdutoCarrinhoDto: UpdateRegistroProdutoCarrinhoDto) {
    return this.registroProdutoCarrinhoService.update(+id, updateRegistroProdutoCarrinhoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um registro de produto e carrinho existente' })
  remove(@Param('id') id: string) {
    return this.registroProdutoCarrinhoService.remove(+id);
  }
}
