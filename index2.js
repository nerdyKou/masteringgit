// const mycheckBox=document.getElementById("mycheckBox");
// const visaBox=document.getElementById("visaBox");
// const rupayBox=document.getElementById("rupayBox");
// const paypalBox=document.getElementById("paypalBox");
// const submitBox=document.getElementById("submitBox")
// const subResult=document.getElementById("subResult");
// const paymentResult=document.getElementById("paymentResult");
// submitBox.onclick=function(){
//     if(mycheckBox.checked){
//         subResult.textContent="You are subscribed";
//     }
//     else{
//         subResult.textContent="You are not subscribed";

//     }
//     if(visaBox.checked){
//         paymentResult.textContent="You are paying with Visa";
//     }
//     else if(paypalBox.checked) {
//         paymentResult.textContent="You are paying with Paypal";
//     }
//     else if(rupayBox.checked) {
//         paymentResult.textContent="You are paying with Rupay";

//     }
//     else{
//         paymentResult.textContent="You must select a payment type";

//     }
    
// }

// let age=21;
// let message=age>=18 ?"You are an adult":"You are noob";
// console.log(message);
// let username="Koustabh Dawn";
// // let result=username.startsWith(" ")?"Your username can't begin with ' '":console.log(username);
// let result=username.includes(" ");
// if (result){
//     console.log("Your username can't include with ' '");
// }
// else{
//     console.log(username);
// }

// console.log(username.indexOf("t"));
// console.log(username.charAt(2));
// console.log(username.repeat(5));
// let phoneNumber="629-023-336-5";
// phoneNumber=phoneNumber.replaceAll("-","");
// phoneNumber=phoneNumber.padStart(20,"0");
// console.log(phoneNumber);
// const fullName="Koustabh Dawn "
// // let firstName=fullName.slice(0,8);
// // let LstName=fullName.slice(9,14);
// // let lastChar=fullName.slice(-3);
// let firstName=fullName.slice(0,fullName.indexOf(" "));
// let LstName=fullName.slice(fullName.indexOf(" "));
// console.log(firstName)
//  console.log(LstName)
// // console.log(lastChar)
let username=window.prompt("Enter the username hehe")
username=username.trim();
let letter=username.charAt(0);
letter=letter.toUpperCase();
let extrachars=username.slice(1);
extrachars=extrachars.toLowerCase();
username=letter+extrachars;
console.log(username);
//METHOD CHAINING:It's like combo in Video Games Booom Boom Boom
username=username.trim().charAt(0).toUpperCase() +username.trim().slice(1).toLowerCase();
console.log(username);