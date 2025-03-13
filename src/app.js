const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

//MiddleWare for converting the json into js object
app.use(express.json());

app.post('/signup', async (req, res) => {

    // console.log(req.body);

    //creating a new instance of the User model using dynamic data from the postman
    const user = new User(req.body);

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

