const express = require("express")
const recipeController = require("../controllers/recipeController")
const testimonyController = require("../controllers/testimonyController")
const userController = require("../controllers/userController")
const jwtMiddleware = require("../middlewares/jwtMiddleware")
const downloadRecipeController = require("../controllers/downloadRecipeController")

const router = new express.Router()

// all-recipes
router.get("/all-recipes",recipeController.getAllRecipesController)

// add-testimony
router.post("/add-testimony",testimonyController.addTestimonyController)

// add-user
router.post("/register",userController.addUserController)

// login
router.post("/login",userController.loginController)

// get-single Recipe
router.get("/recipe/:id/view",jwtMiddleware,recipeController.getARecipeController)

// get Related Recipe
router.get("/related-recipes",jwtMiddleware,recipeController.getRelatedRecipesController)

// download Recipe
router.post("/recipe/:id/download",jwtMiddleware,downloadRecipeController.addToDownloadRecipeController)
module.exports = router