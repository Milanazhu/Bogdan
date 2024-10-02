// способ изменния объекта используя обхект json
const person = {
    name: 'Mrgarita',
    age: 32,
    city: {
        country: 'USA',
        city: 'Brooklyn',
    }
}

const person2 = JSON.parse(JSON.stringify(person));

person2.name = 'Alina';
person2.status = 'New';
person2.city.country = 'Russia',


console.log(person2);
console.log(person);