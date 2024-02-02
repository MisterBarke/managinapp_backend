const {Router} = require('express');
const { newEmployee, getEmployees, deleteEmployee, getOneEmployee, editEmployee } = require('../controllers/employeesController');
const { getClients, postClients, deleteClient, updateClient, getTotalSalary } = require('../controllers/clientsController');
const { getUser, postUser, deleteUser } = require('../controllers/usersController');
const authenticateUser = require('../middleware/authMiddleware');
const router = Router();

router.post('/employee', authenticateUser, newEmployee);
router.get('/employee', authenticateUser, getEmployees);
router.delete('/employee/:_id', authenticateUser, deleteEmployee);
router.get('/employee/:_id', authenticateUser, getOneEmployee);
router.put('/employee/:_id', authenticateUser, editEmployee);
router.get('/clients', authenticateUser, getClients)
router.post('/clients',authenticateUser, postClients)
router.put('/clients/:_id', authenticateUser, updateClient);
router.delete('/clients/:_id', authenticateUser, deleteClient)
router.get('/clients/totalsalary', authenticateUser, getTotalSalary)
router.get('/user', authenticateUser, getUser)
router.post('/user', authenticateUser, postUser)
router.delete('/user', authenticateUser, deleteUser)

module.exports = router;