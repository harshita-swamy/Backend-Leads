import app from "./src/app.js";
import { PORT } from "./src/config/env.config.js";
import testConnection from "./src/config/db.config.js";  


app.listen(PORT, async() => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    await testConnection();              
});                   

  