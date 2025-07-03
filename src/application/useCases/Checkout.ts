// src/application/useCases/Checkout.ts
import { Payment } from "../../domain/entities/Payment";
import { PaymentProcessor } from "../ports/PaymentProcessor";

export class Checkout {
  constructor(private readonly processor: PaymentProcessor) {}

  async execute(payment: Payment): Promise<void> {
    await this.processor.process(payment['amount'].getValue()); // ou criar método `payment.getAmountValue()`
  }
}
