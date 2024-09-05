import { Test, TestingModule } from '@nestjs/testing';
import { RegistroPedidoProdutoService } from './registro_pedido_produto.service';

describe('RegistroPedidoProdutoService', () => {
  let service: RegistroPedidoProdutoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistroPedidoProdutoService],
    }).compile();

    service = module.get<RegistroPedidoProdutoService>(RegistroPedidoProdutoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
