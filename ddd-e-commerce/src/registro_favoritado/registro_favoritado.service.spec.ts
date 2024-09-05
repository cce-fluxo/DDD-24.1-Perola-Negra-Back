import { Test, TestingModule } from '@nestjs/testing';
import { RegistroFavoritadoService } from './registro_favoritado.service';

describe('RegistroFavoritadoService', () => {
  let service: RegistroFavoritadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistroFavoritadoService],
    }).compile();

    service = module.get<RegistroFavoritadoService>(RegistroFavoritadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
