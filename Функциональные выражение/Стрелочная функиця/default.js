function multByFactor(value = 10, multplier = 1) { // обычная функия 
    return value * multplier
}
 const value = multByFactor(10, 2)
 const count = multByFactor(12)
 const zero = multByFactor();

 console.log(value);
 console.log(count);
 console.log(zero);

const mynewfun = function(value = 10, multplier = 1) { //функциональное выражение
    return value * multplier
};
console.log(mynewfun(3, 5));


const arrowFun = (value = 10, multplier = 1) => { // стрелочная функция 
    return value * multplier
}
console.log(arrowFun(8, 3));
