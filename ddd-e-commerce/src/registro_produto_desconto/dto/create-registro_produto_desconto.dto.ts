import { ApiProperty } from '@nestjs/swagger';

export class CreateRegistroProdutoDescontoDto {
    @ApiProperty({
        description: 'ID do produto',
        example: '1',
      })
    id_produto: number;

    @ApiProperty({
        description: 'ID do desconto',
        example: '1',
      })
    id_desconto: number;
}
