require('dotenv').config();
module.exports = {
    database: {
        connectionstring: process.env.DB_CONNECTIONSTRING
    }
}