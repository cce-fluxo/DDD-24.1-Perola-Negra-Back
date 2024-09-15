export class CreatePedidoDto {

    /**
     * Define a quantidade de produtos do pedido
     * @example 5
     */
    qtd_produtos: number;

    /**
     * Define a data de entrega do pedido no formato ISO 8601 (yyyy-MM-ddTHH:mm:ssZ)
     * @example "2024-12-21T00:00:00Z"
     */
    DT_entrega: Date;

    /**
     * Define a data de envio do pedido no formato ISO 8601 (yyyy-MM-ddTHH:mm:ssZ)
     * @example "2024-12-20T00:00:00Z"
     */
    DT_envio: Date;

    /**
     * Define a data estimada de entrega do pedido no formato ISO 8601 (yyyy-MM-ddTHH:mm:ssZ)
     * @example "2024-12-22T00:00:00Z"
     */
    DT_estimada: Date;

    /**
     * Define a data de compra do pedido no formato ISO 8601 (yyyy-MM-ddTHH:mm:ssZ)
     * @example "2024-12-18T00:00:00Z"
     */
    DT_compra: Date;

    /**
     * Define o status do pagamento do pedido. Pode ser "AGUARDANDO PAGAMENTO" ou "PAGO".
     * @example "PAGO"
     */
    ST_pagamento: string;

    /**
     * Define o status da entrega do pedido. Pode ser "AGUARDANDO ENTREGA", "EM TRANSPORTE" ou "ENTREGUE".
     * @example "EM TRANSPORTE"
     */
    ST_entrega: string;

    /**
     * Define o valor do frete do pedido
     * @example 20.5
     */
    VL_frete: number;

    /**
     * Define o valor total do pedido
     * @example 120.75
     */
    VL_total: number;

    /**
     * Define o ID do cliente associado ao pedido
     * @example 1
     */
    clienteId: number;

    /**
     * Define o ID do endereço associado ao pedido
     * @example 2
     */
    enderecoId: number;

    /**
     * Define o ID do cupom associado ao pedido
     * @example 3
     */
    cupomId: number;

    /**
     * Define o ID do pagamento associado ao pedido
     * @example 4
     */
    pagamentoId: number;
}
