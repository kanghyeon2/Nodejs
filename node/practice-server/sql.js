// sql.js
const userList =
`select user_no
        ,user_id
        ,user_pwd
        ,user_name
        ,user_gender
        ,user_age
        join_date
from t_users
order by user_id
`;

const userInfo =
`select user_no
        ,user_id
        ,user_pwd
        ,user_name
        ,user_gender
        ,user_age
        join_date
from t_users
where user_no = ?`;

const userInsert =
`insert into t_users
set ?
`;

const userUpdate = 
`update t_users
set ?
where user_no =?
`;

const userDelete =
`delete from t_users
where user_no = ?
`;

module.exports={
    userList,
    userInfo,
    userInsert,
    userUpdate,
    userDelete
}