const { isErrored } = require('nodemailer/lib/xoauth2')
const customError=require('../errors/classerror')

const errorMiddleware=(err,req,res,next)=>{
    console.log(err)
    if(err instanceof customError){
    return res.status(err.statuscode).json({"msg":err.message})
    }
    else{
        return res.json({'msg':"something went wrong"})
    }
}

module.exports=errorMiddleware