const mysql = require('mysql');
const sql = require('./spls/users.js');

const connectionPool = mysql.createPool({
    host : process.env.MYSQL_HOST,
    post : process.env.MYSQL_PORT,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PWD,
    database : process.env.MYSQL_DB,
    connectionLimit : process.env.MYSQL_LIMIT,
    debug : true 
});

const query = (alias, values)=>{
    return new Promise((resolve, reject)=>{
        let excuteSql = sql[alias];
        connectionPool.query(excuteSql, values, (err, results)=>{
            if(err){
                console.log(err);
                reject({err});
            }else{
                resolve(results);
            }
        });
    });
}

module.exports = {
    query,
}