import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CupomService } from './cupom.service';
import { CreateCupomDto } from './dto/create-cupom.dto';
import { UpdateCupomDto } from './dto/update-cupom.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('cupom') // Definindo a seção 'cupom' no Swagger
@Controller('cupom')
export class CupomController {
  constructor(private readonly cupomService: CupomService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo cupom' })
  create(@Body() createCupomDto: CreateCupomDto) {
    return this.cupomService.create(createCupomDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os cupons' })
  findAll() {
    return this.cupomService.findAll();
  }

  @Get('codigo/:codigo')
  @ApiOperation({ summary: 'Obter um cupom pelo código' })
  findByCode(@Param('codigo') codigo: string) {
    return this.cupomService.findByCode(codigo);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter um cupom pelo ID' })
  findOne(@Param('id') id: string) {
    return this.cupomService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um cupom pelo ID' })
  update(@Param('id') id: string, @Body() updateCupomDto: UpdateCupomDto) {
    return this.cupomService.update(+id, updateCupomDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um cupom pelo ID' })
  remove(@Param('id') id: string) {
    return this.cupomService.remove(+id);
  }
}
