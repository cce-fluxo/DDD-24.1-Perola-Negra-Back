import { ApiProperty } from '@nestjs/swagger';

export class CreateRegistroPedidoProdutoDto {
    @ApiProperty({
        description: 'Quntidade do produto no pedido',
        example: '1',
      })
    qtd_produto: number;

    @ApiProperty({
        description: 'ID do pedido',
        example: '1',
      })
    id_pedido: number;

    @ApiProperty({
        description: 'ID do produto',
        example: '1',
      })
    id_produto: number;
}
