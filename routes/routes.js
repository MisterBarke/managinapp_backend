const {Router} = require('express');
const { newEmployee, getEmployees, deleteEmployee, getOneEmployee, editEmployee } = require('../controllers/employeesController');
const { getClient, postClients, deleteClient, updateClient, getTotalSalary, getAllClients } = require('../controllers/clientsController');
const { getUser, postUser, deleteUser } = require('../controllers/usersController');
const router = Router();

router.post('/employees', newEmployee);
router.get('/employees/:_userId', getEmployees);
router.delete('/employees/:_id', deleteEmployee);
router.get('/employees/:_id', getOneEmployee);
router.put('/employees/:_id', editEmployee);
router.get('/clients/:_userId', getClient)
router.get('/clients', getAllClients)
router.post('/clients', postClients)
router.put('/clients/:_id', updateClient);
router.delete('/clients/:_id', deleteClient)
router.get('/clients/:_userId/totalSalary', getTotalSalary)
router.get('/user', getUser)
router.post('/user', postUser)
router.delete('/user', deleteUser)

module.exports = router;