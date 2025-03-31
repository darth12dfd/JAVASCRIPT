{
    //유니온 타입
    type ID = string | number;

    let kor: ID = 30;
    kor = "30"; // string
    let eng:number;

    //eng = undefined; // undefined
    console.log(typeof eng);

    //리터럴 타입
    let x: "hello" = "hello";
    x= "hello"; // string
    //x = "hodor"; // 오류

    let level :  1 | 2 | 3 | 4;
    level = 1; // number
    console.log(level);
    //level = 6;//오류
}