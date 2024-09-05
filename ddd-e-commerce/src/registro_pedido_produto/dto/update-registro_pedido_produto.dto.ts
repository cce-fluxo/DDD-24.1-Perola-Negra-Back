import { PartialType } from '@nestjs/mapped-types';
import { CreateRegistroPedidoProdutoDto } from './create-registro_pedido_produto.dto';

export class UpdateRegistroPedidoProdutoDto extends PartialType(CreateRegistroPedidoProdutoDto) {}
