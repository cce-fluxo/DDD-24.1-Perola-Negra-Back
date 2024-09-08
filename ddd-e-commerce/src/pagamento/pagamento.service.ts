import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';

@Injectable()
export class PagamentoService {
  constructor(private readonly prisma: PrismaService) {}

  // Cria um novo pagamento
  async create(data: CreatePagamentoDto) {
    const pagamentoCriado = await this.prisma.pagamento.create({ data });
    return pagamentoCriado;
  }

  // Retorna todos os pagamentos
  async findAll() {
    return this.prisma.pagamento.findMany();
  }

  // Retorna um pagamento específico por ID
  async findOne(id: number) {
    return this.prisma.pagamento.findUnique({ where: { id } });
  }

  // Atualiza um pagamento existente
  async update(id: number, updatePagamentoDto: UpdatePagamentoDto) {
    const pagamentoAtualizado = await this.prisma.pagamento.update({
      where: { id },
      data: updatePagamentoDto,
    });
    return pagamentoAtualizado;
  }

  // Remove um pagamento existente
  async remove(id: number) {
    await this.prisma.pagamento.delete({ where: { id } });
    return `Pagamento com ID ${id} removido com sucesso!`;
  }
}

