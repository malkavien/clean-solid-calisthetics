import { Amount } from "../../../src/domain/valueObjects/Amount";

describe("Amount", () => {
  it("deve criar valor válido", () => {
    const amount = new Amount(100);
    expect(amount.getValue()).toBe(100);
  });

  it("deve lançar erro se valor for zero ou negativo", () => {
    expect(() => new Amount(0)).toThrow("Valor inválido");
    expect(() => new Amount(-5)).toThrow("Valor inválido");
  });

  it("deve identificar valor alto", () => {
    const amount = new Amount(2000);
    expect(amount.isGreaterThan(1000)).toBe(true);
  });
});
