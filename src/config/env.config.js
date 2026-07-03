import dotenv from "dotenv";
dotenv.config();

const env = {
  db: {
    host: process.env.MYSQLHOST || "localhost",
    port: Number(process.env.MYSQLPORT) || 3306,
    database: process.env.MYSQLDATABASE || "crm_lms",
    user: process.env.MYSQLUSER || "root",
    password: process.env.MYSQLPASSWORD || "",
    poolMax: Number(process.env.DB_POOL_MAX) || 50,
  },

  app: {
    port: Number(process.env.PORT) || 5000,
    env: process.env.NODE_ENV || "development",
  },
};



console.log({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  db: process.env.MYSQLDATABASE,
});
export default env;