const secretToken = 'D.ACe12345678';

// Middleware pour vérifier le token dans le header
const verifyToken = (req, res, next)=> {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(403).send({ auth: false, message: 'Token manquant.' });

    if (token !== secretToken) return res.status(401).send({ auth: false, message: 'Token invalide.' });

    // Si le token est valide, passez à la prochaine étape
    next();
}

module.exports = verifyToken;