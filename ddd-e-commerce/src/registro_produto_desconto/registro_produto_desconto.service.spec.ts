import { Test, TestingModule } from '@nestjs/testing';
import { RegistroProdutoDescontoService } from './registro_produto_desconto.service';

describe('RegistroProdutoDescontoService', () => {
  let service: RegistroProdutoDescontoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistroProdutoDescontoService],
    }).compile();

    service = module.get<RegistroProdutoDescontoService>(RegistroProdutoDescontoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
