const person = {
    name: 'Nona',
    age: 25
}

const person2 = Object.assign({}, person)
person2.age = 26;
person2.city = 'Moxcow';
person2.family = 'love';
person2.name = 'Mois';

console.log(person2);
console.log(person);
console.dir(23353);