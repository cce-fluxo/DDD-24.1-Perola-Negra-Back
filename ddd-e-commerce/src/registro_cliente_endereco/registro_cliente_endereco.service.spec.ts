import { Test, TestingModule } from '@nestjs/testing';
import { RegistroClienteEnderecoService } from './registro_cliente_endereco.service';

describe('RegistroClienteEnderecoService', () => {
  let service: RegistroClienteEnderecoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistroClienteEnderecoService],
    }).compile();

    service = module.get<RegistroClienteEnderecoService>(RegistroClienteEnderecoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
