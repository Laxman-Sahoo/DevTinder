const express = require("express");

const app = express();

app.use(
    "/user",
    (req, res, next) => {
        // res.send("Response 1");
        next();
    },
    (req, res, next) => {
        res.send("Response 2");
    }
);

//Array of functions 
// app.use("/route" , [rh1,rh2,rh3],rh4,rh5);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});