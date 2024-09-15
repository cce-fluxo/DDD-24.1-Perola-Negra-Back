import { ApiProperty } from '@nestjs/swagger';

export class CreateDescontoDto {
  @ApiProperty({
    description: 'Percentual de desconto',
    example: 15,
  })
  pr_desconto: number;

  @ApiProperty({
    description: 'Data final do desconto',
    example: '2024-12-31',
  })
  dt_final: Date;
}

