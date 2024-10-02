const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge (person) {
    const updatePerson = Object.assign({}, person)
    updatePerson.age += 1
    return updatePerson
}

const updatePerson = increasePersonAge(personOne)
console.log(personOne.age);
console.log(updatePerson.age);