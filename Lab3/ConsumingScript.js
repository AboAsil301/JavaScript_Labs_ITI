// let s = new String("   hello, world");
// console.log(s.charAt(4)); // ترجع الحرف من النص  في المرجع المحدد
// console.log(s.charAt(s.length - 1)); //ترجع الحرف الاخير من النص المحدد ( طول النص -1 ) لان المرجع يبدا ب صفر
// console.log(s.substring(0, 1)); // لاسترجاع جزاء من النص بتحديد البداية والنهاية مع العلم ان النهاية تكون زيادة 1
// console.log(s.slice(1, 4)); // لاسترجاع جزاء من النص بتحديد البداية والنهاية مع العلم ان النهاية تكون زيادة 1
// console.log(s.slice(-3)); //لاسترجاع اخر ثلاث حروف
// // substring لا تدعم البحث من النهاية باستخدم سالب العدر المراد ارجاعه كما في slice
// console.log(s.indexOf("l")); // لتحديد موقع اول ظهور للحرف المحدد داخل النص يرجع رقم المرجع اذا وجد واذا لم يعثر عليه يرجع -1
// console.log(s.lastIndexOf("l")); //لتحديد موقع اخر ظهور للحرف المحدد داخل النص يرجع رقم المرجع اذا وجد واذا لم يعثر عليه يرجع -1
// console.log(s.indexOf("l", 3)); //البحث عن موقع حرف محدد بداية من مكان محدد مع العلم ان المكان المحدد داخل البحث
// console.log(s.split(",")); //لتقسيم نص بناءا علي رمز او نص محدد
// console.log(s.replace("h", "H")); //استبدال نص بنص
// console.log(s.toUpperCase()); // لتحويل الي الحرف الكبيرة
// console.log(s.trim()); //لحذف المسافة البيضاء من بداية ونهاية النص

console.log(pascalCase("the quick brown fox"));
console.log(longestWord("Web Development Tutorial"));
console.log(alphabeticalOrder("javascript"));
console.log(getTheMonthName());
console.log(randomArray());

let numbers = [2, 1, 3, 2, 7, 2, 4, 5, 6, 1, 12, 3];

// console.log(numbers.sort((a, b) => {
//   if (a > b) return 1;
//   else if (a < b) return -1;
//   else return 0;
// }));

// console.log(
//   numbers.sort((a, b) => {
//     if (a > b) return -1;
//     else if (a < b) return 1;
//     else return 0;
//   })
// );

console.log(numbers.sort((a, b) => a - b));
console.log(numbers.sort((a, b) => b - a));

console.log(filterArray(numbers));

console.log(maxAndMinOfArray(numbers));

let numbers_2 = Array.from(numbers, (x) => x * 5);
console.log(`Here is numbers_2 Copy of numbers *5 : ${numbers_2}`);
console.log(removeRepeted(numbers));
