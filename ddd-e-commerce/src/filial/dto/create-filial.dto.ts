import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateFilialDto {

  @ApiProperty({
    description: 'Nome da filial',
    example: 'Filial Centro',
  })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({
    description: 'ID do endereço relacionado à filial',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  id_endereco: number;
}
