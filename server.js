import app from "./src/app.js";
import testConnection from "./src/config/db.config.js";  

const PORT = process.env.PORT || 5000;

app.listen(PORT, async() => {
    console.log(`Server is running on port ${PORT}`);  
    await testConnection();
});   