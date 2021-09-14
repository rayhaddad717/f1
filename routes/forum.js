const express = require('express');
const router = express.Router();
const Message = require('../models/Messages');
const Login = require('../models/Logins')
router.post('/', async (req, res) => {
    req.body.loginID = req.session.loginID;
    const user = await Login.findById(req.session.loginID);
    const data = req.body;
    const message = new Message({ user: data.loginID, message: req.body.message });
    await message.save();
    user.messages.push(message);
    await user.save();

})
module.exports = router;