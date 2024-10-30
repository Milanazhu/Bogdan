let array = [1,2,3,4,15,19]

function sumElem(accumulator, currentValue) {
    let sum = accumulator + currentValue
    return sum
}
let result = array.reduce(sumElem, {} )
console.log(result);