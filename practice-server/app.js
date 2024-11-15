// app.js
const express = require('express');
const app = express();
const mysql = require('./mapper.js');

app.use(express.json());

app.listen(3000, ()=>{
    console.log('Server start');
    console.log('http://localhost:3000');
});
app.get('/asdf', (req, res)=>{
    res.send('hello');
})


//전체조회
app.get('/users', async(req, res)=>{
    let list = await mysql.query('userList');
    res.send(list);
});
//단건조회
app.get('/users/:no', async(req, res)=>{
    let selected = req.params.no;
    let info = (await mysql.query('userInfo', selected))[0];
    res.send(info);
});
//등록
app.post('/users', async(req, res)=>{
    let newObj = req.body;
    let info = await mysql.query('userInsert', newObj);
    res.send(info);
});
//수정
app.put('/users/:no', async(req,res)=>{
    let selected =req.params.no;
    let newObj = req.body;
    let info = await mysql.query('userUpdate', [newObj, selected]);
    res.send(info);
});
//삭제
app.delete('/users/:no', async(req, res)=>{
    let selected =req.params.no;
    let info = await mysql.query('userDelete', selected);
    res.send(info);
});