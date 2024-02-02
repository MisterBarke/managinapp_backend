const Employee = require('../models/employeeModel');

module.exports.getEmployees = async(req, res)=>{
   try{
    const allEmployees = Employee.find();
    const getAllEmployees = await allEmployees;
    res.status(200).json({employees: getAllEmployees})
   }catch(err){
    console.log('Could not load agents');
    res.status(500).json({error: 'Network error'})
   }
}
module.exports.getOneEmployee = async(req, res)=>{
  try{
    const {_id} = req.params;
    const findEmployee = Employee.findById(_id);
    const employeeFound = await findEmployee;
    res.status(200).json({employee: employeeFound});
  }catch(err){
    console.log('Could not find agent');
    res.status(500).json({serverError: 'Server error'})
  }
}

 
module.exports.newEmployee = async(req, res)=>{
    try{
        const newEmployee = new Employee(req.body)
       const savedEmployee = await newEmployee.save()
        console.log('employee created');
        res.status(201).json({savedEmployee: savedEmployee._id});
    }
    catch(err){
         console.log('something went wrong', err);
         res.status(400).json({ err });
    }
}

module.exports.deleteEmployee = async(req, res)=>{
    try{
        const deleteEmployee = await Employee.deleteOne({_id:req.body._id})
        if(deleteEmployee.deletedCount === 0){
            return res.status(404).json({error: 'Employee not found'})
        }else{
           return res.status(200).json({success : 'Employee deleted'})
        }
        

    }catch(err){
        console.log('Something went wrong');
        res.status(500).json({ error: 'Internal Server Error' });
    }
   
      
}

module.exports.editEmployee = async(req, res)=>{
    try{
       const updatedEmployee = await Employee.findOneAndUpdate(
        {_id:req.params._id},
        {
            $set:{
            "nom": req.body.nom,
            "phone":req.body.phone,
            "company": req.body.company,
            "region": req.body.region,
            "picture": req.body.picture,
            "salary": req.body.salary
            }
        },
        {new:true}
       );
       if(!updatedEmployee){
        return res.status(404).send('Blog not found');
       }
       res.send('Item Updated!')
    }
    catch(err){
         console.error(err.message);
         res.status(500).send('Not Updated')
    }
}
