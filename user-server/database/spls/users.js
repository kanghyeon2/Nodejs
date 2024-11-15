// Table : t_users

//전체조회
const userList =
`SELECT user_no
        ,user_id
        ,user_pwd
        ,user_name
        ,user_gender
        ,user_age
        ,join_date
FROM t_users
ORDER BY user_no`;
//단건조회
const userInfo =
`SELECT user_no
        ,user_id
        ,user_pwd
        ,user_name
        ,user_gender
        ,user_age
        ,join_date
FROM t_users
where user_no=?`;
//등록
const userInsert =
`insert into t_users
set ?`;
//수정
const userUpdate =
`update t_users
set ?
where user_no = ?`;
//삭제
const userDelete =
`delete from t_users
 where user_no = ?`;

module.exports ={
    userList,
    userInfo,
    userInsert,
    userUpdate,
    userDelete
}
/*
{
userList : ``,
userInfo : ``,
userInsert : ``,
userUpdate : ``,
userDelete : ``
}
*/
