const objectA = {
    a: 10,
    b: true,
};

const copyA = objectA;

copyA.c = 'abc';

console.log(objectA);