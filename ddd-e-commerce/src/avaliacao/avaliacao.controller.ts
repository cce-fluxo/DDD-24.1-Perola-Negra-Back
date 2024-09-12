import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AvaliacaoService } from './avaliacao.service';
import { CreateAvaliacaoDto } from './dto/create-avaliacao.dto';
import { UpdateAvaliacaoDto } from './dto/update-avaliacao.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('avaliacao')
@Controller('avaliacao')
export class AvaliacaoController {
  constructor(private readonly avaliacaoService: AvaliacaoService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma avaliação' })
  create(@Body() createAvaliacaoDto: CreateAvaliacaoDto) {
    return this.avaliacaoService.create(createAvaliacaoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as avaliações' })
  findAll() {
    return this.avaliacaoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna uma avaliação específica por ID' })
  findOne(@Param('id') id: string) {
    return this.avaliacaoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza uma avaliação existente' })
  update(
    @Param('id') id: string,
    @Body() updateAvaliacaoDto: UpdateAvaliacaoDto,
  ) {
    return this.avaliacaoService.update(+id, updateAvaliacaoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma avaliação existente' })
  remove(@Param('id') id: string) {
    return this.avaliacaoService.remove(+id);
  }
}
