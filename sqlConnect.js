const mysql = require('mysql');
const sql_auth = require('sql_auth.json');
const connection = mysql.createConnection(sql_auth);

connection.connect();

// connection.query('SELECT * FROM members', (error, res, fields) => {
//     if (error) {
//         throw error;
//     } else {
//         console.log(res[0]);
//     }
// });

function query(q) {
    connection.query(q, (error, results, fields) => {
        if (error) {
            throw error;
        } else {
            return results;
        }
    });
}

function stop() {
    connection.end();
}