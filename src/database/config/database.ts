import { Sequelize } from "sequelize";

export const database = new Sequelize({
  dialect: "postgres",
  database: "express-api",
  username: "admin",
  password: "root123",
  host: "localhost",
  port: 5432,
});
