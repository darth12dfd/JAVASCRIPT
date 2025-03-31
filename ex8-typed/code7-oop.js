function Exam(){
    kor = 1;
    eng = 2;
    math = 3;

    console.log(kor,eng,math);
    console.log('this',this.kor,this.eng,this.math);
    console.log('global', global.kor,global.eng,global.math); 
}

console.log("========exam1=========");
let exam1 = Exam();
console.log('exam1',exam1);

console.log("========exam2=========");
let exam2 = new Exam();
console.log('exam2',exam2);

let ar1 = [];
console.log(ar1.aaaaa());
Array.prototype.aaaaa = function(){
    console.log('aaaaa');
}
let ar2 = [];
console.log(ar2.aaaaa());