const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        require: true
    },
    country: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model('User', userSchema);