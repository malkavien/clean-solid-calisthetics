import { PaymentModel } from '../models/PaymentModel';
import { Amount } from '../../../domain/valueObjects/Amount';
import { Payment } from '../../../domain/entities/Payment';

export class PaymentRepository {
  async save(payment: Payment): Promise<void> {
    await PaymentModel.create({ amount: payment.getAmountValue() });
  }

  async findAll(): Promise<Payment[]> {
    const records = await PaymentModel.findAll();
    return records.map(record => new Payment(new Amount(record.amount)));
  }
}
