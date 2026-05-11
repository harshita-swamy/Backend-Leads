import dotenv from "dotenv";
dotenv.config();

const env = {
  db: {
    host: process.env.MYSQLHOST,
    port: parseInt(process.env.MYSQLPORT) || 3306,
    database: process.env.MYSQLDATABASE,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    poolMax: parseInt(process.env.DB_POOL_MAX) || 50,
  },

  app: {
    port: parseInt(process.env.PORT) || 5000,
    env: process.env.NODE_ENV || "development",
  },
};

export default env;