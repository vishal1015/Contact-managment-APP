require('dotenv').config()
const cors = require("cors");
const express = require("express");
const app = express()
const errorHandler = require("./middleware/errorHandler.js")
const UserModel = require("./models/Usermodle.js");
const DB_NAME = "contact-mangment";
const { default: mongoose } = require('mongoose');
// const { errorHandler } = require('./middleware/errorHandler.js');
const secreatkey ='dkjadoiojkdjlajdlkj';
const port = process.env.PORT || 4000;
app.use(express.json());//use inbuilt middleware to parese the stream of data body parser .
//here define routes 
//usually this use is called middleware
app.use(cors());


 const MongoURI = process.env.MONGO_URI;
 try {
  mongoose.connect(`${MongoURI}/${DB_NAME}`);
  console.log("DB connected successfully !!");
} catch (error) {
  console.log(error);
}
app.post('/register',(req,res)=>{
    UserModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err=>res.json(err))
})

app.listen(port,()=>{console.log(`server is running on ${port} succefully `)})

// app.post('/login',(req,res)=>{
//     const user = {
//         id:1,
//         username:'vishal',
//         amail:'avc@gmail.com'
//     }
//     jwt.sign({user}, secreatkey,{expireIn:300},(err,token)=>{
//         res.json({
//           token
//         })
//     })
// })
// app.post('.profile',verifyToken,(req,res)=>{
//     jwt.verify(req.token,secreatkey,(err,authdata)=>{
//         if(err){
//             res.send("result:Invalid token")
//         }else{
//             res.json({
//                 message:"profileaccess";
//                 authdata
//             })
//         }
//     })
// })
// function verifyToken(req,res,next){
//     const bearerHeader= req,header['authorization']
//     if(typeof bearerHeader !== 'undefined'){
//         const bearer = bearerHeader.split("");
//         next();
//     }
//     else {
//         res.send({
//             result:'token is not valid ';
//         })
//     }
// }
// app.use("/api/contacts",require("./routes/contactRoutes.js"))
// app.use(errorHandler)