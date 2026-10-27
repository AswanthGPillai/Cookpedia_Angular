const saveRecipes = require("../models/saveRecipeModel")

exports.addToSaveRecipeController = async(req,res)=>{
    console.log("inside addToSaveRecipeController");
    const {id} = req.params
    const userId = req.userId
    const {name,image} = req.body
    console.log(id,userId,name,image);
    try{
        
    }catch(err){
        res.status(500).json(err)
    }
    
    
}