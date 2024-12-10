import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRegistroFavoritadoDto } from './dto/create-registro_favoritado.dto';
import { UpdateRegistroFavoritadoDto } from './dto/update-registro_favoritado.dto';

@Injectable()
export class RegistroFavoritadoService {
  constructor(private readonly prisma: PrismaService) {}

  // Cria um novo RegistroFavoritado
  async create(data: CreateRegistroFavoritadoDto) {
    const isFavoritado = await this.validar(data);

    if (!isFavoritado) {
      const RegistroFavoritadoCriado =
        await this.prisma.registro_favoritado.create({ data });
      return RegistroFavoritadoCriado;
    } else {
      throw new HttpException('Produto ja favoritado', HttpStatus.CONFLICT, {
        cause: 'O cliete ja favoritou o produto',
      });
    }
  }

  // Retorna todos os RegistroFavoritados
  async findAll() {
    return this.prisma.registro_favoritado.findMany();
  }

  // Retorna um RegistroFavoritado específico por ID
  async findOne(id: number) {
    return this.prisma.registro_favoritado.findUnique({ where: { id } });
  }

  async findByProdutoIdClienteId(id_produto: number, id_cliente: number) {
    return this.prisma.registro_favoritado.findMany({
      where: { id_produto, id_cliente },
    });
  }

  async removeByProdutoECliente(id_produto: number, id_cliente: number) {
    await this.prisma.registro_favoritado.deleteMany({
      where: { id_produto, id_cliente },
    });
    return `RegistroFavoritado com ProdutoID ${id_produto} e ClienteID ${id_cliente} removido com sucesso!`;
  }

  // Atualiza um RegistroFavoritado existente
  async update(
    id: number,
    updateRegistroFavoritadoDto: UpdateRegistroFavoritadoDto,
  ) {
    const RegistroFavoritadoAtualizado =
      await this.prisma.registro_favoritado.update({
        where: { id },
        data: updateRegistroFavoritadoDto,
      });
    return RegistroFavoritadoAtualizado;
  }

  // Remove um RegistroFavoritado existente
  async remove(id: number) {
    await this.prisma.registro_favoritado.delete({ where: { id } });
    return `RegistroFavoritado com ID ${id} removido com sucesso!`;
  }

  //valida se o cliente ja favoritou o produto (retorna true se ja foi favoritado e false se nao foi favoritado)
  async validar(data: CreateRegistroFavoritadoDto) {
    let isFavoritado = false;
    const registros = await this.findAll();

    for (const registro of registros) {
      if (
        registro.id_cliente === data.id_cliente &&
        registro.id_produto === data.id_produto
      ) {
        isFavoritado = true;
        break;
      }
    }

    return isFavoritado;
  }
}
