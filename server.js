import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import "dotenv/config";
// import UserModel from "./models/Usermodle.js";
//create react app.
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())
const port = process.env.PORT || 4000;
// connect DB
 const MongoURI = process.env.MONGO_URI;
 try {
   mongoose.connect(`${MongoURI}`);
  console.log("DB connected successfully !!");
} catch (error) {
  console.log(error);
}

// ----------------compulsory steps ---------------//
// creating the schema ( creat schema then his model )

const  userSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String

},{timestamps:true})
const User =  mongoose.model('User', userSchema);



//Routes
app.post('/api/login',(req,res)=>{
  res.send("myapi")
})
app.post("/api/register", (req, res) => {
  // res.send(req.body)
  const user = req.body;
  console.log(user.json())
  // registerUser(user, (savedUser, err) => {
  //   if(err) {
  //     console.log("ekhas;fkjhsd;fkdshf;jksh")
  //   res.status(500).send("Error in saving User: ", err.message);
  //   } else {
  //     console.log("lkj")
  //   res.status(200).send("Saved User: ", savedUser);
  //   }
  // }) 
});

const registerUser = async(user, callback) => {
  try{
    // console.log("User is:", user)
    const saveUser = new User({
      name: user.name,
      email: user.email,
      password: user.password,
    });
    
    const savedUser = await saveUser.save()
    console.log("User is:", user);
    callback(null, savedUser)
  } catch(err) {
    callback(err.message, null)
  }
}

//server cration or listing 
app.listen(port, () => {
  console.log(`server is running on PORT:${port} succesfully`);
});
 

































// require('dotenv').config()
// const cors = require("cors");
// const express = require("express");
// const app = express()
// const errorHandler = require("./middleware/errorHandler.js")
// const UserModel = require("./models/Usermodle.js");
// // const DB_NAME = "contact-mangment";
// const { default: mongoose } = require('mongoose');
// // const { errorHandler } = require('./middleware/errorHandler.js');
// const secreatkey ='dkjadoiojkdjlajdlkj';
// const port = process.env.PORT || 4000;

// // const connection = require("./Db/db.js");
// // connection;
// app.use(express.json());//use inbuilt middleware to parese the stream of data body parser .
// //here define routes 
// //usually this use is called middleware
// app.use(cors());



//  const MongoURI = process.env.MONGO_URI;
//  try {
//   mongoose.connect(`${MongoURI}`);
//   console.log("DB connected successfully !!");
// } catch (error) {
//   console.log(error);
// }

// app.post('/register',(req,res)=>{
//     UserModel.create(req.body)
//     .then((employees) => res.json(employees))
//     .catch((err) => res.json(err));
// })
// app.post('/login',(req,res)=>{
//   const user = await user.findOne()
   
// })
// app.listen(port,()=>{console.log(`server is running on ${port} succefully`)})

// // app.post('/login',(req,res)=>{
// //     const user = {
// //         id:1,
// //         username:'vishal',
// //         amail:'avc@gmail.com'
// //     }
// //     jwt.sign({user}, secreatkey,{expireIn:300},(err,token)=>{
// //         res.json({
// //           token
// //         })
// //     })
// // })
// // app.post('.profile',verifyToken,(req,res)=>{
// //     jwt.verify(req.token,secreatkey,(err,authdata)=>{
// //         if(err){
// //             res.send("result:Invalid token")
// //         }else{
// //             res.json({
// //                 message:"profileaccess";
// //                 authdata
// //             })
// //         }
// //     })
// // })
// // function verifyToken(req,res,next){
// //     const bearerHeader= req,header['authorization']
// //     if(typeof bearerHeader !== 'undefined'){
// //         const bearer = bearerHeader.split("");
// //         next();
// //     }
// //     else {
// //         res.send({
// //             result:'token is not valid ';
// //         })
// //     }
// // }
// // app.use("/api/contacts",require("./routes/contactRoutes.js"))
// // app.use(errorHandler)