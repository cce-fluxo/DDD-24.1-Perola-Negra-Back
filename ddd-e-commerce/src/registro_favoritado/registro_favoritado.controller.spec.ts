import { Test, TestingModule } from '@nestjs/testing';
import { RegistroFavoritadoController } from './registro_favoritado.controller';
import { RegistroFavoritadoService } from './registro_favoritado.service';

describe('RegistroFavoritadoController', () => {
  let controller: RegistroFavoritadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistroFavoritadoController],
      providers: [RegistroFavoritadoService],
    }).compile();

    controller = module.get<RegistroFavoritadoController>(RegistroFavoritadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
