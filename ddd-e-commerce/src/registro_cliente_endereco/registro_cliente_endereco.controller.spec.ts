import { Test, TestingModule } from '@nestjs/testing';
import { RegistroClienteEnderecoController } from './registro_cliente_endereco.controller';
import { RegistroClienteEnderecoService } from './registro_cliente_endereco.service';

describe('RegistroClienteEnderecoController', () => {
  let controller: RegistroClienteEnderecoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistroClienteEnderecoController],
      providers: [RegistroClienteEnderecoService],
    }).compile();

    controller = module.get<RegistroClienteEnderecoController>(RegistroClienteEnderecoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
