
const Joi =require("joi")
 
     

        // get data from fe and vaildate it using joi

    const registerSchemaValidation=Joi.object({
         
        // type with small letter here in  joi validation

        username:Joi.string().min(3).max(20).required(),
        email:Joi.string().email().required() ,
        password:Joi.string().min(6).required()
    });



    const loginSchemaValidation=Joi.object({
       
        email:Joi.string().email().required() ,
        password:Joi.string().min(6).required()
    });





     









    module.exports ={registerSchemaValidation,loginSchemaValidation }