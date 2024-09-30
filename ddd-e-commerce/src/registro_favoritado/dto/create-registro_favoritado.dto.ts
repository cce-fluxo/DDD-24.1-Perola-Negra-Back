import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateRegistroFavoritadoDto {
  @ApiProperty({
    description: 'ID do produto',
    example: 3,
  })
  @IsNotEmpty()
  @IsInt()
  id_produto: number;

  @ApiProperty({
    description: 'ID do cliente',
    example: 1,
  })
  @IsNotEmpty()
  @IsInt()
  id_cliente: number;
}
