const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
        _userId: { type: String, required: true },
        _id: {type: String, required:[true]},
        nom: {type: String, required: [true, "Veuillez entrer le nom de l'agent"]},
        phone: {type: Number, required: [true, 'Veuillez entrer le numero de telephone']},
        company : {type: String, required: [true, 'Veuillez entrer le nom du client']},
        region : {type: String, required: [true, "Veuillez entrer le nom de la region"]},
        salary : {type: String, required: [true, "Veuillez entrer le salaire de l'agent'"]},
        picture: {type: String}
})
 const Employee = mongoose.model('Employees', employeeSchema);

 module.exports = Employee
