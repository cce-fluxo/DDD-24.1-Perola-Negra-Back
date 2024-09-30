import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateRegistroProdutoCarrinhoDto {
    @ApiProperty({
        description: 'Quantidade do produto no carrinho',
        example: 1,
    })
    @IsNotEmpty()
    @IsInt()
    qtd_produto: number;

    @ApiProperty({
        description: 'ID do produto',
        example: 1,
    })
    @IsNotEmpty()
    @IsInt()
    id_produto: number;

    @ApiProperty({
        description: 'ID do carrinho',
        example: 1,
    })
    @IsNotEmpty()
    @IsInt()
    id_carrinho: number;
}
