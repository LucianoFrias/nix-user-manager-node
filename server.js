const express = require("express")
const path = require("path");
const v1UserRouter = require('./src/v1/routes/userRoutes')
const bcrypt = require("bcrypt")
const dotenv = require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 3000;


app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/v1/users", v1UserRouter)

function hashPassword(password)
{
    return bcrypt.hashSync(password, 10);
}



app.listen(PORT, () => {console.log("Server running on port: " + PORT)})