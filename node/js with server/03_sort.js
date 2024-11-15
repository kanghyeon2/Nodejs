// 03_sort.js

let fruits= ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.sort();
console.log(fruits); //'Apple', 'Banana', 'Mango', 'Orange'

let points = [40, 100, 1 ,5, 25, 10];
points.sort();
console.log(points); // 1, 10, 100, 25, 40, 5

points.sort(function(a,b){
    return a-b ;
})//a,b => a-b  >>음수일경우만 위치를 바꿈

console.log(points); //1, 5, 10, 25, 40, 100

let emps = [
    {
    eid : 200,
    name : 'King'
    },
    {
    eid : 301,
    name : 'Edward'
    },
    {
     eid : 102,
     name : 'Han'
    },
    {
     eid : 109,
     name : 'Hang'
    }
];

emps.sort((pre, next)=>{
    return  next.eid - pre.eid; //역순
});

emps.sort((pre, next)=>{
    return  pre.eid - next.eid; //정순
});


console.log(emps);
console.log(emps[0].eid);
console.log(emps[0].name);