import Menu from './menu.js';

export default function NewMenu(){

}

NewMenu.prototype = new Menu();
//NewMenu.prototype = Object.create(Menu.prototype);
//NewMenu.prototype.constructor = NewMenu;
let m1 = new NewMenu();
console.log(m1.toJSON()); // { korName: '아메리카노', engName: 'Americano', price: 4000 }

export function test1(){
    console.log('test1()');
}

export function test2(){
    console.log('test2()');
}

//export { test1, test2 };