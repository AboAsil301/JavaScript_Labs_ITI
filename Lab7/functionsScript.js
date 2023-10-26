const createRow = function (student) {
  let trObject = document.createElement("tr"); //<tr></tr>
  let tdObject = null,
    deletButton;
  for (let property in student) {
    tdObject = document.createElement("td"); //<td></td>
    tdObject.innerText = student[property];
    trObject.append(tdObject);
  }

  tdObject = document.createElement("td");
  deletButton = document.createElement("button"); //<button></button>
  deletButton.innerText = "DELETE";
  deletButton.onclick = function () {
    this.parentElement.parentElement.remove();
    // Remove the student from the array
    studentArray.splice(studentArray.indexOf(student), 1);
  };
  tdObject.append(deletButton);
  trObject.append(tdObject);
  return trObject;
};

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Function to validate student name (should not be empty and not repeated)
function isValidName(name, studentArray) {
  const trimmedName = name.trim();
  if (trimmedName === "") {
    return false;
  }
  const foundStudent = studentArray.find(
    (student) => student.name.toLowerCase() === trimmedName.toLowerCase()
  );
  return !foundStudent;
}

// Function to validate student grade (should be a number between 0 and 100)
function isValidGrade(grade) {
  const numGrade = parseFloat(grade);
  return !isNaN(numGrade) && numGrade >= 0 && numGrade <= 100;
}

// Function to clear input fields and error messages
function clearInputFields(studentNameTextBox, studentGradeTextBox) {
  studentNameTextBox.value = "";
  studentGradeTextBox.value = "";
  studentNameTextBox.classList.remove("textBoxError");
  studentGradeTextBox.classList.remove("textBoxError");
  document.querySelectorAll(".error").forEach((error) => {
    error.classList.remove("showError");
  });
}

// Function to add a new student to the table
function addStudentToTable(student, studentTable) {
  const trObject = createRow(student);
  studentTable.append(trObject);
}

// Function to filter and update the table based on the selected filter option
function updateTable(filterOption) {
  const filteredStudents = studentArray.filter((student) => {
    if (filterOption === "all") {
      return true;
    } else if (filterOption === "success") {
      return student.grade >= 60;
    } else if (filterOption === "fail") {
      return student.grade < 60;
    }
  });

  // Clear the table and re-populate it with the filtered students
  studentTable.innerHTML = "";
  filteredStudents.forEach((student) => {
    addStudentToTable(student);
  });
}

// Function to sort the table based on the selected sort option
function sortTable(sortOption) {
  if (sortOption === "name") {
    studentArray.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === "grade") {
    studentArray.sort((a, b) => a.grade - b.grade);
  }

  // Clear the table and re-populate it with the sorted students
  studentTable.innerHTML = "";
  studentArray.forEach((student) => {
    addStudentToTable(student);
  });
}

//************************************************************************************ */
// const fallingEgg = function (imageObjectEgg, imageObjectBacket) {

//   const maxLeft = window.innerWidth - imageObjectEgg.width;
//   const eggRandomLeft = Math.floor(Math.random() * maxLeft) + 1;
//   let eggTop = -imageObjectEgg.height * 2;
//   imageObjectEgg.style.left = eggRandomLeft + "px";

//   let id = setInterval(() => {
//     eggTop += 10;
//     imageObjectEgg.style.top = eggTop + "px";

//     if (eggTop >= window.innerHeight - imageObjectEgg.height) {
//       const basketLeft = parseFloat(getComputedStyle(imageObjectBacket).left);
//       const basketWidth = parseFloat(getComputedStyle(imageObjectBacket).width);

//       if (
//         eggRandomLeft >= basketLeft &&
//         eggRandomLeft <= basketLeft + basketWidth
//       ) {
//         console.log("Egg is in the basket");
//         imageObjectEgg.remove(); // Remove the egg
//       } else {
//         imageObjectEgg.src = "images/Uovo_sorridente.png"; // Change the egg image to a broken egg
//       }
//       clearInterval(id);
//     }
//   }, 50);
// };
