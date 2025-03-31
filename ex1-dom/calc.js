const section = document.querySelector('#calc-app');
const xInput = section.querySelector('.x-input');
const yInput = section.querySelector('.y-input');
const resultSpan = section.querySelector('.result');
const sumitInput = section.querySelector('.submit-input');

sumitInput.onclick = (e) => {

    e.preventDefault();//도큐먼트 객체의 기능
    //e.sstopPropagation();

    console.log("hello");
    const x = parseInt(xInput.value);//도큐먼트 객체의 기능
    const y = parseInt(yInput.value);//도큐먼트 객체의 기능

    console.log(x,y,x+y);

    const result = x + y;//도큐먼트 객체의 기능이 아님
    resultSpan.textContent = result;//도큐먼트 객체의 기능
};

