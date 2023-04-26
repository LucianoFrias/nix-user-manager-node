const express = require("express")
const router = express.Router()
const userController = require('../../controllers/userController')

router
    .get('/', userController.getAllUsers)
    .post('/add', userController.createUser)
    .put('/update', userController.updateUser)
    .delete('/delete/:id', userController.deleteUser)

    module.exports = router;