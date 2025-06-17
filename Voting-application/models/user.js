const mongoose = require("mongoose");
// const bccrypt=require('bccrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: number,
    required: true,
  },
  email: {
    type: String,
    // required:true
  },
  mobile: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  aadharNumber: {
    type: number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["voter", "admin"],
    default: "voter",
  },
  isVoted: {
    type: Boolean,
    default: false,
  },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
