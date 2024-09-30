import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateRegistroProdutoFilialDto {
    @ApiProperty({
        description: 'Quantidade do produto na filial',
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
        description: 'ID da filial',
        example: 1,
    })
    @IsNotEmpty()
    @IsInt()
    id_filial: number;
}
