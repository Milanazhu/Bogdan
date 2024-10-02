const person = {
    name: 'Milanocka',
    age: 22,
}

const person2 = {...person}

person2.name = 'Alisa';

console.log(person2.name);
console.log(person.name);