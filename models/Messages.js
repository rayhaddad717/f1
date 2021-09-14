const mongoose = require('mongoose');
const messageModel = new mongoose.Schema({
    message:
    {
        type: String,
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Login'
    }
})
module.exports = mongoose.model('Message', messageModel);