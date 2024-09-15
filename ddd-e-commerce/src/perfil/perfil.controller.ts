import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('perfil')
@Controller('perfil')
export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo perfil' })
  create(@Body() createPerfilDto: CreatePerfilDto) {
    return this.perfilService.create(createPerfilDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os perfis' })
  findAll() {
    return this.perfilService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um perfil específico por ID' })
  findOne(@Param('id') id: string) {
    return this.perfilService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um perfil existente' })
  update(@Param('id') id: string, @Body() updatePerfilDto: UpdatePerfilDto) {
    return this.perfilService.update(+id, updatePerfilDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um perfil existente' })
  remove(@Param('id') id: string) {
    return this.perfilService.remove(+id);
  }
}
