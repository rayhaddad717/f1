const express = require('express');
const router = express.Router();
const Message = require('../models/Messages')
router.post('/', async (req, res) => {
    req.body.loginID = req.session.loginID;
    console.log(req.body);
    const data = req.body;
    const message = new Message({ loginID: data.loginID, message: req.body.message });
    await message.save();
    console.log(message);

})
module.exports = router;