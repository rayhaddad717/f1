const bcrypt = require('bcrypt');

//function to hash a new password
const hashPassword = async (plainPassword) => {
    try {
        const hashedPassword = await bcrypt.hash(plainPassword, 12);
        return hashedPassword;
    } catch (e) {
        console.log(e)
    }
}

//function to check if the password is correct
const checkPassword = async (plainPassword, hashedPassword) => {
    const result = await bcrypt.compare(plainPassword, hashedPassword);
    return result;
}

module.exports.hashPassword = hashPassword;
module.exports.checkPassword = checkPassword;