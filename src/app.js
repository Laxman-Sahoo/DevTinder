const express = require("express");

const app = express();

//Method-1 
app.get("/getUserData", (req, res) => {
    try {
        throw new Error("sdnqjdnoq");
        res.send("User Data Sent");
    }
    catch (err) {
        res.status(500).send("Something Went Wrong");
    }
});

//Method-2(Always write in the end of the code)
app.use("/", (err, req, res, next) => {
    if (err) {
        // console.log(err);
        res.status(500).send("Something Went Wrong");
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});