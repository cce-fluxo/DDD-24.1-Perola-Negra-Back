import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoriaDto {

  @ApiProperty({
    description: 'Nome da categoria',
    example: 'Blusas',
  })
  @IsNotEmpty()
  @IsString()
  nome: string;
}
