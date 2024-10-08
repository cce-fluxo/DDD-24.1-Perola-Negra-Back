import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('cliente')
@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo cliente' })
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.create(createClienteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os clientes' })
  findAll() {
    return this.clienteService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter um cliente pelo ID' })
  findOne(@Param('id') id: string) {
    return this.clienteService.findOne(+id);
  }

  @Get(':id/favoritados')
  @ApiOperation({ summary: 'Retorna os produtos favoritos do cliente' })
  findFavoritados(@Param('id') id: string) {
    return this.clienteService.findFavoritados(+id);
  }

  @Get(':id/pedidos')
  @ApiOperation({ summary: 'Retorna os pedidos do cliente' })
  findPedidos(@Param('id') id: string) {
    return this.clienteService.findPedidos(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um cliente pelo ID' })
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clienteService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um cliente pelo ID' })
  remove(@Param('id') id: string) {
    return this.clienteService.remove(+id);
  }
}
