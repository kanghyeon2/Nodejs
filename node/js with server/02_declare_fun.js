// 02_declare_fun.js
// 1) 함수선언문 => var에 가까움
// javascript 함수 데이터로 취급

/* //함수호이스팅 
var plus = function(x,y,z){
     return (x + y + z);
 }
*/

function plus(x, y){
    return (x + y);
}//plus(x,y,z)를 맨위로 끌어올려서 plus(x,y)는 없는 함수
console.log(plus(1,2,3)); // 6

function plus(x, y, z) {
    return (x + y + z);
}

console.log(plus(1,2,3)); // 6

// 2) 함수표현식 => let, const 방식으로 함수를 선언
const printMsg = function(keyword){
    return "result : " + keyword;
}
console.log(printMsg('안녕'));

// 3) 화살표 함수 =>        () => {}(js)    ()->{}(java)
//    화살표 함수 this 거의 쓰지x

let aray=[1, 2, 3, 4, 5];
aray.forEach((val)=>{
    console.log(val);
})

aray.forEach((val, idx, array)=>{
    let msg=`${idx} : ${val}, ${array}`;
    console.log(msg);
})

const multi = (x,y) => x*y;
console.log(multi(10,5));