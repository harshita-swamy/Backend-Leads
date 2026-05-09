// src/config/env.js
import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT     

const env = {     
db: {
  host    : process.env.DB_HOST,
  port    : process.env.DB_PORT, 
  database: process.env.DB_DATABASE,
  user    : process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  poolMax : parseInt(process.env.DB_POOL_MAX) || 50,

  },
  app: {
    port : parseInt(process.env.PORT) ,
    env  : process.env.NODE_ENV || "development",
  }
};

export default env;

