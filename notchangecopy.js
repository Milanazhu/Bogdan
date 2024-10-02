const person = {
    name: 'Bob',
    age: 25
}
const person2 = Object.assign({}, person); // assign метод 
//глобального объета Object и мы его применяем 
//для того что создать новый объект куда копируем 
//все данные из другого объекта


person2.age = 26;
person2.name = 'milana';

console.log(person2);
console.log(person);