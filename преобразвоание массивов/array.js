const number = [{name: 'width', value:10},
    {name:'height', value:20}
];
const sum = number.reduce((a, b) => (a[b] = b,a), {})

console.log(sum);