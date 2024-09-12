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
  @ApiOperation({ summary: 'Create administrador' })
  create(@Body() createAdministradorDto: CreateAdministradorDto) {
    return this.administradorService.create(createAdministradorDto);
  }

  @Get()
  findAll() {
    return this.administradorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.administradorService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAdministradorDto: UpdateAdministradorDto,
  ) {
    return this.administradorService.update(+id, updateAdministradorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.administradorService.remove(+id);
  }
}
