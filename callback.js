function printMyName (a,b) {
    function myFn () {
        let c = a + b
        a = a + 1
        b = b + 1
        return c
    };
    myFn(3,5)
    console.log(myFn);
};

const tera = printMyName(3,5);
console.log(printMyName);