const mysql = require('mysql');
const config = require('./config');
//To find out more on createPool:
//https://www.npmjs.com/package/mysql#pooling-connections

const pool = mysql.createPool({
        connectionLimit: 100,
        host: 'esde-ca2.cb635wcwlqoz.us-east-1.rds.amazonaws.com',
        user: config.databaseUserName,
        password: config.databasePassword,
        database: config.databaseName,
        multipleStatements: true
    });

 module.exports=pool;