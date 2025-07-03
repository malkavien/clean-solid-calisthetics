// src/application/ports/PaymentProcessor.ts
export interface PaymentProcessor {
  process(amount: number): Promise<void>;
}
