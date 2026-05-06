import app from "./src/app.js";
import { PORT } from "./src/config/env.config.js";
import testConnection from "./src/config/db.config.js";

const port = PORT || 10000;

// DB connect safely (crash na ho server)
const startServer = async () => {
  try {
    await testConnection();
    console.log("Database connected successfully ✅");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

  } catch (error) {
    console.error("Database connection failed ❌", error.message);

    // still server run kare (optional but recommended for debugging)
    app.listen(port, () => {
      console.log(`Server running (without DB) on port ${port}`);
    });
  }
};

startServer();