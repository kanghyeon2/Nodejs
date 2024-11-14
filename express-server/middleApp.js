// middleApp.js
const express = require('express');
const cors = require('cors');
const session = require('express-session');

const app = express();

//모든 요청에 응답
//app.use(cors());

// 지정한 요청에 대해서만 응답
const corsOptions = {
    origin : 'http://192.168.0.27:5500', 
    optionsSuccessStatus : 200
}
app.use(cors(corsOptions));

/*
Content-type
application/x-www-form-urlencoded
=> QueryString (질의문자열) : key=value&key=value&...
=> req.query 위 값들을 가져오는 속성 : get방식
=> req.body 속성 : post방식
*/

// application/x-www-form-urlencoded
app.use(express.urlencoded({extended : false})); 

app.post('/info', (req, res)=>{
    res.send(`keyword : ${req.body.search}`)
});

app.listen(3000, ()=>{
    console.log('http://localhost:3000');
});

let sessionSetting = session({
    secret : 'secret key', // 암호화 키
    resave : false, // 세션의 저장여부
    saveUninitialized : true, // 세션이 필요하기 전에 세션을 생성 여부
        cookie : {
        httpOnly : true, // 자바스크립트가 접근을 막도록 
        secure : false, // https에서만 cookie 사용 가능하도록
        maxAge : 60000 // 쿠키의 유효기간
    }
});
app.use(sessionSetting);

app.post('/login', (req, res)=>{
    const{ id, pwd } = req.body; // { id : 'Hong', pwd : '1234' }
    req.session.user = id; //user 우리가 session에 추가하고자 하는 이름
    req.session.pwd = pwd;
    req.session.save(function(err){
        if(err) throw err;
        res.redirect('/');
    })
});

app.get('/', (req, res)=>{
    res.send(req.session);
});

app.get('/logout', (req, res)=>{
    req.session.destroy();
    res.redirect('/');
})