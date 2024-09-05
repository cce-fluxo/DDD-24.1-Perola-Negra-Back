import { Test, TestingModule } from '@nestjs/testing';
import { RegistroProdutoCarrinhoController } from './registro_produto_carrinho.controller';
import { RegistroProdutoCarrinhoService } from './registro_produto_carrinho.service';

describe('RegistroProdutoCarrinhoController', () => {
  let controller: RegistroProdutoCarrinhoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistroProdutoCarrinhoController],
      providers: [RegistroProdutoCarrinhoService],
    }).compile();

    controller = module.get<RegistroProdutoCarrinhoController>(RegistroProdutoCarrinhoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
