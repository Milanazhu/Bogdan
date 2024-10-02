const personOne = {
    name: 'Bobi',
    age: 21,
}

function increasePersonAge (person) {
    person.age += 1
    return person
}

increasePersonAge(personOne);

console.log(personOne);