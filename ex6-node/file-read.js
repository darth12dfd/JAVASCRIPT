let module1 = require('./module1.js');
let fs = require('fs').promises;
let m2 = require('newlec-hello');
console.log(m2.hello());

//1. 동기형 함수
//let data = fs.readFileSync('data.txt', 'utf-8');

//2. 비동기형 함수
//fs.readFileSync('data.txt', 'utf-8',(err,data)=>{
//    console.log(data);
//}); // 동기적으로 파일을 읽음.


//3. 비동기형 프로미스
(async ()=>{
    let data = await fs.readFile('data.txt','utf-8');
    console.log(data); 
})(); // 비동기적으로 파일을 읽음.


//let data = await fs.readFile('data.txt','utf-8');
//console.log(data); // 123456789 출력
/*
const promise = fs.readFile('data.txt','utf-8');
promise
.then((data)=>{
    return data.substring(0,5);
})
.then((sub)=>{
    console.log(sub); // 7 출력
});
*/

console.log(module1.add()); // 7 출력