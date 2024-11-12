// 09_parameter.js
// 1) Default parameter
function say(message){
    if(message != undefined){
        console.log(message);
    }else{
        console.log('매개변수가 넘어오지 않았습니다.');
    }
} //예전 default값 정해주기
say('Hello!!')
say();

function printMsg(message = '매개변수가 넘어오지 않았습니다.') {
    console.log(message);
}

printMsg('Hello!!');
printMsg();
// 2) Rest parameter
const plus = function(x,y,...rests){
    let result = x+y;
    for(let rest of rests){
        result+= rest;
    }
    return result;
}
console.log(plus(1,2)); //3
console.log(plus(1,2,3,4,5)); //15
console.log(plus(1,2,3,4,5,6,7,8,9,10)); //55
