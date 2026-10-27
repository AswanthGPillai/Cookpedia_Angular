const recipes = require("../models/recipeModel")

// get all recipes

exports.getAllRecipesController = async(req,res)=>{
    console.log("inside getAllRecipesController");
    try{
        const allRecipes = await recipes.find()
        res.status(200).json(allRecipes)
    }catch(err){
        res.status(500).json(err)
    }
}


// get A recipe - authorized user only

exports.getARecipeController = async(req,res)=>{
    console.log("inside getARecipeController");
    const {id} =req.params
    try{
        const recipeDetails = await recipes.findById({_id:id})
        res.status(200).json(recipeDetails)
    }catch(err){
        res.status(500).json(err)
    }
    
}



// get Related recipes - authorized

exports.getRelatedRecipesController = async (req,res)=>{
    console.log("Inside getRelatedRecipesController");
    const cuisine = req.query.cuisine
    try {
        const allrelatedRecipes = await recipes.find({cuisine})
        res.status(200).json(allrelatedRecipes)
    } catch (error) {
        res.status(500).json(error)
    }
    
}