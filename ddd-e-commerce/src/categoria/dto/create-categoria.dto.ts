import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriaDto {
  @ApiProperty({
    description: 'Nome da categoria',
    example: 'Blusas',
  })
  nome: string;
}
