import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RegistroFavoritadoService } from './registro_favoritado.service';
import { CreateRegistroFavoritadoDto } from './dto/create-registro_favoritado.dto';
import { UpdateRegistroFavoritadoDto } from './dto/update-registro_favoritado.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('registro_favoritado')
@Controller('registro-favoritado')
export class RegistroFavoritadoController {
  constructor(
    private readonly registroFavoritadoService: RegistroFavoritadoService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Cria um registro de produto favoritado' })
  create(@Body() createRegistroFavoritadoDto: CreateRegistroFavoritadoDto) {
    return this.registroFavoritadoService.create(createRegistroFavoritadoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os registros de produto favoritado' })
  findAll() {
    return this.registroFavoritadoService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retorn um registro de produto favoritado específico por ID',
  })
  findOne(@Param('id') id: string) {
    return this.registroFavoritadoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza um registro de produto favoritado existente',
  })
  update(
    @Param('id') id: string,
    @Body() updateRegistroFavoritadoDto: UpdateRegistroFavoritadoDto,
  ) {
    return this.registroFavoritadoService.update(
      +id,
      updateRegistroFavoritadoDto,
    );
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remove um registro de produto favoritado existente',
  })
  remove(@Param('id') id: string) {
    return this.registroFavoritadoService.remove(+id);
  }

  @Delete(':id_produto/:id_cliente')
  @ApiOperation({
    summary: 'Remove um registro de produto favoritado existente',
  })
  removeByProdutoECliente(
    @Param('id_produto') id_produto: string,
    @Param('id_cliente') id_cliente: string,
  ) {
    return this.registroFavoritadoService.removeByProdutoECliente(
      +id_produto,
      +id_cliente,
    );
  }
}
