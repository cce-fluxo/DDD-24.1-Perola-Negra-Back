import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistroProdutoDescontoService } from './registro_produto_desconto.service';
import { CreateRegistroProdutoDescontoDto } from './dto/create-registro_produto_desconto.dto';
import { UpdateRegistroProdutoDescontoDto } from './dto/update-registro_produto_desconto.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('registro_produto_desconto')
@Controller('registro-produto-desconto')
export class RegistroProdutoDescontoController {
  constructor(private readonly registroProdutoDescontoService: RegistroProdutoDescontoService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um registro de produto e desconto' })
  create(@Body() createRegistroProdutoDescontoDto: CreateRegistroProdutoDescontoDto) {
    return this.registroProdutoDescontoService.create(createRegistroProdutoDescontoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os registros de produto e desconto' })
  findAll() {
    return this.registroProdutoDescontoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um registro de produto e desconto específico por ID' })
  findOne(@Param('id') id: string) {
    return this.registroProdutoDescontoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um registro de produto e desconto existente' })
  update(@Param('id') id: string, @Body() updateRegistroProdutoDescontoDto: UpdateRegistroProdutoDescontoDto) {
    return this.registroProdutoDescontoService.update(+id, updateRegistroProdutoDescontoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um registro de produto e desconto existente' })
  remove(@Param('id') id: string) {
    return this.registroProdutoDescontoService.remove(+id);
  }
}
