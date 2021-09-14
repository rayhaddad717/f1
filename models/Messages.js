const mongoose = require('mongoose');
const messageModel = new mongoose.Schema({
    message:
    {
        type: String,
        required: true
    },

    loginID: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Message', messageModel);