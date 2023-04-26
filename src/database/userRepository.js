const databaseConnection = require('./databaseConnection')

const getAllUsers = async () => {
    const results = await databaseConnection.promise().query("SELECT * FROM user");
    return results[0];
}

const createUser = (requestBody) => {
    databaseConnection.query(
        "INSERT INTO user (name, surname, email, gender, role, password) VALUES (?,?,?,?,?,?)",
         [requestBody.name, requestBody.surname, requestBody.email, requestBody.gender, requestBody.role, requestBody.password], (err) => {
        if (err) throw err
    })
}

const updateUser = (requestBody) => {
    databaseConnection.query(
        "UPDATE user SET name = ?, surname = ?, email = ?, gender = ?, role = ?, password = ? WHERE id = ?",
        [requestBody.name, requestBody.surname, requestBody.email, requestBody.gender, requestBody.role, requestBody.password, requestBody.id],
        (err) => {
            if (err) throw err
        })
}

const deleteUser = (requestId) => {
    databaseConnection.query("DELETE FROM user WHERE id=?", requestId, (err) => {
        if (err) throw err;
    })
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser

}