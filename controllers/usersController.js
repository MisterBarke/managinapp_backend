
const User = require('../models/userModel');

module.exports.getUser = async(req, res)=>{
    try {
        const user = User.find();//pour exclure le mdp du resultat
        const getUser = await user;
        if (!user) {
            return res.status(404).json({message: 'No user found'});
        }
        res.status(200).json({users: getUser})
    } catch (error) {
        console.error('sorry'+ error);
        res.status(500).send('erreur survenue');
    }
}

module.exports.postUser = async(req, res)=>{
    try {
        const findUser = await User.findOne({_userId: req.body._userId});
        console.log('user found', findUser);
        if (!findUser) {
            const newUser = new User(req.body);
            const registeredUser = await newUser.save();
            res.status(201).json(registeredUser);
        
        }else{
            return res.status(400).json({login: 'Welcome back'})
        }
        
           
        
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