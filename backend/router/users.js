var express = require('express');
var User = require('../models/user.model');
var router = express.Router();

   router.route('/').get((req, res) => {
        User.find().
        then(users=>res.json(users)).
        catch(err=>res.status(400).json('error'+err))
       
   });

   router.route('/add').post((req, res) => {
        //making a newUser
        const username=req.body.username;
        var newUser = new User({username})
        newUser.save().then(user=>res.json('user added !')
        .catch(err=>res.status(400).json('error'+err)))
    });



    module.exports = router;