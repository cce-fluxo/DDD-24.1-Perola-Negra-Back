import { ApiProperty } from "@nestjs/swagger";

export class CreatePagamentoDto {

    /**
     * Verifica se o pagamento foi feito com cartao
     * @example true
     */
    cartao: boolean;    

    
    /**
     * Verifica se o pagamento foi feito com pix
     * @example false
     */
    pix: boolean;       

     /**
     * Verifica se o pagamento foi feito com boleto
     * @example false
     */
    boleto: boolean;  
}