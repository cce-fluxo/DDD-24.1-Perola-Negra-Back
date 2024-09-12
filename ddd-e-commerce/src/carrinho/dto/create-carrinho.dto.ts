import { ApiProperty } from '@nestjs/swagger';

export class CreateCarrinhoDto {
  @ApiProperty({
    description: 'ID do produto no carrinho',
    example: 1,
  })
  clienteId: number;
}
