export interface PaymentProcessor {
  process(amount: number): Promise<void>;
}
