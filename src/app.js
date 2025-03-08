const express = require("express");

const app=express();

//Request Handler function
//Routing 
app.use("/hello",(req,res)=>{
    res.send("Hello");
})

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});