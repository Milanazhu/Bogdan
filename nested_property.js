const myCity = {
    city: 'New york',
    info: {
        isPopular: true,
        country: 'Usa',
    }
}

const name = 'popular';
myCity.info[name] = 1000;

console.log(myCity);