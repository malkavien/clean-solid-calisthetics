import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('postgres://user:password@localhost:5432/clean_db', {
  dialect: 'postgres',
  logging: false,
});
