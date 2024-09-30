import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateCarrinhoDto {

  @ApiProperty({
    description: 'ID do cliente que possui o carrinho',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  clienteId: number;
}
