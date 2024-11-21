//Functions
//A block of code ==>Performs a Task
//A Function Declaration
// function square(number){
//     return number**2;
//     //have access to "this " keyword
// }
// //A function Call(invoking a function ) 
// a=square(5);
// console.log(a);

// //A function Expression
// const name=function(params){
//     //statements
// }
// //An Arrow Function
// const name2=(params) => {
//     //statements
// }
const sayHi=(name)=>{
    console.log(`Hi ,${name},Anata wa kaizoku-ō ni narimasu`);
}
sayHi("Koustabh");
//Returns Undefined
// const multiply=(a,b)=>{
//     return a*b;
// }
const multiply=(a,b)=> a*b;
let m=multiply(5,2);
console.log(m)