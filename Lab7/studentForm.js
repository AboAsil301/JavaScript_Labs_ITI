window.addEventListener("load", function () {

// Get DOM elements
const studentDepartmentRadio = document.getElementsByName("studentDepartment");
const studentNameTextBox = document.getElementById("studentName");
const studentGradeTextBox = document.getElementById("studentGrade");
const addButton = document.querySelector("#addButton");
const studentTable = document.getElementById("studentsData");
const filterDropDownList = document.getElementById("filter");
const sortDropDownList = document.getElementById("sort");

// Initialize studentArray to store student data
let studentArray = [];

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to validate student name (should not be empty and not repeated)
function isValidName(name) {
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
function clearInputFields() {
  studentNameTextBox.value = "";
  studentGradeTextBox.value = "";
  studentNameTextBox.classList.remove("textBoxError");
  studentGradeTextBox.classList.remove("textBoxError");
  document.querySelectorAll(".error").forEach((error) => {
    error.classList.remove("showError");
  });
}

// Function to add a new student to the table
function addStudentToTable(student) {
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

// Event listener for the "Add" button
addButton.addEventListener("click", () => {
  const name = capitalizeFirstLetter(studentNameTextBox.value);
  const grade = studentGradeTextBox.value;

  // Validate student name and grade
  if (isValidName(name) && isValidGrade(grade)) {
    const student = { name, grade: parseFloat(grade) };
    studentArray.push(student);
    addStudentToTable(student);
    clearInputFields();
    console.log(`studentName: ${name}\nstudentGrade: ${grade}`);
  } else {
    if (!isValidName(name)) {
      studentNameTextBox.classList.add("textBoxError");
      document.querySelector("#nameError").classList.add("showError");
    }
    if (!isValidGrade(grade)) {
      studentGradeTextBox.classList.add("textBoxError");
      document.querySelector("#gradeError").classList.add("showError");
    }
  }
});

// Event listener for the filter dropdown select element
filterDropDownList.addEventListener("change", () => {
  const filterOption = filterDropDownList.value.toLowerCase();
  updateTable(filterOption);
});

// Event listener for the sort dropdown select element
sortDropDownList.addEventListener("change", () => {
  const sortOption = sortDropDownList.value.toLowerCase();
  sortTable(sortOption);
});

// Event listeners for input validation
studentNameTextBox.addEventListener("blur", () => {
  const name = capitalizeFirstLetter(studentNameTextBox.value);
  const isValid = isValidName(name);
  studentNameTextBox.classList.toggle("textBoxError", !isValid);
  document.querySelector("#nameError").classList.toggle("showError", !isValid);
});

studentGradeTextBox.addEventListener("blur", () => {
  const grade = studentGradeTextBox.value;
  const isValid = isValidGrade(grade);
  studentGradeTextBox.classList.toggle("textBoxError", !isValid);
  document.querySelector("#gradeError").classList.toggle("showError", !isValid);
});

studentNameTextBox.addEventListener("input", () => {
  const name = capitalizeFirstLetter(studentNameTextBox.value);
  const isValid = isValidName(name);
  studentNameTextBox.classList.toggle("textBoxError", !isValid);
  document.querySelector("#nameError").classList.toggle("showError", !isValid);
});

studentGradeTextBox.addEventListener("input", () => {
  const grade = studentGradeTextBox.value;
  const isValid = isValidGrade(grade);
  studentGradeTextBox.classList.toggle("textBoxError", !isValid);
  document.querySelector("#gradeError").classList.toggle("showError", !isValid);
});


});