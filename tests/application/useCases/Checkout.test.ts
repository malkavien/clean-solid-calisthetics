import { Amount } from "../../../src/domain/valueObjects/Amount";
import { Payment } from "../../../src/domain/entities/Payment";
import { Checkout } from "../../../src/application/useCases/Checkout";

class FakeProcessor {
  public processedAmount: number | null = null;

  async process(amount: number): Promise<void> {
    this.processedAmount = amount;
  }
}

describe("Checkout Use Case", () => {
  it("deve processar o pagamento corretamente", async () => {
    const processor = new FakeProcessor();
    const checkout = new Checkout(processor);
    const payment = new Payment(new Amount(500));

    await checkout.execute(payment);

    expect(processor.processedAmount).toBe(500);
  });
});
