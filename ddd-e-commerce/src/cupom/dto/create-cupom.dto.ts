import { ApiProperty } from '@nestjs/swagger';

export class CreateCupomDto {

  @ApiProperty({
    description: 'Nome do cupom',
    example: 'DESC20',
  })
  nome: string;

  @ApiProperty({
    description: 'Código do cupom',
    example: '#12345678',
  })
  codigo: string;

  @ApiProperty({
    description: 'Percentual de desconto do cupom',
    example: 20,
  })
  PR_desconto: number;

  @ApiProperty({
    description: 'Data de validade do cupom',
    example: '2024-12-31',
  })
  DT_validade: Date;
}

