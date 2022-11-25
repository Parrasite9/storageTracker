const mongoose = require('mongoose')

const LoginSchema = new mongoose.Schema ({
    email: {type: String, required: true},
    password: {type: String, required: true}
})

const Login = mongoose.model('login', LoginSchema)

module.exports = Login