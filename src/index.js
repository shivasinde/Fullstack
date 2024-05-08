import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({path:"./env"})
connectDB()
.then(()=>{
  app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
  })
})
.catch((error)=>{
  console.log("mongodb connection failed " , error);
})










/*
import express from "express";
const app = express();

(async()=>{
  try {
    const connectDB = await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`)
    app.on("error",(err)=>{
      console.log("not connect with database" , err);
      throw err;
    })
    app.listen(process.env.PORT,()=>{
      console.log(`listening on port ${process.env.PORT}`);
    })
  } catch (error) {
    console.log("Error",error);
    throw error;
  }
})()


*/
