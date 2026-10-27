const users = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// add user
exports.addUserController = async(req,res)=>{
    console.log("Inside addUserController");
    
    const {username,email,password} = req.body
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("User Already Exist....")
        }else{
            const encryptedPassword = await bcrypt.hash(password,10)
            // hash() is used to encrypt the password, 1st argument must be data and 2nd must be how many times it should be hashed or encrypted (don't do 100 times system crash)
            const newUser = new users({
                username,email,password:encryptedPassword
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch(err){
        res.status(500).json(err)
        console.log(err);
        
    }
}




// login
exports.loginController = async(req,res)=>{
    console.log("Inside loginController");
    
    const {email,password} = req.body
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            let isMatch = await bcrypt.compare(password, existingUser.password)
            // compare() is used to compare the data and hashed password, checks is they are equal
            // isMatch return True or False
            if( isMatch || password == existingUser.password){
                const token = jwt.sign({userId:existingUser._id},process.env.JWTPASSWORD)
                res.status(200).json({existingUser,token})
            }
        }else{
            res.status(406).json("Password is Incorrect")
           
        }
    }catch(err){
        res.status(500).json(err)
        console.log(err);
        
    }
} 