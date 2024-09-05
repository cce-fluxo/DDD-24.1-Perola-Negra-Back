import { Test, TestingModule } from '@nestjs/testing';
import { RegistroProdutoFilialController } from './registro_produto_filial.controller';
import { RegistroProdutoFilialService } from './registro_produto_filial.service';

describe('RegistroProdutoFilialController', () => {
  let controller: RegistroProdutoFilialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistroProdutoFilialController],
      providers: [RegistroProdutoFilialService],
    }).compile();

    controller = module.get<RegistroProdutoFilialController>(RegistroProdutoFilialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
