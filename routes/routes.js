const {Router} = require('express');
const { newEmployee, getEmployees, deleteEmployee, getOneEmployee, editEmployee } = require('../controllers/employeesController');
const { getClient, postClients, deleteClient, updateClient, getTotalSalary, getAllClients } = require('../controllers/clientsController');
const { getUser, postUser, deleteUser } = require('../controllers/usersController');
const verifyToken = require('../middleware/authMiddleware');
const router = Router();

router.post('/employees', verifyToken, newEmployee);
router.get('/employees/:_userId', verifyToken, getEmployees);
router.delete('/employees/:_id', verifyToken, deleteEmployee);
router.get('/employees/:_id', verifyToken, getOneEmployee);
router.put('/employees/:_id', verifyToken, editEmployee);
router.get('/clients/:_userId', verifyToken, getClient)
//router.get('/clients', getAllClients)
router.post('/clients', verifyToken, postClients)
router.put('/clients/:_id', verifyToken, updateClient);
router.delete('/clients/:_id', verifyToken, deleteClient)
router.get('/clients/:_userId/totalSalary', verifyToken, getTotalSalary)
router.get('/user', verifyToken, getUser)
router.post('/user', verifyToken, postUser)
router.delete('/user', verifyToken, deleteUser)

module.exports = router;