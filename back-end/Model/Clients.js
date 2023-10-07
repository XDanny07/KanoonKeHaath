import mongoose, { Schema, Model } from "mongoose";

const clientschema = new Schema({
  kid: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  dob: { type: Date },
  contact: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  address: {
    addline1: { type: String, required: true },
    addline2: String,
    state: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: String, required: true },
  },
  aad: { type: Number, required: true },
});

const client = mongoose.model("client", clientschema);
