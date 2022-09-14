const monsgoose = require("mongoose");

monsgoose.connect("mongodb+srv://riyaz:admin@employeedetails.bz6rq6o.mongodb.net/test", {
  useNewUrlParser: true,
}).then(res=>{console.log('connect successfully');}).catch(err=>{console.log('err',err);})

