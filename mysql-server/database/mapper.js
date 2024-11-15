// mapper.js
const mysql = require('mysql');
const sql = require('./sqls/sql.js');

const pool = mysql.createPool({
    host : process.env.MYSQL_HOST,
    post : process.env.MYSQL_PORT,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PWD,
    database : process.env.MYSQL_DB,
    connectionLimit : process.env.MYSQL_LIMIT //내가 선점하고자 하는 connection 최대 개수
});


const query = (alias, values) => { //비동기작업 (awwait)
    return new Promise((resolve, reject)=>{
        let excuteSql = sql[alias]; //sql.customerInfo
        console.log(excuteSql);
        pool.query(excuteSql, values, (err, results)=>{ //values에 ?값
            //실제로 실행한 결과를 반환
            if(err){
                console.log(err);
                reject({err});
            }else{
                resolve(results);
            }
            })
        });
    }

    //삭제
    module.exports = {
        query
    };
