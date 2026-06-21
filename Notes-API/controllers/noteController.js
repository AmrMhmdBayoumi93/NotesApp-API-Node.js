
    const Note =require("../models/Note")
    const User =require("../models/User")


    const {noteSchemaValidation}=require("./validation/noteValidation");






        // post note , edit note , read note ,del note as a CRUD Operations 

        
        // post note
    const postNoteController=async (req,res)=> {
 
        try {
   
          //  console.log("POST note Controller test ");


                    //  1 joi make get data from frontend & validation

console.log("0")
            const {error,value}=noteSchemaValidation.validate(req.body,
                {
                 abortEarly: false,
                stripUnknown: true,
            })
console.log("1")
         if (error) {
            //bad req
      return res.status(400).json({
        msg: error.details.map((err) => err.message),
      });

    } 
    
 console.log("2")
        

        //  2 get note content from value
        const content= value.content;
       //3 get id from token
         const userId=  req.user ;




        // 4 create a new note to insert into DB
        const newNoter=await Note.create({
            content:content,
            user:userId,

        })
console.log("3")




            // 5 send res
            res.status(201).json({msg:" Done Created New Note   "})





        } catch (error) {
            console.log(error)
            res.status(500).json({msg:"server error - handel from catch"})
       




        }



    }
























    module.exports={
    
        postNoteController
    
    };