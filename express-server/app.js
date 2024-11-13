const fs = require('fs');
const express = require('express');
const server = express();

const userRouter = require('./router/user.js');
server.use('/user', userRouter);

server.use('/img', express.static('./images')); // express.static 폴더 통째로 가져오는 메소드
server.use(function(err, req, res, next){
  res.status(500).json({statusCode: res.statusCode,
                        errMessage : err.message});
});

server.get('/error', (req, res, next)=>{
  next(new Error('Process Fail! Check Data@'));
});


// 미들웨어 등록
server.use(express.json());

// DB설정
const jsonFile = fs.readFileSync('data.json');  //Sync 동기
const jsonData = JSON.parse(jsonFile);

const query = (crud, target, where = null)=>{
    let result = null;
  
    let emps = jsonData;
    switch(crud){
    // 조회
    case 'SELECT' :
      result = (where == null) ? emps :  emps.filter(emp => {
        return findEmp(emp, where);
      });
      break;  
  
    // 등록
    case 'INSERT' :
      emps.push(target);
      break;

    // 수정
    case 'UPDATE' :
      emps.forEach(emp => {
        if(findEmp(emp, where)){
          for(let field in target){
            emp[field] = target[field];
          }
        }
      });
      break;

    // 삭제
    case 'DELETE' :
      let selected = null;
      emps.forEach((emp, idx) => {
        if(findEmp(emp, where)){
          selected = idx;
        }
      });
  
      emps.splice(selected, 1);
      break;
    }
    return result;
  };
  
  function findEmp(emp, where){
    let fieldNum = 0; // 총 검색조건 갯수
    let selected = 0; // true인 검색조건 갯수
    for(let field in where){
      fieldNum++;
      if(emp[field] == where[field]){
        selected++;
      }
    }
    return (fieldNum == selected);
  }
server.listen(3000, ()=>{
    console.log('Server Start');
    console.log('http://localhost:3000');
});

//루트경로
server.get('/', (req,res)=>{
    //res.send('ㅎㅇ 요');
    res.sendFile('index.html', {root : __dirname});
});

// 전체조회 : GET , emps
server.get('/emps', (req, res)=>{
    res.send(query('SELECT'));
});
/*
req.params  => pathvariable
req.body    => JSON
req.query   => QueryString
*/

/*
Content-type
1) application/x-www-form-urlencoded
=> QueryString (질의문자열) : key=value&key=value&...
=> req.query 위 값들을 가져오는 속성

2) application/json
=> JSON : () or []
=> req.body 속성

3) pathvariable => content-type이 없다
=> req.params 속성
*/


// 단건조회 : GET , emps/:id => pathvariable  값을 받는 위치 실제 경로가 아님
server.get('/emps/:id', (req, res)=>{
    res.send(query('SELECT', null, {id : req.params.id })); //params.id 값은 /emps/:id의 변수
});

// 등록     : POST , emps
server.post('/emps', (req, res)=>{
  console.log(req.body)
    res.send(query('INSERT', req.body));
});

// 수정     : PUT , emps/:id
server.put('/emps/:id', (req, res)=>{
    res.send(query('UPDATE', req.body, {id : req.params.id }));
});

// 삭제     : DELETE , emps/:id
server.delete('/emps/:id', (req, res)=>{
    res.send(query('DELETE', null, {id : req.params.id }));
});