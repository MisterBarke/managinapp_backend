const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _userId: {type: String, required: [true, 'veuillez fournir un id']},
    userName: {type: String, required: [true, "Veuillez entrer le nom de l'agent"]},
    userEmail: {type: String, required: [true, "Veuillez entrer l'email de l'utilisateur"]},
    userPicture: {type: String},
})
 const User = mongoose.model('Users', userSchema);
 module.exports = User;
