import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilialService } from './filial.service';
import { CreateFilialDto } from './dto/create-filial.dto';
import { UpdateFilialDto } from './dto/update-filial.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('filial') // Adiciona a seção 'filial' no Swagger
@Controller('filial')
export class FilialController {
  constructor(private readonly filialService: FilialService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova filial' })
  create(@Body() createFilialDto: CreateFilialDto) {
    return this.filialService.create(createFilialDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as filiais' })
  findAll() {
    return this.filialService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter uma filial pelo ID' })
  findOne(@Param('id') id: string) {
    return this.filialService.findOne(+id);
  }

  
  @Get(':id/produtos')
  @ApiOperation({ summary: 'Retorna os produtos de uma filial' })
  findProdutos(@Param('id') id: string) {
    return this.filialService.findProdutos(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma filial pelo ID' })
  update(@Param('id') id: string, @Body() updateFilialDto: UpdateFilialDto) {
    return this.filialService.update(+id, updateFilialDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma filial pelo ID' })
  remove(@Param('id') id: string) {
    return this.filialService.remove(+id);
  }
}

