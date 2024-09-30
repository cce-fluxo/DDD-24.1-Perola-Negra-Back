import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRegistroClienteEnderecoDto {
  
  @ApiProperty({
    description: 'Define o nome do registro',
    example: 'Endereço Principal',
  })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({
    description: 'Define o ID do cliente associado ao registro',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  id_cliente: number;

  @ApiProperty({
    description: 'Define o ID do endereço associado ao registro',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  id_endereco: number;
}

