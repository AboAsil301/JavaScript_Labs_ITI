// 4- Using location object with simple HTML Form Page
// With get method, after clicking submit button show the Name
// and Age on the second page console.

// Get the URL parameters using the location object
const params = new URLSearchParams(location.search);
// Get the 'name' and 'age' parameters from the URL
const name = params.get("name");
const age = params.get("age");
// Display the data in the console
console.log("Name:", name);
console.log("Age:", age);

// form.onsubmit(
// // Get the URL parameters using the location object
// const formPageURL = new URLSearchParams(location.href);
// // Get the 'name' and 'age' parameters from the URL
// const userName = formPageURL.toString().split("=")[1].split("+")[0];
// const userAge = formPageURL.toString().split("=")[2];
// // Display the data in the console
// console.log(`welcome ${userName} you are ${userAge} years old`);

// );
// // Get the URL parameters using the location object
// const formPageURL = new URLSearchParams(location.href);
// // Get the 'name' and 'age' parameters from the URL
// const userName = formPageURL.toString().split("=")[1].split("+")[0];
// const userAge = formPageURL.toString().split("=")[2];
// // Display the data in the console
// console.log(`welcome ${userName} you are ${userAge} years old`);
