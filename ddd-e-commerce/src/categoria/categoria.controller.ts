import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('categoria')
@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma categoria' })
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriaService.create(createCategoriaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as categorias' })
  findAll() {
    return this.categoriaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna uma categoria específica por ID' })
  findOne(@Param('id') id: string) {
    return this.categoriaService.findOne(+id);
  }

  @Get(':nome/produtos')
  @ApiOperation({ summary: 'Retorna a lista de produtos da categoria' })
  findProdutos(@Param('nome') nome: string) {
    return this.categoriaService.findProdutos(nome);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza uma categoria existente' })
  update(
    @Param('id') id: string,
    @Body() updateCategoriaDto: UpdateCategoriaDto,
  ) {
    return this.categoriaService.update(+id, updateCategoriaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma categoria existente' })
  remove(@Param('id') id: string) {
    return this.categoriaService.remove(+id);
  }
}
