import app from "./src/app.js";
import testConnection from "./src/config/db.config.js";  

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await testConnection();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  } catch (err) {
    console.error("DB Connection Failed:", err);
    process.exit(1);
  }
};

startServer();