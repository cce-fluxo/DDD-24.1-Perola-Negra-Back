import { PartialType } from '@nestjs/mapped-types';
import { CreateRegistroFavoritadoDto } from './create-registro_favoritado.dto';

export class UpdateRegistroFavoritadoDto extends PartialType(CreateRegistroFavoritadoDto) {}
