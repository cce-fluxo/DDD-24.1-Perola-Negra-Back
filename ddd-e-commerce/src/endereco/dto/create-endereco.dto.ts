import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateEnderecoDto {

  @ApiProperty({
    description: 'Nome da rua',
    example: 'Rua de 123',
  })
  @IsNotEmpty()
  @IsString()
  rua: string;

  @ApiProperty({
    description: 'Número do imóvel',
    example: 123,
  })
  @IsNotEmpty()
  @IsNumber()
  numero: number;

  @ApiProperty({
    description: 'Estado',
    example: 'RJ',
  })
  @IsNotEmpty()
  @IsString()
  estado: string;

  @ApiProperty({
    description: 'Complemento do endereço',
    example: 'Apartamento 101',
  })
  @IsString()
  complemento: string;

  @ApiProperty({
    description: 'CEP do endereço',
    example: '12345-678',
  })
  @IsNotEmpty()
  @IsString()
  cep: string;
}
