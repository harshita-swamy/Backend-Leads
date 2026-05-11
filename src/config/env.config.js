import dotenv from "dotenv";
dotenv.config();

const env = {
  db: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 3306,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    poolMax: parseInt(process.env.DB_POOL_MAX) || 50,
  },

  app: {
    port: parseInt(process.env.PORT) || 5000,
    env: process.env.NODE_ENV || "development",
  },
};

export default env;