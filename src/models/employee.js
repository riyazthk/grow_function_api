const { default: mongoose } = require("mongoose");

const employeeSchema=mongoose.Schema({
    first_name:{
        type:String,
        required:true,
        trim:true
    },
    last_name:{
        type:String,
        required:true,
        trim:true
    },
    date_of_birth:{
        type:String,
        required:true,
        trim:true,
    },
    department:{
        type:String,
        required:true,
        trim:true
    }

},{
    timestamps: true,
  })


  const Employee=mongoose.model('Employee',employeeSchema)

  module.exports=Employee