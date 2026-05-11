import mysql2 from "mysql2/promise";
import env from "./env.config.js";

export const pool = mysql2.createPool({
  host: env.db.host,
  port: env.db.port,
  database: env.db.database,
  user: env.db.user,
  password: env.db.password || "",

  waitForConnections: true,
  connectionLimit: env.db.poolMax || 10,
  queueLimit: 0,

  enableKeepAlive: true,
  keepAliveInitialDelay: 0,

  timezone: "Z", // UTC
  decimalNumbers: true,
  charset: "utf8mb4",
});

// Startup connection test
const testConnection = async () => {
  try {
    const conn = await pool.getConnection();
    console.log("✅ MySQL connected successfully");
    conn.release();
  } catch (err) {
    console.error("❌ MySQL connection failed:", err.message);
    process.exit(1);
  }
};

export default testConnection;