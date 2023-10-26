//console.log(number1); //undefined
// console.log(number1); //Uncaught ReferenceError: number1 is not defined at External.js:2:13
// console.log(number2); //External.js:2  Uncaught ReferenceError: Cannot access 'number2' before initialization at External.js:2:13
// console.log(number3); //Uncaught ReferenceError: Cannot access 'number3' before initialization at External.js:3:13
// var number1 = 3 ;
number1 = 3;
let number2 = 2.9;
const number3 = 0xff;
let firstName = "Ahmed";
let middleName = "Reda";
let lastName = `Abd El-baset 
Ismail`;
const numbers = new Array(10, 20, 30);
let flag = true;
console.log("This is the External JavaScript file");

// This is the External JavaScript file
// number1 =10
// 10
// number2=30
// 30
// number3=40
// VM2803:1 Uncaught TypeError: Assignment to constant variable.
//     at <anonymous>:1:8
// (anonymous) @ VM2803:1
// firstName[3] = 'a'
// 'a'
// firstName[3] = 'A';
// 'A';
// console.log(firstName)
// VM3989:1 Ahmed
// undefined
// typeof (number1)
// 'number'
// typeof(number2)
// 'number'
// typeof(number3)
// 'number'



/*****/
// "π is the ratio of a circle's circumference to
// its diameter"

// "one\
// long\
// line";

if (hour < 18) {
    greeting = "Good day";
   console.log(greeting = "Good evening") ;
 } else {
    greeting = "Good evening";
 }