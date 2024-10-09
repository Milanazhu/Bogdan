function myFn(a) {
    console.log(a);
}

const b = true;
let c = 18;

myFn(2 + 3);
myFn(b);
myFn(c = c + 1);
//myFn(c=c + 1;) // ошибка потому что тут инструкция потому что она оканчивается на точку с запятой
myFn(18 - 11 + 23);