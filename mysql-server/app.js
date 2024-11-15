// app.js
require('dotenv').config({ path : './database/mysql.env'});
console.log(process.env);
const express = require('express');
const app = express();
const mysql = require('./database/mapper.js');

//content-type : application/json
app.use(express.json());

app.listen(3000, ()=>{
    console.log('Server start');
    console.log('http://localhost:3000');
});


//전체조회
app.get('/customers', async (req, res)=>{
    let list = await mysql.query('customerList');
    res.send(list);
});

// 단건조회 select문 배열로 넘어옴
app.get('/customers/:id', async (req, res)=>{
    let selected = req.params.id;
    let info = (await mysql.query('customerInfo', selected))[0]; // 배열의 첫번째 값 [0]
    res.send(info);
});
//등록
app.post('/customers', async (req, res)=>{
    let newObj = req.body;
    console.log(newObj);
    let info = await mysql.query('customerInsert', newObj);
    res.send(info);
});
//수정
app.put('/customers/:id', async(req, res)=>{
    let selected = req.params.id;
    let newObj = req.body;
    console.log(newObj);
    let info = await mysql.query('customerUpdate', [newObj, selected]);
    res.send(info);
});
//삭제
app.delete('/customers/:id', async (req, res)=>{
    let selected = req.params.id;
    let info = await mysql.query('customerDelete', selected);
    res.send(info);
});