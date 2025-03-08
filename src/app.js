const express = require("express");

const app=express();

app.get("/user",(req,res)=>{
    res.send({"firstName":"Laxman","LastName":"Sahoo"});
})

//Rejex 
app.get(/a/,(req,res)=>{
    res.send({"firstName":"Laxman","LastName":"Sahoo"});
})

//Dynamic Routes 
app.get("/user",(req,res)=>{
    //use to get the dynamic user id from the routes
    console.log(req.query);
    res.send({"firstName":"Laxman","LastName":"Sahoo"});
})

app.get("/user/:userid",(req,res)=>{
    console.log(req.params);
    res.send({"firstName":"Laxman","LastName":"Sahoo"});
})

app.post("/user",(req,res)=>{
    res.send("Data Saved Successfully");
})

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});