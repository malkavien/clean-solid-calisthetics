import { PaymentProcessor } from "../../application/ports/PaymentProcessor";

export class CreditCardProcessor implements PaymentProcessor {
  async process(amount: number): Promise<void> {
    console.log(`🔐 Pagamento de R$${amount} via Cartão de Crédito`);
  }
}
