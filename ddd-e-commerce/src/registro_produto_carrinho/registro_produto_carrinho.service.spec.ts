import { Test, TestingModule } from '@nestjs/testing';
import { RegistroProdutoCarrinhoService } from './registro_produto_carrinho.service';

describe('RegistroProdutoCarrinhoService', () => {
  let service: RegistroProdutoCarrinhoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistroProdutoCarrinhoService],
    }).compile();

    service = module.get<RegistroProdutoCarrinhoService>(RegistroProdutoCarrinhoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
