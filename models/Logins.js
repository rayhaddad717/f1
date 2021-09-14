const mongoose = require('mongoose');
const passwordFunctions = require('../utils/passwordFunctions');
const User = require('../models/Users');
const Message = require('../models/Messages')
const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message'
        }
    ]
})
loginSchema.statics.findAndValidate = async function ({ username, password }) {
    const user = await this.findOne({ username: username });
    if (!user) {
        return false;
    } else {
        const hashedPassword = user.password;
        const result = await passwordFunctions.checkPassword(password, hashedPassword);
        return result ? user : false;
    }
}

loginSchema.statics.create = async function (info) {
    const { username, password, firstName, lastName, dateOfBirth, country } = info;
    const newUser = new User({ firstName, lastName, dateOfBirth, country });
    await newUser.save();
    const newLogin = new this({ username, password });
    newLogin.user = newUser;
    await newLogin.save();
    return newLogin;

}
module.exports = mongoose.model('Login', loginSchema);