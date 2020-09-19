var express = require('express');
var Exercise = require('../models/exercise.model');
var User = require('../models/user.model');
function seeds(){
    const username='ahmed';
    var newUser = new User({username})
    newUser.save()
    var ex={
        username:'osama' ,
        description:'sdnvlkdfnbklnsdklfbnglfk ',
        duration:12,
        date:Date.now()
    }

    const newExercise = new Exercise(ex)
    newExercise.save()
}
module.exports=seeds