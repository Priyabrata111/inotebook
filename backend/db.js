const mongoose = require("mongoose");
const mongoURL = "mongodb://localhost:27017/?directConnection=true";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURL, {});
    console.log("✅ Connected to MongoDB successfully");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
  }
};
module.exports = connectToMongo;
