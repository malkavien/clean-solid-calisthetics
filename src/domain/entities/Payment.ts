// src/domain/entities/Payment.ts
import { Amount } from "../valueObjects/Amount";

export class Payment {
  constructor(private readonly amount: Amount) {}

  isHighValue(): boolean {
    return this.amount.isGreaterThan(1000);
  }
}
