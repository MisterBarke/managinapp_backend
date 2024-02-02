const Clients = require ('../models/clientsModel')

module.exports.getClients = async (req, res)=>{
    try{
        const allClients = Clients.find();
        const getAllClients = await allClients;
        res.status(200).json({clients: getAllClients});
    }catch(err){
        res.status(500).json({error: "Network error"})
    }

}
module.exports.postClients = async (req, res)=>{
    try{
        const newClient = new Clients(req.body);
        const saveClient = await newClient.save();
        console.log('Client added');
        res.status(201).json({newClient:  saveClient._id});
    }catch(err){
        console.log('Something Went wrong');
        res.status(400).json({error: err})
    }
}


module.exports.deleteClient = async (req, res)=>{
    try{

        const deletedClient = await Clients.deleteOne({_id:req.body._id});
        console.log(deletedClient);
        if(deletedClient.deletedCount === 0){
            return res.status(404).json({Error: 'This client doesn\'t exist'});
        }else{
            return res.status(200).json({success : 'Client deleted'})
        }
        
    }catch(err){
        res.status(404).json({Error: 'Network error'})
    }
}

module.exports.updateClient = async (req, res)=>{
    try{
        const updatedClient = await Clients.findOneAndUpdate(
            {_id:req.params._id},
            {
                $set:{
                    "client": req.body.client,
                    "salary": req.body.salary
                }
            },
            {new:true}
        );
        if(!updatedClient){
            return res.status(404).json({error : "Client not found"});
        }else{
            return res.status(200).json({Success: "Client has been edited"})
        }
    }catch(err){
        res.status(500).json({error: "Network error"})
    }
}

module.exports.getTotalSalary = async (req, res)=>{
try {
    const totalSalary = await Clients.getTotalSalary();
    res.status(200).json({salary: totalSalary})
} catch (error) {
    res.status(500).json({error: "Network error"})
}
}