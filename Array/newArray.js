const styles = ['jazz', 'bluzz'];// Создаем массив первоначальный
console.log(styles[0]);
styles[0] = 'rock' //меняем джаз на рок 
console.log(styles[0]);
styles[2] = ('mil');//добавляем в массив еще одно значение
console.log(styles);
(styles.pop());// удаляем послежнее значение
console.log(styles);
styles.push('Груша'); //добавляем в качестве последнего значения значение груша
console.log(styles);
styles.shift()// удаляем первое значение
console.log(styles);
styles.unshift('Apple') // добавляем в начало очереди значение
