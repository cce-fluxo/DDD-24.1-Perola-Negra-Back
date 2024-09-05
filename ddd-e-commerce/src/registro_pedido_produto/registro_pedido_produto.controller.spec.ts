import { Test, TestingModule } from '@nestjs/testing';
import { RegistroPedidoProdutoController } from './registro_pedido_produto.controller';
import { RegistroPedidoProdutoService } from './registro_pedido_produto.service';

describe('RegistroPedidoProdutoController', () => {
  let controller: RegistroPedidoProdutoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistroPedidoProdutoController],
      providers: [RegistroPedidoProdutoService],
    }).compile();

    controller = module.get<RegistroPedidoProdutoController>(RegistroPedidoProdutoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
