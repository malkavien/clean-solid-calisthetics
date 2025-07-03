export class Amount {
  constructor(private readonly value: number) {
    if (value <= 0) throw new Error('Valor inválido');
  }

  getValue(): number {
    return this.value;
  }

  isGreaterThan(limit: number): boolean {
    return this.value > limit;
  }
}
