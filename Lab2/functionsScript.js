// let localVar = 90;
// // console.log(printVariables(1, 2, 3));

// function printVariables(value1, value2, value3 = 20) {
//   console.log(localVar);
//   localVar = 3;
//   var testingVar = 5;
//   console.log(arguments);
//   console.log(`localVar = ${localVar} testingVar = ${testingVar}`);
//   return [value1, value2, value3];
// }
// console.log(printVariables(4, 5, 6));
// console.log(printVariables(3, 5));
// console.log(printVariables(3, 5, 7, 9, 11));
// // console.log(localVar, testingVar);
// console.log(localVar);
// console.log(printVariables(4, 5, 6));
// function promptTest() {
//   let name = prompt("Enter your name", "");
//   if (name == "" || name == null || !isNaN(name)) {
//     promptTest();
//   } else {
//     return console.log("name  " + name);
//   }
// }
// promptTest();

function checkNumber(number) {
  if (number == "" || number == null || isNaN(number)) {
    return Number(checkNumber(prompt("Enter the number Correct")));
  }
  return Number(number);
}

// let resalt = 0;
// for (let i = 1; i <= 2; i++) {
//   let number = prompt(`Enter the Value for number: ${i}`);
//   resalt += checkNumber(number);
// }
// alert(`resalt = ${resalt}`);



let resalt = 0;
let numberOfValues = checkNumber(
  prompt("Enter the number Of Values for Sumaition Values")
);
for (let i = 1; i <= numberOfValues; i++) {
  let number = prompt(`Enter the Value for number: ${i}`);
  resalt += checkNumber(number);
}
alert(`resalt = ${resalt}`);
