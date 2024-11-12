// execute_module.js
const cal = require('./calculator.js');
const{ add } = require('./calculator.js');

let resultAdd = cal.add(10, 5);
let resultMulti = cal.mul(12,1516);

console.log(resultAdd);
console.log(resultMulti);

resultAdd = add(20, 50);
console.log(resultAdd);