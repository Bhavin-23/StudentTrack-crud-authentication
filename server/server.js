const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:5173", // frontend port (React Vite ka default)
  credentials: true
}));
app.use(express.json())
app.use(cookieParser());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/students", require("./routes/studentRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
    connectDB().then();
    
});
