// calculator.js
// 간단한 사칙연산 기능을 가진 모듈

const defaultNum = 1;

function add(x, y){
    return x + y;
}

function minus(x, y){
    return x - y;
}

function multi(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

module.exports = {
    add, // "add" : add
    "mul" : multi
}; // 내가 보여주고 싶은 함수만 하도록 (add, multi만 사용 가능)


