const myCity = {
    city: 'New york',
    
}
const countryName = 'country'

myCity.city = 'Las Vegas';// обратились через точку и поменяли значение
myCity.country = 'USA';
myCity.name = 'Milana';
delete myCity.country;
myCity ['popular'] = 'Yes';
//myCity [countryName] = 'usa';

console.log(myCity);


