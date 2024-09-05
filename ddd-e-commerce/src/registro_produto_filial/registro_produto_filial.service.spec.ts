import { Test, TestingModule } from '@nestjs/testing';
import { RegistroProdutoFilialService } from './registro_produto_filial.service';

describe('RegistroProdutoFilialService', () => {
  let service: RegistroProdutoFilialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistroProdutoFilialService],
    }).compile();

    service = module.get<RegistroProdutoFilialService>(RegistroProdutoFilialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
