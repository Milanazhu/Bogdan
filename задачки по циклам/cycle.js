const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

const array = Object.keys(myObject);
console.log(array);
const array1 = array.forEach(value => {
    console.log(value);
})
const userName = Object.values(myObject).forEach(vaariant => {
    console.log(vaariant);
}
)