import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateAdministradorDto {

  @ApiProperty({
    description: 'Email do administrador',
    example: 'adm@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Senha do administrador',
    example: '123456',
  })
  @IsNotEmpty()
  @IsString()
  hash_senha: string;
}
