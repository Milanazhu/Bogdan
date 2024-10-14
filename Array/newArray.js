// const styles = ['jazz', 'bluzz'];// Создаем массив первоначальный
// console.log(styles[0]);
// styles[0] = 'rock' //меняем джаз на рок 
// console.log(styles[0]);
// styles[2] = ('mil');//добавляем в массив еще одно значение
// console.log(styles);
// (styles.pop());// удаляем послежнее значение
// console.log(styles);
// styles.push('Груша'); //добавляем в качестве последнего значения значение груша
// console.log(styles);
// styles.shift()// удаляем первое значение
// console.log(styles);
// styles.unshift('Apple') // добавляем в начало очереди значение

const newArray = [
    1, 
    2, 
    3, 
    4,
];
newArray[2] = 'abc';
console.log(newArray[2]);

newArray.push(678);
console.log(newArray);
newArray.pop();
console.log(newArray);