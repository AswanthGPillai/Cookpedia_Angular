const testimonials = require("../models/testimonyModel")

// add testimony

exports.addTestimonyController = async(req,res)=>{
    console.log("Inside AddTestimonyController");
    const {name,email,message} = req.body

    try{
        const newTestimony = new testimonials({
            name,email,message
        })
        await newTestimony.save()

         res.status(201).json("inserted");
        
    }catch(err){
        res.status(500).json(err)
        console.log(err);
        
    }
    
}