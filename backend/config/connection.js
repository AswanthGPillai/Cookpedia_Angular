const mongoose = require("mongoose")

const connectionString = process.env.DB

mongoose.connect(connectionString).then((res)=>{
    console.log("MongoDB connected with Cookpedia Server");
    
}).catch(err=>{
    console.log("Connection Failed");
    console.log(err);
    
    
})