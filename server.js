require('dotenv').config()
const express = require("express");
const app = express()
const port = process.env.PORT || 4000;

//here define routes 
//usually this use is called middleware
app.use("/api/contacts",require("./routes/contactRoutes.js"))

app.listen(port,()=>{console.log(`server is running on ${port} succefully `)})