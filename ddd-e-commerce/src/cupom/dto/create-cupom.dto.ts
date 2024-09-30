import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCupomDto {

  @ApiProperty({
    description: 'Nome do cupom',
    example: 'DESC20',
  })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({
    description: 'Código do cupom',
    example: '#12345678',
  })
  @IsNotEmpty()
  @IsString()
  codigo: string;

  @ApiProperty({
    description: 'Percentual de desconto do cupom',
    example: 20,
  })
  @IsNotEmpty()
  @IsNumber()
  PR_desconto: number;

  @ApiProperty({
    description: 'Data de validade do cupom',
    example: '2024-12-31',
  })
  @IsNotEmpty()
  @Type(() => Date) // Faz a conversão automática de string para Date
  @IsDate()
  DT_validade: Date;
}

