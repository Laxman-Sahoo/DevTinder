const express = require("express");

const app=express();

//Request Handler function
//Routing 
// -Sequence matters
// -string matching 

// app.use("/",(req,res)=>{
//     res.send("Hello");
// })

// app.use("/user",(req,res)=>{
//     res.send("Hello user");
// })

app.get("/user",(req,res)=>{
    res.send({"firstName":"Laxman","LastName":"Sahoo"});
})

app.post("/user",(req,res)=>{
    res.send("Data Saved Successfully");
})

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});