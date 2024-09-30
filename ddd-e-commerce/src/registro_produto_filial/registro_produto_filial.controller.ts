import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistroProdutoFilialService } from './registro_produto_filial.service';
import { CreateRegistroProdutoFilialDto } from './dto/create-registro_produto_filial.dto';
import { UpdateRegistroProdutoFilialDto } from './dto/update-registro_produto_filial.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('registro_produto_filial')
@Controller('registro-produto-filial')
export class RegistroProdutoFilialController {
  constructor(private readonly registroProdutoFilialService: RegistroProdutoFilialService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um registro de produto e filial' })
  create(@Body() createRegistroProdutoFilialDto: CreateRegistroProdutoFilialDto) {
    return this.registroProdutoFilialService.create(createRegistroProdutoFilialDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os registros de produto e filial' })
  findAll() {
    return this.registroProdutoFilialService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um registro de produto e filial específico por ID' })
  findOne(@Param('id') id: string) {
    return this.registroProdutoFilialService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um registro de produto e filial existente' })
  update(@Param('id') id: string, @Body() updateRegistroProdutoFilialDto: UpdateRegistroProdutoFilialDto) {
    return this.registroProdutoFilialService.update(+id, updateRegistroProdutoFilialDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um registro de produto e filial existente' })
  remove(@Param('id') id: string) {
    return this.registroProdutoFilialService.remove(+id);
  }
}
