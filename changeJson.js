const person = {
    name: 'Milnana',
    age: 23,
    city: {
        country: 'USA',
        village: 'Oid',
    }
}

const person2 = JSON.parse(JSON.stringify(person));

person2.city.village = 'Califotnia';

console.log(person2.city.village);
console.log(person.city.village);