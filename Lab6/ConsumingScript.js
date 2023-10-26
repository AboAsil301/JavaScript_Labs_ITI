window.addEventListener("load", function () {
  // 1- SlideShow
  // Next button: will navigate to next image
  // Previous button: will navigate to previous
  // image
  // Slideshow: start sliding images
  // Stop: will stop slideshow action
  // Note : what about timerId value !!

  // code for Slideshow button click
  let slideshowButton = document.getElementById("slideshow");
  slideshowButton.onclick = function () {
    //startSliding();
    handleSlideshow("start");
  };

  // code for stop slideshow button click
  let stopSlideshowButton = document.getElementById("stop");
  stopSlideshowButton.onclick = function () {
    //stopSliding();
    handleSlideshow("stop");
  };

  // code for Next button click
  let nextButton = document.getElementById("next");
  nextButton.onclick = function () {
    // nextSliding();
    handleSlideshow("next");
  };
  // code for Previous button click
  let previousButton = document.getElementById("previous");
  previousButton.onclick = function () {
    //previousSliding();
    handleSlideshow("previous");
  };

  /* ********************************************************************************** */
  // page containing only three div elements with box appearance ,
  //  when user click at any div a copy from this div will be added to the end
  // (the fired div wont be clickable any more , and the new div will beclickable). And so on

  let clickedDiv = document.querySelectorAll(".box");
  appendParant = document.querySelector("#section2");
  for (const div of clickedDiv) {
    div.onclick = function () {
      copyDiv(this, appendParant);
    };
  }

  /****************************************************************************************/
  // form validation
  // 1- name should be string
  // 2- grade should be number from 0 to 100
  // Handle error messages
  // Add is a button tag element that , by click the button the correct
  // name and grade will be displayed on console
  let studentNameTextBox = document.getElementById("studentName");
  let studentGradeTextBox = document.getElementById("studentGrade");
  let addButton = document.querySelector("#addButton");

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
      isNaN(studentNameTextBox.value) ||
      Number(studentGradeTextBox.value) < 0 ||
      Number(studentGradeTextBox.value) > 100
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
  addButton.onclick = function () {
    if (studentNameTextBox.value !== "" && studentGradeTextBox.value !== "") {
      console.log(
        `studentName : ${studentNameTextBox.value}\nstudentGrade : ${studentGradeTextBox.value}`
      );
    } else {
      console.log("Enter student name and grade");
    }
  };
});
