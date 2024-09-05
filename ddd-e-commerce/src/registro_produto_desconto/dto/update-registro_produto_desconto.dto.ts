import { PartialType } from '@nestjs/mapped-types';
import { CreateRegistroProdutoDescontoDto } from './create-registro_produto_desconto.dto';

export class UpdateRegistroProdutoDescontoDto extends PartialType(CreateRegistroProdutoDescontoDto) {}
