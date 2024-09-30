import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProdutoDto {
  
  @ApiProperty({
    description: 'Define o nome do produto',
    example: 'Tênis Esportivo',
  })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({
    description: 'Define o tamanho do produto',
    example: 'M',
  })
  @IsNotEmpty()
  @IsString()
  tamanho: string;

  @ApiProperty({
    description: 'Define a cor do produto',
    example: 'Preto',
  })
  @IsNotEmpty()
  @IsString()
  cor: string;

  @ApiProperty({
    description: 'Define o preço do produto',
    example: 199.99,
  })
  @IsNotEmpty()
  @IsNumber()
  preco: number;

  @ApiProperty({
    description: 'Define a descrição do produto',
    example: 'Tênis confortável para corridas e atividades físicas.',
  })
  @IsNotEmpty()
  @IsString()
  descricao: string;

  @ApiProperty({
    description: 'Define a URL da imagem principal do produto',
    example: 'https://example.com/imagem-principal.jpg',
  })
  @IsNotEmpty()
  @IsString()
  img_principal: string;

  @ApiProperty({
    description: 'Define a quantidade em estoque do produto',
    example: 50,
  })
  @IsNotEmpty()
  @IsNumber()
  qtd_estoque: number;

  @ApiProperty({
    description: 'Define a categoria do produto (opcional)',
    example: 1,
  })
  @IsOptional()
  @IsNumber()
  id_categoria?: number;

  @ApiProperty({
    description: 'Indica se o produto foi favoritado (opcional)',
    example: true,
  })
  @IsNotEmpty()
  @IsBoolean()
  favoritado: boolean;
}
