const mssql = require('mssql');
let { sqlLogin, sqlPassword } = process.env;
sqlLogin = sqlLogin ? sqlLogin : process.argv[2];
sqlPassword = sqlPassword ? sqlPassword : process.argv[3];
const config = {
    user: sqlLogin,
    password: sqlPassword,
    server: 'coastBusters.mssql.somee.com',
    database: 'coastBusters',
    options: {
        trustServerCertificate: true
    }
}
const connectToDB = async () => {
    try {
        await mssql.connect(config);
        console.log('connected to db')
    } catch (e) {
        console.log(e);
    }
}
module.exports = connectToDB;