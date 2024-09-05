import { PartialType } from '@nestjs/mapped-types';
import { CreateRegistroProdutoCarrinhoDto } from './create-registro_produto_carrinho.dto';

export class UpdateRegistroProdutoCarrinhoDto extends PartialType(CreateRegistroProdutoCarrinhoDto) {}
