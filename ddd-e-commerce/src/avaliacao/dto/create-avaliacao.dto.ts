import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAvaliacaoDto {

  @ApiProperty({
    description: 'Descrição/comentário da avaliação',
    example: 'Produto muito bom',
  })
  @IsNotEmpty()
  @IsString()
  descricao: string;

  @ApiProperty({
    description: 'Número de estrelas da avaliação',
    example: 5,
  })
  @IsNotEmpty()
  @IsNumber()
  estrelas: number;

  @ApiProperty({
    description: 'ID do produto avaliado',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  id_produto: number;

  @ApiProperty({
    description: 'ID do cliente que fez a avaliação',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  id_cliente: number;
}
