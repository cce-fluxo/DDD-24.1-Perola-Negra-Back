import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateRegistroProdutoDescontoDto {
    @ApiProperty({
        description: 'ID do produto',
        example: 1,
    })
    @IsNotEmpty()
    @IsInt()
    id_produto: number;

    @ApiProperty({
        description: 'ID do desconto',
        example: 1,
    })
    @IsNotEmpty()
    @IsInt()
    id_desconto: number;
}
