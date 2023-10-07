import mongoose, { Schema, Model } from "mongoose";

const lawyerschema = new Schema({
  kid: { type: Number, unique: true },
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
  eid: { type: Number, required: true },
  aad: { type: Number, required: true },
  aoe: { type: [String] },
  appchrg: { type: Number },
  case_record: {
    total: { type: Number },
    won: { type: Number },
    Lost: { type: Number },
    rating: { type: Number },
  },
});

const lawyer = mongoose.model("lawyer", lawyerschema);
