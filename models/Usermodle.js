const mongoose =require('mongoose');
const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String

},{timestamps:true})

const UserModel = mongoose.model("User", UserSchema); 
module.exports = UserSchema;