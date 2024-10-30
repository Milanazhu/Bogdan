const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data');
        const backendData = {
            name: 'Milana',
            age: 26,
        };
        resolve('Success')
    }, 2000);
});

p.then(data => {
    console.log('Promise resolved', data);
});