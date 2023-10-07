import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
const app = express();
app.use(morgan("tiny"));

app.listen(8080);
