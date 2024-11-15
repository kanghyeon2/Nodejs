// router/user_router.js
const express = require('express');
const router = express.Router();
const userService = require('../service/user_service.js');

//전체조회
/*router.get('/users', async (req, res)=>{
    let userList = await userService.findAll();
    res.send(userList);
});*/ //내부 에러발생 시 에러 내용을 사용자는 모르고 개발자만 알게 하기 위해 밑에 경우를 더 많이 사용
router.get('/users', (req, res)=>{
    userService
    .findAll()
    .then(list =>{
        res.send(list);
    })
    .catch(err =>{
        res.status(500).send('Fail Process');

    })
});



//단건조회
router.get('/users/:no', async (req, res)=>{
    let userNo =req.params.no;
    let info = await userService.findByUserNo(userNo);
    res.send(info);
})
// 라우팅 = 사용자의 요청(URL+METHOD) + Service + view //주문을 받는사람
//등록
router.post('/users', async(req, res)=>{
    let userInfo = req.body;
    let insert = await userService.createNewUser(userInfo);
    res.send(insert);
})
//수정
router.put('/users/:no', async(req, res)=>{
    let userNo = req.params.no;
    let newObj = req.body;
    let update = await userService.updateUserInfo(newObj, userNo);
    res.send(update);
})
//삭제
router.delete('/users/:no', async (req, res)=>{
    let userNo = req.params.no;
    let delId = await userService.deleteUserInfo(userNo);
    res.send(delId);
})

module.exports = router;