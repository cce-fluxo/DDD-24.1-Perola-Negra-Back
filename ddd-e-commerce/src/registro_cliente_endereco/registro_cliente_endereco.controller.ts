import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RegistroClienteEnderecoService } from './registro_cliente_endereco.service';
import { CreateRegistroClienteEnderecoDto } from './dto/create-registro_cliente_endereco.dto';
import { UpdateRegistroClienteEnderecoDto } from './dto/update-registro_cliente_endereco.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('registro_cliente_endereco')
@Controller('registro-cliente-endereco')
export class RegistroClienteEnderecoController {
  constructor(
    private readonly registroClienteEnderecoService: RegistroClienteEnderecoService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo registro de cliente e endereço' })
  create(
    @Body() createRegistroClienteEnderecoDto: CreateRegistroClienteEnderecoDto,
  ) {
    return this.registroClienteEnderecoService.create(
      createRegistroClienteEnderecoDto,
    );
  }

  @Get('cliente/:id')
  @ApiOperation({ summary: 'Lista todos os registros de endereco do cliente' })
  findByUser(@Param('id') id: string) {
    return this.registroClienteEnderecoService.findByUser(+id);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retorna um registro de cliente e endereço específico por ID',
  })
  findOne(@Param('id') id: string) {
    return this.registroClienteEnderecoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza um registro de cliente e endereço existente',
  })
  update(
    @Param('id') id: string,
    @Body() updateRegistroClienteEnderecoDto: UpdateRegistroClienteEnderecoDto,
  ) {
    return this.registroClienteEnderecoService.update(
      +id,
      updateRegistroClienteEnderecoDto,
    );
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Remove um registro de cliente e endereço existente',
  })
  remove(@Param('id') id: string) {
    return this.registroClienteEnderecoService.remove(+id);
  }
}
