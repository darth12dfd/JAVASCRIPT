let f3; // 전역 범위에서 변수 `f3`를 선언.
let x = 100; // 전역 변수 `x`를 선언하고 값 100을 할당.

let f1 = function() { // 함수 `f1`을 정의.
    let x = 40; // `f1` 내부에서 지역 변수 `x`를 선언하고 값 40을 할당.
    console.log("f1: ", window.x, x); // 전역 `x`(window.x)와 지역 `x`를 출력.
    f3 = function() { // 전역 변수 `f3`에 새로운 함수를 할당.
        console.log(x); // `f1`의 지역 범위에서 `x` 값을 출력 (클로저).
    }
}

console.log("global:", window.x, x); // 전역 `x`(window.x)와 전역 변수 `x`를 출력.

f1(); // 함수 `f1`을 호출. 클로저를 설정하고 `f3`를 할당.
f3(); // 함수 `f3`을 호출. `f1`의 범위에서 `x` 값(40)을 출력.