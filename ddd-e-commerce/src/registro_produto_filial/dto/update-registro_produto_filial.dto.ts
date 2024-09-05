import { PartialType } from '@nestjs/mapped-types';
import { CreateRegistroProdutoFilialDto } from './create-registro_produto_filial.dto';

export class UpdateRegistroProdutoFilialDto extends PartialType(CreateRegistroProdutoFilialDto) {}
