import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

export class PaymentModel extends Model {
  declare id: number;
  declare amount: number;
}

PaymentModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Payment',
    tableName: 'payments',
    timestamps: false,
  }
);
