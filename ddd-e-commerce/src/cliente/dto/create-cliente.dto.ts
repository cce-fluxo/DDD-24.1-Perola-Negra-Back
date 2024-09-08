export class CreateClienteDto {
    nome: string;
    genero: string;
    DT_nascimento: Date;
    cpf: string;
    email: string;
    hash_senha: string;
    id_perfil?: number; // Opcional, já que é uma relação one-to-one
  }
  