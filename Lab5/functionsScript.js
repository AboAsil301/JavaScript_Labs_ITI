// 2) Display the date with time on the document title (document.title)
// which changes every second to show time with date.
//Note: Use the toLocaleString() method of the Date Object:
const updateTitleWithTime = function () {
  const currentDate = new Date();
  document.title = currentDate.toLocaleString();
  setInterval(updateTitleWithTime, 1000);
};

// *****************************************************************************

// 3) Write a function startSliding(ImgObject) which takes the image Object to be slide on the page and starts changing the image every second.
// Don't make the timer ID global; return it from the sliding function.

function startSliding(imageObject) {
  // console.log("start sliding for image name", imageObject.src);
  if (imageObject.inTervalId == undefined) {
    let counter = 1;
    imageObject.inTervalId = setInterval(() => {
      // console.log("start sliding for image name", imageObject.src);
      counter++;
      if (counter == 9) {
        counter = 1;
      }
      imageObject.src = `images/${counter}.jpg`;
    }, 1000);
  }
}

//  Then write another function that stops image sliding stopSliding(timerID),
// which stops sliding the image by taking the timerID as input.

function stopSliding(imageObject) {
  imageObject.inTervalId == undefined;
  clearInterval(imageObject.inTervalId);
}

//===> Now call this function on the console to control image sliding on the page for any image.

//const timerId_1 = startSliding(document.images[0]);
//stopSliding(timerId_1)
//const timerId_2 = startSliding(document.images[1]);
//stopSliding(timerId_2)
