import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PagamentoService } from './pagamento.service';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('pagamento')
@Controller('pagamento')
export class PagamentoController {
  constructor(private readonly pagamentoService: PagamentoService) {}

  @Post()
  @ApiOperation({summary: 'Cria um pagamento'})
  create(@Body() createPagamentoDto: CreatePagamentoDto) {
    return this.pagamentoService.create(createPagamentoDto);
  }

  @Get()
  @ApiOperation({summary: 'Lista todos os pagamentos'})
  findAll() {
    return this.pagamentoService.findAll();
  }

  @Get(':id')
  @ApiOperation ({summary: 'Retorna um pagamento especifico por ID'})
  findOne(@Param('id') id: string) {
    return this.pagamentoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation ({summary: 'Atualiza um pagamento existente'})
  update(@Param('id') id: string, @Body() updatePagamentoDto: UpdatePagamentoDto) {
    return this.pagamentoService.update(+id, updatePagamentoDto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'Remove um pagamento existente'})
  remove(@Param('id') id: string) {
    return this.pagamentoService.remove(+id);
  }
}
