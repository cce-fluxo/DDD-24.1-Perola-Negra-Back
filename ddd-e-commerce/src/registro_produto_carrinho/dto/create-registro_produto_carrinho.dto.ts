import { ApiProperty } from '@nestjs/swagger';

export class CreateRegistroProdutoCarrinhoDto {
    @ApiProperty({
        description: 'Quntidade do produto no carrinho',
        example: '1',
      })
    qtd_produto: number;

    @ApiProperty({
        description: 'ID do rpoduto',
        example: '1',
      })
    id_produto: number;

    @ApiProperty({
        description: 'ID do carrinho',
        example: '1',
      })
    id_carrinho: number;
}
