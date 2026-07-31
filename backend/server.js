import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import expenseRouter from "./routes/expenseRoute.js";
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongo db connected");
}
catch(er){
    console.log("failed to connect mongo db");
    console.log(er.message);
}

app.use("/expenses", expenseRouter);

app.listen(process.env.PORT, ()=>{
    console.log("server is running");
});