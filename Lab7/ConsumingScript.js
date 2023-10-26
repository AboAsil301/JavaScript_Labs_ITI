window.addEventListener("load", function () {
  // Get DOM elements
  const studentDepartmentRadio =
    document.getElementsByName("studentDepartment");
  const studentNameTextBox = document.getElementById("studentName");
  const studentGradeTextBox = document.getElementById("studentGrade");
  const addButton = document.querySelector("#addButton");
  const studentTable = document.getElementById("studentsData");
  const filterDropDownList = document.getElementById("filter");
  const sortDropDownList = document.getElementById("sort");

  // Initialize studentArray to store student data
  studentArray = [];

  // // Event listener for the "Add" button
  // addButton.onclick = function () {
  //   if (studentNameTextBox.value !== "" && studentGradeTextBox.value !== "") {
  //     studentArray.push({
  //       name: capitalizeFirstLetter(studentNameTextBox.value),
  //       grade: studentGradeTextBox.value,
  //     });
  //     let trObject = createRow({
  //       name: capitalizeFirstLetter(studentNameTextBox.value),
  //       grade: studentGradeTextBox.value,
  //     });
  //     studentTable.append(trObject);
  //     console.log(
  //       `studentName : ${capitalizeFirstLetter(
  //         studentNameTextBox.value
  //       )}\nstudentGrade : ${studentGradeTextBox.value}`
  //     );
  //   } else {
  //     console.log("Enter student name and grade");
  //   }
  // };

  addButton.addEventListener("click", () => {
    const name = capitalizeFirstLetter(studentNameTextBox.value);
    const grade = studentGradeTextBox.value;

    // Validate student name and grade
    if (isValidName(name, studentArray) && isValidGrade(grade)) {
      const student = { name, grade: parseFloat(grade) };
      studentArray.push(student);
      addStudentToTable(student, studentTable);
      clearInputFields(studentNameTextBox, studentGradeTextBox);
      console.log(`studentName: ${name}\nstudentGrade: ${grade}`);
    } else {
      if (!isValidName(name, studentArray)) {
        studentNameTextBox.classList.add("textBoxError");
        document.querySelector("#nameError").classList.add("showError");
      }
      if (!isValidGrade(grade)) {
        studentGradeTextBox.classList.add("textBoxError");
        document.querySelector("#gradeError").classList.add("showError");
      }
    }
  });

  studentNameTextBox.onblur = function () {
    if (studentNameTextBox.value === "" || !isNaN(studentNameTextBox.value)) {
      this.classList.add("textBoxError");
      this.nextSibling.nextSibling.classList.add("showError");
    } else {
      this.classList.remove("textBoxError");
      this.nextSibling.nextSibling.classList.remove("showError");
    }
  };

  studentGradeTextBox.onblur = function () {
    if (
      studentGradeTextBox.value === "" ||
      isNaN(studentGradeTextBox.value) ||
      studentGradeTextBox.value < 0 ||
      studentGradeTextBox.value > 100
    ) {
      this.classList.add("textBoxError");
      this.nextSibling.nextSibling.classList.add("showError");
    } else {
      this.classList.remove("textBoxError");
      this.nextSibling.nextSibling.classList.remove("showError");
    }
  };
  studentNameTextBox.onkeydown = function (event) {
    const key = event.key.toLowerCase();
    const isLetter = (key >= "a" && key <= "z") || key === " ";
    if (!isLetter) {
      event.preventDefault();
      this.classList.add("textBoxError");
      this.nextSibling.nextSibling.classList.add("showError");
    } else {
      this.classList.remove("textBoxError");
      this.nextSibling.nextSibling.classList.remove("showError");
    }
  };

  studentGradeTextBox.onkeydown = function (event) {
    const input = event.key;
    if (
      (input >= 0 && input <= 9) ||
      (event.key === "Backspace" && this.value !== "")
    ) {
      this.classList.remove("textBoxError");
      this.nextSibling.nextSibling.classList.remove("showError");
    } else {
      event.preventDefault();
      this.classList.add("textBoxError");
      this.nextSibling.nextSibling.classList.add("showError");
    }
  };

  // Event listener for the filter dropdown select element
  filterDropDownList.addEventListener("change", () => {
    const filterOption = filterDropDownList.value.toLowerCase();
    //updateTable(filterOption);
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
      const trObject = createRow(student);
      studentTable.append(trObject);
    });
  });

  // Event listener for the sort dropdown select element
  sortDropDownList.addEventListener("change", () => {
    const sortOption = sortDropDownList.value.toLowerCase();
    //  sortTable(sortOption);
    if (sortOption === "name") {
      studentArray.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "grade") {
      studentArray.sort((a, b) => a.grade - b.grade);
    }
    // Clear the table and re-populate it with the sorted students
    studentTable.innerHTML = "";
    studentArray.forEach((student) => {
      const trObject = createRow(student);
      studentTable.append(trObject);
    });
  });

  // /****************************************************************************************/

  // const imageObjectEgg = document.querySelector(".egg");
  // const imageObjectBacket = document.querySelector(".basket");

  // document.addEventListener("keydown", function (event) {
  //   const basketLeft = parseFloat(getComputedStyle(imageObjectBacket).left);
  //   const basketWidth = parseFloat(getComputedStyle(imageObjectBacket).width);
  //   const maxLeft = window.innerWidth - basketWidth;

  //   if (event.key === "ArrowLeft") {
  //     // Move the basket to the left
  //     const newLeft = basketLeft - 20;
  //     imageObjectBacket.style.left = Math.max(0, newLeft) + "px";
  //   } else if (event.key === "ArrowRight") {
  //     // Move the basket to the right
  //     const newLeft = basketLeft + 20;
  //     imageObjectBacket.style.left = Math.min(maxLeft, newLeft) + "px";
  //   }
  // });

  // fallingEgg(imageObjectEgg, imageObjectBacket);
});
