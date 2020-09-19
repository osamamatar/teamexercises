//Server generated
var express = require('express');
var app = express();
var mongoose =require('mongoose')
var cors = require('cors');

  mongoose.connect("mongodb://localhost:27017/trackerdb", {
      useNewUrlParser: "true",
    })
    const seeds=require('./seed/seeds');
  // seeds();
    mongoose.connection.on("error", err => {
      console.log("err", err)
    })
    mongoose.connection.on("connected", (err, res) => {
      console.log("mongoose is connected")
    })
    
  const usersRouter=require('./router/users.js')
  const exercisesRouter=require('./router/exercises.js')
  mongoose.connect()
  app.use(express.json());
  app.use(express.static(__dirname));

  app.use(cors());
  app.use('/users',usersRouter)
  app.use('/exercises',exercisesRouter)


var Port = process.env.PORT || 5000;
var IP = process.env.IP || '127.0.0.1';
app.listen(Port, IP, (err) => {
    if (err) {
       console.log(err)
   } else {
       console.log('Server is listening at ' + IP + ':' + Port);
    }
});