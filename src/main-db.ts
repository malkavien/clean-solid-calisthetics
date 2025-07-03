import { sequelize } from './infrastructure/database/config/database';
import { PaymentModel } from './infrastructure/database/models/PaymentModel';
import { Payment } from './domain/entities/Payment';
import { Amount } from './domain/valueObjects/Amount';
import { PaymentRepository } from './infrastructure/database/repositories/PaymentRepository';

async function main() {
  await sequelize.authenticate();
  await PaymentModel.sync({ force: true });

  const repo = new PaymentRepository();

  const payment = new Payment(new Amount(1200));
  await repo.save(payment);

  const payments = await repo.findAll();
  console.log("Pagamentos encontrados:", payments.map(p => p.getAmountValue()));
}

main();
