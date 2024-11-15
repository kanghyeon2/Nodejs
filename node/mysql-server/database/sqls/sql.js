// sql.js
const customerList =
`select id
        , name
        , email
        , phone
        , address
from customers
order by id`;

//단건조회
const customerInfo =
`select id
        , name
        , email
        , phone
        , address
 from customers
 where id = ?`;
//등록
const customerInsert=
`insert into customers 
 set ?`; // 객체 타입 { 'name' = 'Hong', 'phone' = '010-1234-1234' }

//수정
const customerUpdate=
`update customers
 set ?
 where id = ?`; //[{ 'name' = 'Hong', 'phone' = '010-1234-1234' }, ID]

//삭제
const customerDelete=
`delete from customers
 where id = ?`;

/*
1)      ?의 개수
1-1)    1개 : 단일값
1-2)    2개 이상 : 배열
2)      ?앞에 컬럼의 유무
2-1)    컬럼이 존재하는 경우 기본 데이터 값(문자, 숫자, 날짜 등)
2-2)    컬럼이 없는 경우 객체
*/

module.exports = {
    customerInfo,
    customerList,
    customerInsert,
    customerUpdate,
    customerDelete
};