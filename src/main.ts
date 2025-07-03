// src/main.ts
import { Amount } from "./domain/valueObjects/Amount";
import { Payment } from "./domain/entities/Payment";
import { CreditCardProcessor } from "./infrastructure/payment/CreditCardProcessor";
import { Checkout } from "./application/useCases/Checkout";

const amount = new Amount(1200);
const payment = new Payment(amount);

const processor = new CreditCardProcessor();
const checkout = new Checkout(processor);

checkout.execute(payment);
