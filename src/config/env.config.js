// src/config/env.js
import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT

const env = {
  db: {
    host    : process.env.HOST  ,   
    Database    : process.env.DATABASE ,  
    user    : process.env.USER   ,  
    password: process.env.PASSWORD ,
    poolMax : parseInt(process.env.DB_POOL_MAX) || 50,
  },
  app: {
    port : parseInt(process.env.PORT) ,
    env  : process.env.NODE_ENV || "development",
  }
};

export default env;

