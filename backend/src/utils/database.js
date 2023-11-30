import Sequelize from "sequelize";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: "ep-polished-pine-11135275-pooler.us-east-1.postgres.vercel-storage.com",
  port: 5432, // Puerto por defecto de PostgreSQL
  username: "default",
  password: "lbLB1VM9xmDs",
  database: "verceldb",
  ssl: true, // Render generalmente requiere SSL para conexiones a bases de datos
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Si estás teniendo problemas con certificados SSL, esto puede ser necesario
    },
  },
});
