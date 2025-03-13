const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
require('dotenv').config();

app.use(express.json());

app.post("/signup", async (req, res) => {
  //creating a new instance of the User model using dynamic data
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error saving the user");
  }
});

//feed API - Get/feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users); 
  } catch (err) {
    res.status(400).send("Something went Wrong");
  }
});

//first database connection then server connection
connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Database Cannot be Connected");
  });
