const {constants} = require("../constants.js");
const errorHandler = (err,req,res,next)=>{
const statusCode = res.statusCode ? res.statusCode:500;
switch(statusCode){
    case constants.VALIDATION_ERROR:
        res.json({
        title :"Not found",
        message:err.message,
        statcTrace:err.stack
    });
    break;
    case constants.NOT_FOUND:
        res.json({
        title :"validation Failed ",
        message:err.message,
        statcTrace:err.stack
    });
    case constants.UNAUTHORIZED:
        res.json({
        title :"unauthorized user  ",
        message:err.message,
        statcTrace:err.stack
    });
    case constants.FORBIDDEN:
        res.json({
        title :"access forbidden ",
        message:err.message,
        statcTrace:err.stack
    });
     case constants.SERVER_ERROR:
        res.json({
        title :"server error ",
        message:err.message,
        statcTrace:err.stack
    });
    default:
        console.log("no error everything working fine")
        break;
}
};
// console.log(typeof(errorHandler));
module.exports = errorHandler;