export class CreateRegistroClienteEnderecoDto {

  /**
   * Define o nome do registro
   * @example "Endereço Principal"
   */
  nome: string;

  /**
   * Define o ID do cliente associado ao registro
   * @example 1
   */
  id_cliente: number;

  /**
   * Define o ID do endereço associado ao registro
   * @example 1
   */
  id_endereco: number;
}
