import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistroClienteEnderecoService } from './registro_cliente_endereco.service';
import { CreateRegistroClienteEnderecoDto } from './dto/create-registro_cliente_endereco.dto';
import { UpdateRegistroClienteEnderecoDto } from './dto/update-registro_cliente_endereco.dto';

@Controller('registro-cliente-endereco')
export class RegistroClienteEnderecoController {
  constructor(private readonly registroClienteEnderecoService: RegistroClienteEnderecoService) {}

  @Post()
  create(@Body() createRegistroClienteEnderecoDto: CreateRegistroClienteEnderecoDto) {
    return this.registroClienteEnderecoService.create(createRegistroClienteEnderecoDto);
  }

  @Get()
  findAll() {
    return this.registroClienteEnderecoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registroClienteEnderecoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistroClienteEnderecoDto: UpdateRegistroClienteEnderecoDto) {
    return this.registroClienteEnderecoService.update(+id, updateRegistroClienteEnderecoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registroClienteEnderecoService.remove(+id);
  }
}
