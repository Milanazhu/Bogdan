const myCity = {
    city: 'New york',
    
}
const countryName = 'country'

myCity.city = 'Las Vegas';// обратились через точку и поменяли значение
myCity.country = 'USA';
myCity.name = 'Milana';
delete myCity.country;
myCity ['popular'] = 'Yes';
myCity [countryName] = 'usa';// тут мы задаем новое свойство которое объявленно как const и имеет свои значения

console.log(myCity);


