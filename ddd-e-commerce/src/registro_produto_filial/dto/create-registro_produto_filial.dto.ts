import { ApiProperty } from '@nestjs/swagger';

export class CreateRegistroProdutoFilialDto {
    @ApiProperty({
        description: 'Quntidade do produto na filial',
        example: '1',
      })
    qtd_produto: number;

    @ApiProperty({
        description: 'ID do produto',
        example: '1',
      })
    id_produto: number;

    @ApiProperty({
        description: 'ID da filial',
        example: '1',
      })
    id_filial: number;
}
