import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BannerService } from './banner.service';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('banner')
@Controller('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um banner' })
  create(@Body() createBannerDto: CreateBannerDto) {
    return this.bannerService.create(createBannerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todos os banners' })
  findAll() {
    return this.bannerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um banner específico por ID' })
  findOne(@Param('id') id: string) {
    return this.bannerService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um banner existente' })
  update(@Param('id') id: string, @Body() updateBannerDto: UpdateBannerDto) {
    return this.bannerService.update(+id, updateBannerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um banner existente' })
  remove(@Param('id') id: string) {
    return this.bannerService.remove(+id);
  }
}
