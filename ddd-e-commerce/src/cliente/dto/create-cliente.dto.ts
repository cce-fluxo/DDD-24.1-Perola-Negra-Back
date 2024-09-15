import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
  @ApiProperty({
    description: 'Nome do cliente',
    example: 'Casca de Bala',
  })
  nome: string;

  @ApiProperty({
    description: 'Gênero do cliente',
    example: 'Masculino',
  })
  genero: string;

  @ApiProperty({
    description: 'Data de nascimento do cliente',
    example: '1990-05-25',
  })
  DT_nascimento: Date;

  @ApiProperty({
    description: 'CPF do cliente',
    example: '123.456.789-00',
  })
  cpf: string;

  @ApiProperty({
    description: 'Email do cliente',
    example: 'cliente@gmail.com',
  })
  email: string;

  @ApiProperty({
    description: 'Hash da senha do cliente',
    example: 'senhaHashed123',
  })
  hash_senha: string;

  @ApiProperty({
    description: 'ID do perfil do cliente (opcional)',
    example: 1,
    required: false,
  })
  id_perfil?: number;
}
