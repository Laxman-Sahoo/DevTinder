const express = require("express");

const app = express();

const {adminAuth,userAuth} = require("./middlewares/auth")

/*
app.use(
    "/user",
    (req, res, next) => {
        // res.send("Response 1");
        next();
    }
);
app.use(
    "/user",
    (req, res, next) => {
        res.send("Response 2");
    }
);

*/

//MiddleWare - Instead of code for authorizing in each API call write in the middleware
app.use("/admin",adminAuth);
//NO need to authorize here now
app.get("/admin/getAllData", (req,res,next) => {
    res.send("All Data Sent");
})
app.get("/admin/deleteUser", (req,res,next) => {
    res.send("deleted");
})

//UserAuth
app.get("/user",userAuth,(req,res)=>{
    res.send("User Data Sent");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});