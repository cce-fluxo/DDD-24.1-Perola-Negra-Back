import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsDateString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateDescontoDto {

  @ApiProperty({
    description: 'Percentual de desconto',
    example: 15,
  })
  @IsNotEmpty()
  @IsNumber()
  pr_desconto: number;

  @ApiProperty({
    description: 'Data final do desconto',
    example: '2024-12-31',
  })
  @IsNotEmpty()
  @Type(() => Date) // Faz a conversão automática de string para Date
  @IsDate()
  dt_final: Date;
}
