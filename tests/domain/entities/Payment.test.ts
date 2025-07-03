import { Amount } from "../../../src/domain/valueObjects/Amount";
import { Payment } from "../../../src/domain/entities/Payment";

describe("Payment", () => {
  it("deve identificar pagamento de alto valor", () => {
    const payment = new Payment(new Amount(2000));
    expect(payment.isHighValue()).toBe(true);
  });

  it("deve retornar o valor do pagamento", () => {
    const payment = new Payment(new Amount(800));
    expect(payment.getAmountValue()).toBe(800);
  });
});
