const mysql = require('mysql2');
const config = require('../../config/config');

const pool = mysql.createPool({
    host: config.DB_HOST,
    port: parseInt(config.DB_PORT), 
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_NAME,
});

const execute = (query, params) => {
    return new Promise((resolve, reject) => {
        pool.execute(query, params, (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    });
};

module.exports = {
    execute,
    connect: () => {
        pool.getConnection((err) => {
            if (err) throw err;
            console.log('Connected to the database.');
        });
    },
};
