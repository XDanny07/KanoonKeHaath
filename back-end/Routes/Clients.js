import express from "express";
export const clientrouter = express.Router();
import * as clientmethod from "../Controller/Clients.js";
clientrouter.post("/clientsend", clientmethod.register_user);
