import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "tasks", //dbName
  "postgres", //userDB
  "Gej9eqb8*!", //passwordDb
  {
    host: "localhost",
    port: 2801,
    dialect: "postgres",
  }
);
