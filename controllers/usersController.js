
const User = require('../models/userModel');

module.exports.getUser = async(req, res)=>{
    try {
        const user = await User.findById(req.user.userEmail).select('-password')//pour exclure le mdp du resultat
        if (!user) {
            return res.status(404).json({message: 'No user found'});
        }
        res.json(user)
    } catch (error) {
        console.error('sorry'+ error);
        res.status(500).send('erreur survenue');
    }
}

module.exports.postUser = async(req, res)=>{
    try {
        const newUser = new User(req.body);
        const registeredUser = await newUser.save();
        res.status(201).json(registeredUser);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error has occured')
    }
}

module.exports.deleteUser = async(req, res)=>{
    try{
        const deleteUser = await User.findByIdAndDelete(req.user.id);
        if (!deleteUser) {
            res.status(404).json({message: 'No user found'});
        }
        res.json({ message: 'Utilisateur supprimé avec succès' });
    }catch(error){
        res.status(500).send('And error has occured')
    }
}