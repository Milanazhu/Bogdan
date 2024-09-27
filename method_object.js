const myCity = {
    city: 'New York',
    cityGreeting: function() {
        console.log('Mila');
    }
}

myCity.cityGreeting.last = 'Milan'

console.log(myCity.cityGreeting);