import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';

@Injectable()
export class BannerService {
  constructor(private readonly prisma: PrismaService) {}

  // Cria um novo banner
  async create(data: CreateBannerDto) {
    const bannerCriado = await this.prisma.banner.create({ data });
    return bannerCriado;
  }

  // Retorna todos os banners
  async findAll() {
    return this.prisma.banner.findMany();
  }

  // Retorna um banner específico por ID
  async findOne(id: number) {
    return this.prisma.banner.findUnique({ where: { id } });
  }

  // Atualiza um banner existente
  async update(id: number, updateBannerDto: UpdateBannerDto) {
    const bannerAtualizado = await this.prisma.banner.update({
      where: { id },
      data: updateBannerDto,
    });
    return bannerAtualizado;
  }

  // Remove um banner existente
  async remove(id: number) {
    await this.prisma.banner.delete({ where: { id } });
    return `Banner com ID ${id} removido com sucesso!`;
  }
}
