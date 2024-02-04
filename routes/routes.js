const {Router} = require('express');
const { newEmployee, getEmployees, deleteEmployee, getOneEmployee, editEmployee } = require('../controllers/employeesController');
const { getClients, postClients, deleteClient, updateClient, getTotalSalary } = require('../controllers/clientsController');
const { getUser, postUser, deleteUser } = require('../controllers/usersController');
const authenticateUser = require('../middleware/authMiddleware');
const router = Router();

router.post('/employees', newEmployee);
router.get('/employees/:_userId', getEmployees);
router.delete('/employees/:_id', deleteEmployee);
router.get('/employees/:_id', getOneEmployee);
router.put('/employees/:_id', editEmployee);
router.get('/clients/:_userId', getClients)
router.post('/clients', postClients)
router.put('/clients/:_id', updateClient);
router.delete('/clients/:_id', deleteClient)
router.get('/clients/totalsalary', getTotalSalary)
router.get('/user', getUser)
router.post('/user', postUser)
router.delete('/user', deleteUser)

module.exports = router;