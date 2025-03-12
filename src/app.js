const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post('/signup', async (req, res) => {
    //creating a new instance of the User model 
    const user = new User({
        firstName: "Laxman",
        lastname: "Sahoo",
        emailId: "L@123",
        password: "L@123"
    });

    try{
        await user.save();
        res.send("User added successfully");
    }catch(err){
        res.status(400).send("Error saving the user");
    }
    
});


//first database connection then server connection 
connectDB().then(() => {
    console.log("Database connection established");
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
}).catch(err => {
    console.log("Database Cannot be Connected");
})

