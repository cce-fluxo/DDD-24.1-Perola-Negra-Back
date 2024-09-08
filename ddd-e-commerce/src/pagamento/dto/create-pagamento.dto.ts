export class CreatePagamentoDto {
    cartao: boolean;  // Indica se o pagamento foi feito com cartão
    pix: boolean;     // Indica se o pagamento foi feito via PIX
    boleto: boolean;  // Indica se o pagamento foi feito via boleto
  }
  