  // Notes app API  
  // npm init -y 
  // npm i dotenv express mongoose

  
  // dotenv
  require('dotenv').config();

  //express

  const express =require('express')
  const app=express()

  // middlware json 
  app.use(express.json())







  

  //port

  const port =process.env.PORT ||5000;


    // db connnection and req mongoose 
  const mongoose =require('mongoose')

    async function dbConnection( ) {
       try{
         await mongoose.connect (process.env.DB_URL)
        console.log("DB Connected")
       }catch(error){
        console.log(error)

       }
    }

    dbConnection()



      // last req style
  // app.get("routeName",(req,res) => { logic which will be controller } )


  // app.get
  // app.post
  // app.put
  // app.delete





  // video3


  // /api/authRoutes
    const authRoutes=require("./routes/authRoutes")
      app.use("/api",authRoutes)
      
    const noteRoutes=require("./routes/noteRoutes")
       app.use("/api",noteRoutes)
      







































    // run the server


    app.listen(port,()=>{
        console.log(`server is ruuning at port ${port}`)
    })
























 

  
 
  