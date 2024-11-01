import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AdministradorService {
  constructor(private readonly prisma: PrismaService) {}

  // Cria um novo administrador
  async create(data: CreateAdministradorDto) {
    const administradorCriado = await this.prisma.administrador.create({ 
      data: { 
        ...data,
        hash_senha: await bcrypt.hash(data.hash_senha, 10)
      }
    });
    return administradorCriado;
  }

  // Retorna todos os administradores
  async findAll() {
    return this.prisma.administrador.findMany();
  }

  // Retorna um administrador específico por ID
  async findOne(id: number) {
    return this.prisma.administrador.findUnique({ where: { id } });
  }

  //Retorna um adminsitrador pelo email
  async findByEmail(email: string){
    return this.prisma.administrador.findUnique({ where : {email:email} });
  }


  // Atualiza um administrador existente
  async update(id: number, updateAdministradorDto: UpdateAdministradorDto) {
    const administradorAtualizado = await this.prisma.administrador.update({
      where: { id },
      data: updateAdministradorDto,
    });
    return administradorAtualizado;
  }

  // Remove um administrador existente
  async remove(id: number) {
    await this.prisma.administrador.delete({ where: { id } });
    return `Administrador com ID ${id} removido com sucesso!`;
  }
}

