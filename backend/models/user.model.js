
const mongoose =require('mongoose')
var Schema=mongoose.Schema;
const user_schema=new Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        minlength:3
    },
},{
        timestamps:true
    },  
);
const User=mongoose.model('User',user_schema)
module.exports=User;
