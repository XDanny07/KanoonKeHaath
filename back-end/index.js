import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { clientrouter } from "./Routes/Clients.js";

const app = express();

//MiddleWares
app.use(morgan("tiny"));

dotenv.config();
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected");
}
app.use("/", clientrouter);
app.listen(8080);
