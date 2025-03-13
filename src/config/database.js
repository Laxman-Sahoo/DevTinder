const mongoose = require("mongoose");

//Good practice to write like this
const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_KEY);
};

module.exports = connectDB;
