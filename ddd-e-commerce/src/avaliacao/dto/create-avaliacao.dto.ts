import { ApiProperty } from '@nestjs/swagger';

export class CreateAvaliacaoDto {
  @ApiProperty({
    description: 'Descrição/comentário da avaliação',
    example: 'Produto muito bom',
  })
  descricao: string;

  @ApiProperty({
    description: 'Número de estrelas da avaliação',
    example: 5,
  })
  estrelas: number;

  @ApiProperty({
    description: 'ID do produto avaliado',
    example: 1,
  })
  id_produto: number;

  @ApiProperty({
    description: 'ID do cliente que fez a avaliação',
    example: 1,
  })
  id_cliente: number;
}
