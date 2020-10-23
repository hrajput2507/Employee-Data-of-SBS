var app = require("express");
var application = app();
var cors = require("cors");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var User = require("./models/user");
const user = require("./models/user");

var post = [{
    'message': 'hello everyone'
},
{
    'message': 'hiii'
}
]

application.use(bodyParser.urlencoded({ extended: true }));
application.use(bodyParser.json());
application.use(cors({ origin: 'http://localhost:4200' }));
application.get("/post", (req, res) => {
  res.send(post);
});


application.post("/forms", (req, res) => {
  
  console.log('checkdata',req.body);
 // console.log(req.params);
 // console.log(req.query)
  var userData = req.body;  

  var user = new User(userData);
  console.log(user)
  user.save((error, result) => {
    if (error)
      console.log("userData", userData);
    
    console.log("data save successfully");
    //res.sendStatus(200);
    res.send(result);
  });
});


application.post("/secondform", (req, res) => {
  console.log(req.body)
  user.findOneAndUpdate({'_id': req.body.id}, {$set:{
    "intrests" : req.body.intrests,
    "Date" : req.body.Date,           
}
},{new:true}, (err, result) => {

if(err) {
   // if(err) return res.send({httpCode: CodesAndMessages.dbErrHttpCode, code: CodesAndMessages.dbErrCode, message: CodesAndMessages.dbErrMessage});
} else {           
    console.log('updatecontact',result);    
  }
})
});




mongoose.connect(
  "mongodb+srv://hrajput2507:Heenu@1997@first-task.syaet.mongodb.net/<dbname>?retryWrites=true&w=majority",{
    useNewUrlParser: true,
  },
  (error) => {
    if (!error) {
      console.log("connection succesfull created");
    }
  }
);

application.listen(1220);
