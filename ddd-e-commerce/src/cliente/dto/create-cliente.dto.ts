import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, IsString, IsDate, IsOptional, Matches } from 'class-validator';
import { Type } from 'class-transformer'; // Import necessário para transformar a string em Date

export class CreateClienteDto {
  @ApiProperty({
    description: 'Nome do cliente',
    example: 'Casca de Bala',
  })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({
    description: 'Gênero do cliente',
    example: 'Masculino',
  })
  @IsNotEmpty()
  @IsString()
  genero: string;

  @ApiProperty({
    description: 'Data de nascimento do cliente',
    example: '1990-05-25',
  })
  @IsNotEmpty()
  @Type(() => Date) // Faz a conversão automática de string para Date
  @IsDate()
  DT_nascimento: Date;

  @ApiProperty({
    description: 'CPF do cliente',
    example: '123.456.789-00',
  })
  @IsNotEmpty()
  @Matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: 'CPF deve estar no formato XXX.XXX.XXX-XX' })
  cpf: string;

  @ApiProperty({
    description: 'Email do cliente',
    example: 'cliente@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Hash da senha do cliente',
    example: 'senhaHashed123',
  })
  @IsNotEmpty()
  @IsString()
  hash_senha: string;

  @ApiProperty({
    description: 'ID do perfil do cliente (opcional)',
    example: 1,
    required: false,
  })
  id_perfil?: number;
}
