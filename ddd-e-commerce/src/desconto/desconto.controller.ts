import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DescontoService } from './desconto.service';
import { CreateDescontoDto } from './dto/create-desconto.dto';
import { UpdateDescontoDto } from './dto/update-desconto.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('desconto') // Definindo a seção 'desconto' no Swagger
@Controller('desconto')
export class DescontoController {
  constructor(private readonly descontoService: DescontoService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo desconto' })
  create(@Body() createDescontoDto: CreateDescontoDto) {
    return this.descontoService.create(createDescontoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os descontos' })
  findAll() {
    return this.descontoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter um desconto pelo ID' })
  findOne(@Param('id') id: string) {
    return this.descontoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um desconto pelo ID' })
  update(@Param('id') id: string, @Body() updateDescontoDto: UpdateDescontoDto) {
    return this.descontoService.update(+id, updateDescontoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um desconto pelo ID' })
  remove(@Param('id') id: string) {
    return this.descontoService.remove(+id);
  }
}

