 
    
    
    // req user model from models
  

 const User=require("../models/User");
 const { registerSchemaValidation ,loginSchemaValidation} =require("./validation/authValidation")










 const bcrypt= require("bcrypt")
   
    // bcrypt.hash 
        //  bcrypt.hash(password,10) 
       // used in register step to hash the inter password

     // bcrypt.compare 
        //  bcrypt.compare(password,user.password) 
        // used in log
        //  in step to compare bet the 2 passwords (password, user.password)
        
        
        
        
        
        
       


    const jwt= require("jsonwebtoken")

         // jwt.sign() 
     //    jwt.sign({user_payload which is user_id,user_role}, Secret_Key , {expiresin: "1d"}) 
            //used in Login step to gen token  
            // it works as AuthC

         // jwt.verify()

            //used in after Login step to protect the Route or endpint 
            // it works as AuthZ
 
        










 const register = async (req,res) => {
   
    try {



       // req.body -> username,email,password 
       //response
        

     
            // first validate using joi
        //first validate req.body by joi    and store it in {error,value}

        
        const {error,value} =registerSchemaValidation.validate(req.body,
               { abortEarly:false,
                stripUnknown:true,
        })

        if(error){
            return res.status(400).josn({
                msg:error.msg,
            })
        }


        

     // if (!error)  
     //  excute these 5 Steps to Login

            //1- get data from value
            //2- check user found or not
            //3- hash password
            //4- insert into DB
            //5-return response







            ////////////////////////////////////





  //1- get data from value
        const {username,email,password} =value;

//2- check user found or not

const existUser=await User.findOne({email:email })
  // const existUser=await User.findOne({email })

if (existUser){
    return res.status(400).json({
        msg:"This user already exist"
    })
}
 //3- hash password
 const hashPassword =await bcrypt.hash(password,10)

 //4- insert into DB

        const newUser= await User.create({
            username:username,
            email:email,
            password:hashPassword,

        })


 //5-return response

        return res.status(201).json({
            msg:"Create Acc Done #### "
        })












 


 } catch (error) {
    // This will print the exact issue in your terminal
    console.error(error); 
    
    // This sends the real error back to Postman so you can read it instantly
    res.status(500).json({
          msg: "internal server error  in catch block",
          error: error.message });
}



 } 










 
  
 const login = async (req,res) => {
    try {
        


            // req.body -> username,email,password 
           //response
        
        
            // first validate using joi
        //first validate req.body by joi    and store it in  {error,value}

        
        const {error,value} =loginSchemaValidation.validate(req.body,
               {
                 abortEarly:false,
                stripUnknown:true,
        })

        if(error){
            return res.status(400).josn({
                msg:error.msg,
            })
        }





  // if (!error)  
     //  excute these 5 Steps to Login

            ////////////////////////////////////
 
        // 1-get data from value
        // 2-check user found or not
        // 3-compare password and hashed password
        // 4-generate token
        // 5-return response 
        
        






            ////////////////////////////////////



  //1- get data from value
        const { email,password } =value;  // extracting { email,password } form value


  // 2-check user found or not
        const  user=await User.findOne({email:email});
        if(!user)
            return res.status(400).json({
        msg:"U don not have ann acc , go to Register to create tha acc Firstly"
    })

 // 3-compare password and hashed password
    const matchPassword =await bcrypt.compare(password,user.password)

  if(!matchPassword)
            return res.status(400).json({
        msg:" Invalid Password"
    })






  // 4-generate token

    const token=jwt.sign(
        {id:user._id}

        ,process.env.JWT_SK,
        
        {expiresIn:"1d"} 
    
    )


    
 // 5-return response 
        
 
    return  res.status(200).json({
        msg: "Login Successfuly",
        token:token
   } ) 

 




    } catch (error) {
            return res.status(500).json({
                msg:"server error",
                error:error.msg,
            })



    }
 } 
 
















  
 const logout = async (req,res) => {
    
    console.log("1 test")

    try {
        res.status(200).json({
 msg: "Logout Success",
        })

        
    } catch (error) {
         return res.status(500).json({
                msg:"server error",
                error:error.msg,
            })



    }


 } 
 











  module.exports={ 
    register,
    login,
    logout

}