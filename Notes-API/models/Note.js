

        //  how to create Schema
     
        
          //  Note model 
 

          // 1- call mongoose  by req

const mongoose = require("mongoose");


  // 2- create schema
        const noteSchema = new mongoose.Schema ({

            content:{
                type:String,
                required:true,

            },
            isCompleted:{
                type:Boolean,

                default:false

            }, user:{
                type:mongoose.Schema.ObjectId,
                ref:"User",
                required:true,

                
            }

        
           
        },
            
            {timestamps:true});
    
        
        //3-create model
        
            const Note =mongoose.model(Note,noteSchema);



          // 4- export module
        module.exports=Note;


 