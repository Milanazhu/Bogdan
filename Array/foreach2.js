const myArray = [{ name: 'width', value: 10 }, 
        { name: 'height', value: 20 },];

const numberRet = myArray.reduce((accumulator, currentValue) => {
    return {
        ...accumulator,
        [currentValue.name]: currentValue.value,
    }
}, {});

    console.log(numberRet);

// function objFromArr(myArray) {
//         const obj = {}
//         for (let val of myArray) {
//           obj[val['name']] = val['value']
//         }
//       }




// function objFromArr(myArray) {
//     return myArray.reduce((act, item) => {
//     act[item.name] = item.value;
//     return act
//   }, {});
//     }
 