import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

//PORT

app.use("/api/auth", authRoutes);
app.use("/api", employeeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log("MongoDBConnected");
    console.log(`Server is running on ${PORT}`);
  } catch (error) {}
});
