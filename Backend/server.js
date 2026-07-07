import app from "./src/app.js";
import testConnection from "./src/config/db.config.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Test DB connection first
    await testConnection();
    console.log("✅ Database Connected Successfully");

    // Start server only if DB is OK
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });

  } catch (err) {
    console.error("❌ DB Connection Failed:", err.message);
    process.exit(1);
  }
};

startServer();