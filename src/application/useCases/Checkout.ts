import { Payment } from "../../domain/entities/Payment";
import { PaymentProcessor } from "../ports/PaymentProcessor";

export class Checkout {
  constructor(private readonly processor: PaymentProcessor) {}

  async execute(payment: Payment): Promise<void> {
    await this.processor.process(payment.getAmountValue());
  }
}
