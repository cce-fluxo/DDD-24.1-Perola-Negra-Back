import { ApiProperty } from '@nestjs/swagger';

export class CreateBannerDto {
  @ApiProperty({
    description: 'Imagem principal do banner',
    example: 'banner_principal.jpg',
  })
  img_principal: string;

  @ApiProperty({
    description: 'Imagem secundária 1 do banner',
    example: 'banner_2.jpg',
  })
  img_2: string;

  @ApiProperty({
    description: 'Imagem secundária 2 do banner',
    example: 'banner_3.jpg',
  })
  img_3: string;
}
