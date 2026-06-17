
// req "express" 
    // to use express.Router()
    const express = require("express");
      const router = express.Router(); 

// req auth controller
    const {register,login,logout}= require ("../controllers/authController")


    // reg route
        router.post("/register",register)
  // login route
          router.post("/login",login)
      
    // logout route
          router.get("/logout",logout)  // FE will handle the logout


            // exports router module
      module.exports =router