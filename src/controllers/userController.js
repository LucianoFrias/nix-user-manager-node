
const userService = require('../services/userService')

const getAllUsers = async (req,res) => {
    const allUsers = await userService.getAllUsers()
    res.send(allUsers)
}

const createUser = (req,res) => {
    userService.createUser(req.body);
    res.send(`Created User ${req.params.id}`)
}

const updateUser = (req,res) => {
    userService.updateUser(req.body);
    res.send(`Update User ${req.params.id}`)
}

const deleteUser = (req,res) => {
    userService.deleteUser(req.params.id);
    res.send(`Delete User ${req.params.id}`)
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}