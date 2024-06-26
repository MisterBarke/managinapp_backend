const mongoose = require('mongoose');

const clientsSchema = new mongoose.Schema({
        _userId: { type: String, required: true },
        _id: {type: String, required: true},
        client : {type: String, required: [true, 'Veuillez entrer le nom du client']},
        salary : {type: Number, required: [true, "Veuillez entrer le salaire de l'agent'"]},
      
});

clientsSchema.statics.getTotalSalaryByUserId = async function(userId){
    try {
        const result = await this.aggregate([
            {
                $match: {
                    _userId: userId
                }
            },
            {
                $group:{
                    _id: '$_userId',
                    totalSalary: {$sum: '$salary'}
                }
            },
            {
                $project:{
                    _id: 0,
                    totalSalary: 1
                }
            }
        ]);
        if (result.length > 0) {
            return result[0].totalSalary;
        } else {
            return 0;
        }
    } catch (e) {
        console.error('Error calculating total salary', e);
        throw e;
    }
}

    
 const Clients = mongoose.model('clients', clientsSchema);

 module.exports = Clients
