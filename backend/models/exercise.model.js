const mongoose =require('mongoose')
var Schema=mongoose.Schema;
const ex_schema=new Schema({
    username:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
},{
        timestamps:true
    },  
);
const Exercise=mongoose.model('Exercise',ex_schema)
module.exports=Exercise;