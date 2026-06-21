

const Joi =require("joi")

const noteSchemaValidation=Joi.object({
        content:Joi.string().min(6).required(),

})
 
 
module.exports={noteSchemaValidation}
 