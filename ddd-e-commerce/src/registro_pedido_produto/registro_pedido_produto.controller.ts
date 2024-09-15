import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistroPedidoProdutoService } from './registro_pedido_produto.service';
import { CreateRegistroPedidoProdutoDto } from './dto/create-registro_pedido_produto.dto';
import { UpdateRegistroPedidoProdutoDto } from './dto/update-registro_pedido_produto.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('registro_pedido_produto')
@Controller('registro-pedido-produto')
export class RegistroPedidoProdutoController {
  constructor(private readonly registroPedidoProdutoService: RegistroPedidoProdutoService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um registro de pedido e produto' })
  create(@Body() createRegistroPedidoProdutoDto: CreateRegistroPedidoProdutoDto) {
    return this.registroPedidoProdutoService.create(createRegistroPedidoProdutoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os registros de pedido e produto' })
  findAll() {
    return this.registroPedidoProdutoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorn um registro de pedido e produto específico por ID' })
  findOne(@Param('id') id: string) {
    return this.registroPedidoProdutoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um registro de pedido e produto existente' })
  update(@Param('id') id: string, @Body() updateRegistroPedidoProdutoDto: UpdateRegistroPedidoProdutoDto) {
    return this.registroPedidoProdutoService.update(+id, updateRegistroPedidoProdutoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um registro de pedido e produto existente' })
  remove(@Param('id') id: string) {
    return this.registroPedidoProdutoService.remove(+id);
  }
}
