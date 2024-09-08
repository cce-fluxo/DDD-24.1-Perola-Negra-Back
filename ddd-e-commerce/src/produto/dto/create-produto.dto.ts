import { IsInt, IsNotEmpty, IsNumber, IsString, IsBoolean } from 'class-validator';

export class CreateProdutoDto {

  nome: string;
  tamanho: string;
  cor: string;
  preco: number;
  descricao: string;
  img_principal: string;
  qtd_estoque: number;
  id_categoria?: number;
  favoritado: boolean; // Opcional, já que pode não fazer sentido para o produto em si
}

