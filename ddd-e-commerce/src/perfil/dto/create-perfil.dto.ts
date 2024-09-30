import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreatePerfilDto {

  @ApiProperty({
    description: 'Define o nome do usuario',
    example: 'Leandro admin',
  })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({
    description: 'Breve descricao do usuario',
    example: 'esse tal de leandro é bom mesmo',
  })
  @IsNotEmpty()
  @IsString()
  descricao: string;
}
