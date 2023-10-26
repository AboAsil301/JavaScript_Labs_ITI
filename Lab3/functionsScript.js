const pascalCase = function (fullName) {
  let words = [];
  words = fullName.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join(" ");
};

// const longestWord = function (sentence) {
//   let words = [];
//   words = sentence.split(" ");
//   let indexOfLongestLength = 0;
//   let LongestLength = 0;
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > LongestLength) {
//       indexOfLongestLength = i;
//       LongestLength = words[i].length;
//     }
//   }
//   return words[indexOfLongestLength];
// };

const longestWord = function (sentence) {
  const words = sentence.split(" ");
  let longestWord = "";
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

// const alphabeticalOrder = function (sentence) {
//   let letters = [];
//   for (let i = 0; i < sentence.length; i++) {
//     letters[i] = sentence.charAt(i);
//   }
//   letters.sort();
//   return letters.join("");
// };

const alphabeticalOrder = function (sentence) {
  const charArray = sentence.split("");
  return charArray.sort().join("");
};

// const getTheMonthName = function () {
//   const particular_Date = new Date();
//   const monthNames = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   return monthNames[particular_Date.getMonth()];
// };

const getTheMonthName = function () {
  const particular_Date = new Date();
  return particular_Date.toString().slice(4, 7);
};

const randomArray = function () {
  const numbersArray = [];
  const maxNumber = 10;

  while (numbersArray.length < 5) {
    const randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    if (!numbersArray.includes(randomNumber)) {
      numbersArray.push(randomNumber);
    }
  }
  return numbersArray;
};

const filterArray = function (array) {
  let result = [];
  for (let arrayItem of array) {
    if (arrayItem > 5) result.push(arrayItem);
  }
  return result;
};

const maxAndMinOfArray = function (array) {
  array.sort((a, b) => b - a);
  return `Max Of Array: ${array[0]} , Min Of Array: ${array[array.length - 1]}`;
};

const removeRepeted = function (array) {
  let uniqueArray = [];
  for (let arrayItem of array) {
    if (!uniqueArray.includes(arrayItem)) {
      uniqueArray.push(arrayItem);
    }
  }
  return uniqueArray;
};
