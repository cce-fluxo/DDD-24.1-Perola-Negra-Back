import { ApiProperty } from '@nestjs/swagger';

export class CreateFilialDto {
  @ApiProperty({
    description: 'Nome da filial',
    example: 'Filial Centro',
  })
  nome: string;

  @ApiProperty({
    description: 'ID do endereço relacionado à filial',
    example: 1,
  })
  id_endereco: number;
}

