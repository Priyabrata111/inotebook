const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    default: () => new Date().toISOString(),
  },
});

module.exports = mongoose.model("user", UserSchema);
