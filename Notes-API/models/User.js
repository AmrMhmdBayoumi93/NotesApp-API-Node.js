

        //  how to create Schema
     
        
          //  User model 




          // 1- call  mongoose  by req
const mongoose = require("mongoose");


  // 2- create schema
        const userSchema = new  mongoose.Schema ({

          username:{
            type:String,        // type with Capital letter here in model  
            required:true,
            trim:true,   
          } , 
           email:{
            
            type:String,
            required:true,
            unique:true,
            lowercase:true,
 
           },
           password:{
            type:String,
            required:true,

           } 
        },
            
            {timestamps:true});
    
        
        //3-create model
        
            const User =mongoose.model("User",userSchema);



          // 4- export module
        module.exports=User;







