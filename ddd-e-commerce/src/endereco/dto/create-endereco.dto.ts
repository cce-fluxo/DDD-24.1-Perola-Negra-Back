import { ApiProperty } from '@nestjs/swagger';

export class CreateEnderecoDto {
  @ApiProperty({
    description: 'ID do endereço',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Nome da rua',
    example: 'Rua de 123',
  })
  rua: string;

  @ApiProperty({
    description: 'Número do imóvel',
    example: 123,
  })
  numero: number;

  @ApiProperty({
    description: 'Estado',
    example: 'RJ',
  })
  estado: string;

  @ApiProperty({
    description: 'Complemento do endereço',
    example: 'Apartamento 101',
  })
  complemento: string;

  @ApiProperty({
    description: 'CEP do endereço',
    example: '12345-678',
  })
  cep: string;
}
