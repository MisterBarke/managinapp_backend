

const authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Token non fourni' });

  try {
    const decoded = jwt.verify(token, 'businessManagementApp'); // Remplacez 'your_secret_key' par votre clé secrète JWT
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token non valide' });
  }
};

module.exports = authenticateUser;
