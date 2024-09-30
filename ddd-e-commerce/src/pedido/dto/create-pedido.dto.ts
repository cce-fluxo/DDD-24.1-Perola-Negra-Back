import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePedidoDto {

  @ApiProperty({
    description: 'Define a quantidade de produtos do pedido',
    example: 5,
  })
  @IsNotEmpty()
  @IsNumber()
  qtd_produtos: number;

  @ApiProperty({
    description: 'Define a data de entrega do pedido no formato ISO 8601 (yyyy-MM-ddTHH:mm:ssZ)',
    example: "2024-12-21T00:00:00Z",
  })
  @IsNotEmpty()
  @Type(() => Date) // Faz a conversão automática de string para Date
  @IsDate()
  DT_entrega: Date;

  @ApiProperty({
    description: 'Define a data de envio do pedido no formato ISO 8601 (yyyy-MM-ddTHH:mm:ssZ)',
    example: "2024-12-20T00:00:00Z",
  })
  @IsNotEmpty()
  @Type(() => Date) // Faz a conversão automática de string para Date
  @IsDate()
  DT_envio: Date;

  @ApiProperty({
    description: 'Define a data estimada de entrega do pedido no formato ISO 8601 (yyyy-MM-ddTHH:mm:ssZ)',
    example: "2024-12-22T00:00:00Z",
  })
  @IsNotEmpty()
  @Type(() => Date) // Faz a conversão automática de string para Date
  @IsDate()
  DT_estimada: Date;

  @ApiProperty({
    description: 'Define a data de compra do pedido no formato ISO 8601 (yyyy-MM-ddTHH:mm:ssZ)',
    example: "2024-12-18T00:00:00Z",
  })
  @IsNotEmpty()
  @Type(() => Date) // Faz a conversão automática de string para Date
  @IsDate()
  DT_compra: Date;

  @ApiProperty({
    description: 'Define o status do pagamento do pedido. Pode ser "AGUARDANDO PAGAMENTO" ou "PAGO".',
    example: "PAGO",
  })
  @IsNotEmpty()
  @IsString()
  ST_pagamento: string;

  @ApiProperty({
    description: 'Define o status da entrega do pedido. Pode ser "AGUARDANDO ENTREGA", "EM TRANSPORTE" ou "ENTREGUE".',
    example: "EM TRANSPORTE",
  })
  @IsNotEmpty()
  @IsString()
  ST_entrega: string;

  @ApiProperty({
    description: 'Define o valor do frete do pedido',
    example: 20.5,
  })
  @IsNotEmpty()
  @IsNumber()
  VL_frete: number;

  @ApiProperty({
    description: 'Define o valor total do pedido',
    example: 120.75,
  })
  @IsNotEmpty()
  @IsNumber()
  VL_total: number;

  @ApiProperty({
    description: 'Define o ID do cliente associado ao pedido',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  clienteId: number;

  @ApiProperty({
    description: 'Define o ID do endereço associado ao pedido',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  enderecoId: number;

  @ApiProperty({
    description: 'Define o ID do cupom associado ao pedido',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  cupomId: number;

  @ApiProperty({
    description: 'Define o ID do pagamento associado ao pedido',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  pagamentoId: number;
}
