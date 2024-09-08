export class CreatePedidoDto {
    codigo: string;
    qtd_produtos: number;
    DT_entrega: Date;
    DT_envio: Date;
    DT_estimada: Date;
    DT_compra: Date;
    ST_pagamento: string;
    ST_entrega: string;
    VL_frete: number;
    VL_total: number;
    clienteId: number;
    enderecoId: number;
    cupomId: number;
    pagamentoId: number;
}
