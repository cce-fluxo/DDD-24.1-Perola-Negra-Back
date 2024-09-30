import { ApiProperty } from '@nestjs/swagger';

export class CreateRegistroFavoritadoDto {
  @ApiProperty({
    description: 'ID do produto',
    example: '1',
  })
  id_produto: number;

  @ApiProperty({
    description: 'ID do cliente',
    example: '1',
  })
  id_cliente: number;
}
