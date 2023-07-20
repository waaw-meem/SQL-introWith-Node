const mysql = require('mysql2')

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'sql-node',
    password:'Nodecomplete',

})

module.exports = pool.promise()