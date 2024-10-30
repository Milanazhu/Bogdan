const i = {
    x: 10,
    y: 20,
    z: 30,
};

Object.keys(i).forEach(function (key) {
    console.log(key, i[key]);
});
