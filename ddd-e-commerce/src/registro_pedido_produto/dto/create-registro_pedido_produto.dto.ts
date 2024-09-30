import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateRegistroPedidoProdutoDto {
    @ApiProperty({
        description: 'Quantidade do produto no pedido',
        example: 1,
    })
    @IsNotEmpty()
    @IsInt()
    qtd_produto: number;

    @ApiProperty({
        description: 'ID do pedido',
        example: 4,
    })
    @IsNotEmpty()
    @IsInt()
    id_pedido: number;

    @ApiProperty({
        description: 'ID do produto',
        example: 3,
    })
    @IsNotEmpty()
    @IsInt()
    id_produto: number;
}
