import { Test, TestingModule } from '@nestjs/testing';
import { RegistroProdutoDescontoController } from './registro_produto_desconto.controller';
import { RegistroProdutoDescontoService } from './registro_produto_desconto.service';

describe('RegistroProdutoDescontoController', () => {
  let controller: RegistroProdutoDescontoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistroProdutoDescontoController],
      providers: [RegistroProdutoDescontoService],
    }).compile();

    controller = module.get<RegistroProdutoDescontoController>(RegistroProdutoDescontoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
