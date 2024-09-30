import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean } from "class-validator";

export class CreatePagamentoDto {

  @ApiProperty({
    description: 'Verifica se o pagamento foi feito com cartão',
    example: true,
  })
  @IsBoolean()
  cartao: boolean;

  @ApiProperty({
    description: 'Verifica se o pagamento foi feito com Pix',
    example: false,
  })
  @IsBoolean()
  pix: boolean;

  @ApiProperty({
    description: 'Verifica se o pagamento foi feito com boleto',
    example: false,
  })
  @IsBoolean()
  boleto: boolean;
}
