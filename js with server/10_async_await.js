// 10_async_await.js
async function getPostInfo(){
    let postList = await fetch('https://jsonplaceholder.typicode.com/posts')  //await : 첫번째 fetch가 끝날때까지 기다리라는 뜻 
                        .then(res => res.json())
                        .catch(err => console.log(err));
    
    let postId = postList[0].id;
    let post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
                    .then(res => res.json())
                    .catch(err => console.log(err));

    let commentList = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                           .then(res => res.json())
                           .catch(err => console.log(err));
                           
    post.comments = commentList;
    console.log(post);
}

getPostInfo();
//함수내부는 동기식
console.log('코드종료'); //기본이 비동기 작업이기 때문에 코드종료가 먼저 나옴
