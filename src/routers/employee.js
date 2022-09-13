const express=require('express')
const Employee=require('../models/employee')
var router=new express.Router()


router.post('/add_employee_details',async(req,res)=>{

    const employee=new Employee({...req.body})

    try{
        const response=await employee.save()
        res.status(200).send({
            status: 200,
            message: "Task added successfully",
            data: response,
          });
    }catch(e){
        res.status(403).send({
            status: 403,
            message: "something went wrong",
            data: e,
          });
    }
    
})

router.get('/get_employee_details',(req,res)=>{
    console.log('entry request');
const {page,size,first_name,last_name,date_of_birth,date_enrolled}=req?.query
let filter_payload={}
var pages=page
var sizes=size
if(first_name) filter_payload={...filter_payload,first_name:first_name}

if(last_name) filter_payload={...filter_payload,last_name:last_name}

if(date_of_birth)filter_payload={...filter_payload,date_of_birth:date_of_birth}

if(date_enrolled) filter_payload={...filter_payload,date_enrolled:date_enrolled}

if (!pages) pages = 1;

if (!sizes) sizes = 3;

    const limit = parseInt(sizes)
    const skip = (parseInt(pages) - 1) * parseInt(sizes)

    Employee.find(filter_payload).limit(limit).skip(skip).then(response=>{

        res.send({status:200,success:true,parameters:response,page:parseInt(pages)+1,size:parseInt(sizes)})
    }).catch(err=>{
        res.send({status:403,success:false,message:'Invalid'})
    })

})


module.exports=router