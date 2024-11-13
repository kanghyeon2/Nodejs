// 07_Destructuring.js
// 1) ObjectDestructuring
let person = {
    firstName : 'John',
    lastName : 'Doe',
    age : 37,
    email : 'john@gmail.com',
    country : 'USA'
};

let {lastName, email} = person;
console.log(lastName);
console.log(email);

function getFullName({firstName, lastName}){
    console.log( `${lastName}, ${firstName}`);
}
getFullName(person);


// 2) ArrayDestructuring 순서대로만 가능
let scores = [70,80,90];

let[a,b,c] = scores;
//let[a,b] = scores; <<이 경우 a,b에 70,80만 들어감

console.log(a);
console.log(b);
console.log(c);
