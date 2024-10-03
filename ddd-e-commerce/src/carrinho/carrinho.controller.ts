import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CarrinhoService } from './carrinho.service';
import { CreateCarrinhoDto } from './dto/create-carrinho.dto';
import { UpdateCarrinhoDto } from './dto/update-carrinho.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('carrinho')
@Controller('carrinho')
export class CarrinhoController {
  constructor(private readonly carrinhoService: CarrinhoService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um carrinho' })
  create(@Body() createCarrinhoDto: CreateCarrinhoDto) {
    return this.carrinhoService.create(createCarrinhoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os carrinhos' })
  findAll() {
    return this.carrinhoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um carrinho específico por ID' })
  findOne(@Param('id') id: string) {
    return this.carrinhoService.findOne(+id);
  }

  @Get(':id/produtos')
  @ApiOperation({ summary: 'Retorna os produtos de um carrinho' })
  findProdutos(@Param('id') id: string) {
    return this.carrinhoService.findProdutos(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um carrinho existente' })
  update(
    @Param('id') id: string,
    @Body() updateCarrinhoDto: UpdateCarrinhoDto,
  ) {
    return this.carrinhoService.update(+id, updateCarrinhoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um carrinho existente' })
  remove(@Param('id') id: string) {
    return this.carrinhoService.remove(+id);
  }
}
