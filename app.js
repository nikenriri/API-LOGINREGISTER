import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import database from "./config/db.js";
import router from "./routes/routes.js";
dotenv.config();
const app = express();

try{
    await database.authenticate();
    console.log("Database connected...");
}catch(error){
    console.error(error);
}

app.use(cors({ credentials: true, origin:'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("Server connected!"));