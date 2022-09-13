var express = require("express");
const bcrypt = require("bcryptjs");
require("../src/db/mongoose");

const userRouter = require("./routers/users");
const taskRouter = require("./routers/task");
const employeeRouter=require('./routers/employee')

var port = process.env.PORT || 8080;
var app = express();

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);
app.use(employeeRouter)

app.all("*", (req, res) => {

  res.send({
    error: 404,
    message: "404 not found",
  });
});

app.listen(port, () => {
  console.log("server is up");
});
