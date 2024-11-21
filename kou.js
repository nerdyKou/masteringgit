// //string
// //  const VariableName="Kaizoku Ou Ni Orewa Naru!";
// // const singleQuotes='Sashiburidana Mugiwara !'
// // const doubleQuotes="Mugiwara!"
// // const backticks=`Sashiburidana,${doubleQuotes}, said by Croco San`;
// const backticks=`${69+69}`
// console.log(typeof backticks);

// //numbers
// const string ='Hello';
// const secondNumber=15;
// const result=string/secondNumber;
// console.log(typeof result)

// //Booleans
// const koustabh= true;
// if (koustabh){
//     console.log("You are fking cool");

// } else{
//     console.log ("Ohh.....Hi");
// }

// //Null
// const age=null;
// console.log( typeof age)

// //undefined
// let x;
// console.log(x)

// //object
// const person={
//     name:'Koustabh',
//     age:21,
//     Job:'Software Engineer'
// }
// console.log(person.Job);

// //Array
// const arr=[1,2,3,4];
// console.log(arr);
// const date=new Date();
// console.log(typeof date);

// //Statically Typed
// /*Dynamically Typed:JS is basically Dynamically Typed 
// because we can enter any data types in variable */
// const a =10;
// const b=10;
// console.log(a!=b)
// //strict equality 
// //compares values & data types returns true if they are same
// console.log(a===b);
// //strict inequality 
// console.log(a!==b);
// //difference between strict & loose equality
// console.log(5==="5")
// console.log(5!=="5")
// console.log(5!="5")
// console.log(5=="5") // this is wrong 
// console.log(5=="5") // this is wrong 
// //The Evil twins (== !==)
// //Logical Operators
// //AND && ==>ALL OPERANDS ARE TRUE ==>TRUE
// console.log(true && false && true)
// console.log(true && true)
// //OR // ==>At least 1 operand is true 
// console.log(true || false )
// //NOT
// console.log(!true)
const age=17;
if(age>18){
    console.log("U may enter");
}
else if(age===18){
    console.log("U are only 18 dude");
}
else{
    console.log("Grow Up dude ");
}
//while loop
let i=1;
while(i<100){
    console.log(i);
    i++;
}
//for loop
for(let i=0;i<=100;i++){
    console.log(i);
}