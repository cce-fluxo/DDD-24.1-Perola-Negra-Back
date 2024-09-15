export class CreateProdutoDto {

  /**
   * Define o nome do produto
   * @example Tênis Esportivo
   */
  nome: string;

  /**
   * Define o tamanho do produto
   * @example M
   */
  tamanho: string;

  /**
   * Define a cor do produto
   * @example Preto
   */
  cor: string;

  /**
   * Define o preço do produto
   * @example 199.99
   */
  preco: number;

  /**
   * Define a descrição do produto
   * @example Tênis confortável para corridas e atividades físicas.
   */
  descricao: string;

  /**
   * Define a URL da imagem principal do produto
   * @example https//example.com/imagem-principal.jpg
   */
  img_principal: string;

  /**
   * Define a quantidade em estoque do produto
   * @example 50
   */
  qtd_estoque: number;

  /**
   * Define a categoria do produto (opcional)
   * @example 1
   */
  id_categoria?: number;

  /**
   * Indica se o produto foi favoritado (opcional)
   * @example true
   */
  favoritado: boolean;
}

