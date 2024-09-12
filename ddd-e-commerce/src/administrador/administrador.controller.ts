import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('administrador')
@Controller('administrador')
export class AdministradorController {
  constructor(private readonly administradorService: AdministradorService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um administrador' })
  create(@Body() createAdministradorDto: CreateAdministradorDto) {
    return this.administradorService.create(createAdministradorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os administradores' })
  findAll() {
    return this.administradorService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um administrador específico por ID' })
  findOne(@Param('id') id: string) {
    return this.administradorService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um administrador existente' })
  update(
    @Param('id') id: string,
    @Body() updateAdministradorDto: UpdateAdministradorDto,
  ) {
    return this.administradorService.update(+id, updateAdministradorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um administrador existente' })
  remove(@Param('id') id: string) {
    return this.administradorService.remove(+id);
  }
}
