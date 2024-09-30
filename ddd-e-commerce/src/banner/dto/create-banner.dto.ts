import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateBannerDto {

  @ApiProperty({
    description: 'Imagem principal do banner',
    example: 'banner_principal1.jpg',
  })
  @IsNotEmpty()
  @IsString()
  img_principal: string;

  @ApiProperty({
    description: 'Imagem secundária 1 do banner',
    example: 'banner_2.jpg',
  })
  @IsNotEmpty()
  @IsString()
  img_2: string;

  @ApiProperty({
    description: 'Imagem secundária 2 do banner',
    example: 'banner_3.jpg',
  })
  @IsNotEmpty()
  @IsString()
  img_3: string;
}
