const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')

const userSchema=new mongoose.Schema({
    "email":{
        type:String,
        required:[true,'please provide the email'],
        unique:true
    },
    "password":{
        type:String,
        required:[true,'please provide the password']
        }
},{timestamps:true})

userSchema.pre('save',async function(){
const salt=await bcrypt.genSalt(10) //it returns the promise if u dont use callback
this.password=await bcrypt.hash(this.password,salt)
})




module.exports=mongoose.model('User',userSchema)