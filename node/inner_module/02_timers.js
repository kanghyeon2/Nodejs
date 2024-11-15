// 02_timers.js
const timeout = setTimeout(()=>{
    let today = new Date(1981791187911991);
    let year = today.getFullYear();
    let month = ('0'+(today.getFullYear()+1)).slice(-2);
    let day = ('0'+today.getDay()).slice(-2);
    
    let hour = ('0' + today.getHours()).slice(-2);
    let minute = ('0' + today.getMinutes()).slice(-2);

    let current = `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`
    console.log(current);
}, 400);

let count = 0;
const interval = setInterval(()=>{
    console.log('interval %d', count++);
    if(count==3){
        clearInterval(interval);
    }
}, 100)

const immediate = setImmediate(()=>{
    console.log('즉시 실행 요청');
})

console.log('마지막 코드');