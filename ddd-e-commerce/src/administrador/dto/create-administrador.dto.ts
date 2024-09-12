import { ApiProperty } from '@nestjs/swagger';

export class CreateAdministradorDto {
  @ApiProperty({
    description: 'Email do administrador',
    example: 'adm@gmail.com',
    required: true,
  })
  email: string;
  @ApiProperty({
    description: 'Senha do administrador',
    example: '123456',
    required: true,
  })
  hash_senha: string;
}
