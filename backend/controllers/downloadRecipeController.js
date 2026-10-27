const downloadRecipes = require('../models/downloadModel')

exports.addToDownloadRecipeController = async(req,res)=>{
    console.log("Inside addToDownloadRecipeController");
    const{id} = req.params
    const userId = req.userId
    const {name, image, cuisine} = req.body
    console.log(id,userId,name,image,cuisine);
    
    try{
        // check if the recipe already exists in the download collection for the user
        const existingRecipe = await downloadRecipes.findOne({recipeId:id,userId})
        if(existingRecipe){
            existingRecipe.count += 1
            await existingRecipe.save()
            res.status(200).json(existingRecipe)
        }else{
            const newRecipe = new downloadRecipes({
                recipeId:id,
                recipeName:name,
                recipeImage: image,
                recipeCuisine:cuisine,
                count:1,
                userId:userId,
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    }catch(err){
        res.status(500).json(err)
    }
}