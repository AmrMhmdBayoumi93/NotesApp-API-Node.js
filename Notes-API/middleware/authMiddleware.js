
const jwt = require("jsonwebtoken");


const authMiddleware =async (req,res,next)=>{
    
    //steps to follow

  // get Token From req.headers
  //check for token is in auth or not
   // Get Token Value ->as a String Token
   // Token Value Verify ->  and ret payload
     // next
    
     try {


 // get Token From req.headers
 const authHeaders= req.headers.authorization;

//check for token is in auth or not the authHeaders is empty ??
        if (!authHeaders){
            return res.status(401).json({ msg: "Token Required"})
        }
 
   // console.log(authHeaders)
     //Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDY2YTBhMjIxMjA1ODQ1ZDhiNGJhYiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc3NTY1OTUzMCwiZXhwIjoxNzc1NzQ1OTMwfQ.ueIkctFY3k-QP4cWH96ej7GvJz9_L6Bo-h4FM1SOi68

        // Get Token Value ->as a String Token

        const token=authHeaders.split(" ")[1];
        //  console.log(token)
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDY2YTBhMjIxMjA1ODQ1ZDhiNGJhYiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc3NTY1OTUzMCwiZXhwIjoxNzc1NzQ1OTMwfQ.ueIkctFY3k-QP4cWH96ej7GvJz9_L6Bo
 


 // Token Value Verify ->  and ret payload
        const payload=jwt.verify(token,process.env.JWT_SK)
 
            req.user=payload.id;
 
       // next
       next()

 } catch (error) {
 console.log(error)
return res.status(401).json({ 
    msg: "Token Invalid not sent until now - handle catch error in atuhMiddelwre"});
//401 not authz

    
 }

    
}

module.exports=authMiddleware