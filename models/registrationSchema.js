const mongoose = require('mongoose')

const registrationSchema = new mongoose.Schema ({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
}, 
{collection: 'users'}
)

const Registration = mongoose.model('registration', registrationSchema)

module.exports = Registration