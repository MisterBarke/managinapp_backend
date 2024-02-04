const Clients = require ('../models/clientsModel');
const User = require('../models/userModel');

module.exports.getClients = async (req, res)=>{
    try{
        const user = await User.findOne({_userId: req.params._userId});
        if (user) {
        const allClients = Clients.find({_userId: user._userId});
        const getAllClients = await allClients;
        res.status(200).json({clients: getAllClients});
        }else{
            return res.status(404).json({ error: 'Utilisateur non trouvé.' });
        }
        
    }catch(err){
        res.status(500).json({error: "Network error"})
    }

}
module.exports.postClients = async (req, res)=>{
    try{
        const existedClient = await Clients.findOne({client: req.body.client});
        console.log(existedClient);
        if (!existedClient) {
            const newClient = new Clients(req.body);
            const saveClient = await newClient.save();
            console.log('Client added');
            res.status(201).json({newClient:  saveClient._id});  
        }else{
            
            const updatedClient = await Clients.findOneAndUpdate(
                { client: req.body.client },
                { $inc: { salary: req.body.salary } },
                { new: true }
            );
            console.log('Client updated');
            res.status(200).json({ updatedClient: updatedClient._id });
        }
    }catch(err){
        console.log('Something Went wrong');
        res.status(400).json({error: err})
    }
}


module.exports.deleteClient = async (req, res)=>{
    try{

        const deletedClient = await Clients.deleteOne({_id:req.body._id});
        const deletedClientFromParams = await Clients.deleteOne({_id:req.params._id});
        console.log(deletedClient +" params id ", deletedClientFromParams);
        if(deletedClient.deletedCount === 0 && deletedClientFromParams ===0){
            return res.status(404).json({Error: 'This client doesn\'t exist'});
        }else{
            return res.status(200).json({success : 'Client deleted'})
        }
        
    }catch(err){
        res.status(500).json({Error: 'Network error'})
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