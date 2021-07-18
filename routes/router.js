const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController')

router.get('/users',UserController.listUsers);
router.post('/users',UserController.createUser);
router.get('/users/:id',UserController.getUserById);
router.put('/users/:id',UserController.updatedUser);
router.delete('/users/:id',UserController.deleteUser);



module.exports = router;