// function doHomework(subject, callback) {
//     console.log(`Starting my ${subject} homework.`);
//     callback();
//   }
//   function alertFinished(){
//     console.log('Finished my homework');
//   }
//   doHomework('math', alertFinished);



// function first(){
//     setTimeout(() => {
//     console.log(1);
//   }, 500);
// }
//   function second(){
//     console.log(2);
//   };
  
//   first();
//   second();

function first(num, callback){
    console.log(num + 1);
    callback();
}
function second(){
    num = 5 - 1;
}

first(1, second);
const total = first(num, second);
console.log(total);