const userRepository = require("../database/userRepository")
const passwordAuth = require("../utils/passwordEncrypter/passwordAuth")

const getAllUsers = async () => {
    const allUsers = await userRepository.getAllUsers();
    return allUsers;
}
const createUser = (requestBody) => {
    requestBody.password = passwordAuth.hashPassword(requestBody.password);

    userRepository.createUser(requestBody);
}
const updateUser = (requestBody) => {
    userRepository.updateUser(requestBody);
}
const deleteUser = (requestId) => {
    userRepository.deleteUser(requestId);
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}