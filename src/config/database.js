const mongoose = require('mongoose');

//Good practice to write like this 
const connectDB = async()=>{
    await mongoose.connect(
        "mongodb+srv://laxman8210sahoo:Laxman123@namastenode.9m5ud.mongodb.net/devTinder"
    );
}

module.exports = connectDB;
