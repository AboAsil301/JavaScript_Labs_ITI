function startSliding(imageObject = document.images[0]) {
  if (imageObject.intervalId == undefined) {
    imageObject.intervalId = setInterval(() => {
      if (
        imageObject.currentImageIndex == 8 ||
        imageObject.currentImageIndex == undefined
      ) {
        imageObject.currentImageIndex = 0;
      }
      imageObject.currentImageIndex++;
      changeImage();
    }, 1000);
  }
}

function stopSliding(imageObject = document.images[0]) {
  clearInterval(imageObject.intervalId);
  imageObject.inTervalId = undefined;
}

function nextSliding(imageObject = document.images[0]) {
  if (
    imageObject.currentImageIndex == 8 ||
    imageObject.currentImageIndex == undefined
  ) {
    imageObject.currentImageIndex = 0;
  }
  imageObject.currentImageIndex++;
  changeImage();
}

function previousSliding(imageObject = document.images[0]) {
  if (
    imageObject.currentImageIndex == 1 ||
    imageObject.currentImageIndex == undefined
  ) {
    imageObject.currentImageIndex = 9;
  }
  imageObject.currentImageIndex--;
  changeImage();
}

function changeImage(imageObject = document.images[0]) {
  imageObject.src = `images/${imageObject.currentImageIndex}.jpg`;
}

// Another solution for this problem
function handleSlideshow(action, imageObject = document.images[0]) {
  if (imageObject.currentImageIndex == undefined) {
    imageObject.currentImageIndex = 1;
  }
  switch (action) {
    case "start":
      if (imageObject.intervalId === undefined ) {
        imageObject.intervalId = setInterval(() => {
          if ( imageObject.currentImageIndex == 8) {
            imageObject.currentImageIndex = 0;
          }
          imageObject.currentImageIndex++;
          changeImage(imageObject);
        }, 1000);
      }
      break;

    case "stop":
      clearInterval(imageObject.intervalId);
      imageObject.intervalId = undefined;
      break;

    case "next":
      if (imageObject.currentImageIndex == 8) {
        imageObject.currentImageIndex = 0;
      }
      imageObject.currentImageIndex++;
      changeImage(imageObject);
      break;

    case "previous":
      if (imageObject.currentImageIndex == 1) {
        imageObject.currentImageIndex = 9;
      }
      imageObject.currentImageIndex--;
      changeImage(imageObject);
      break;

    default:
      break;
  }
}

function changeImage(imageObject = document.images[0]) {
  imageObject.src = `images/${imageObject.currentImageIndex}.jpg`;
}

/*************************************************************************************** */

 function copyDiv(clickedDiv, appendParant = document.body) {
   // Create a new div element
   const newDiv = document.createElement("div");
   newDiv.className = clickedDiv.className;
   clickedDiv.style.cursor = "default";
   newDiv.onclick = function () {
     copyDiv(this, appendParant);
   };

   // Disable the original div (remove the onclick handler)
   clickedDiv.onclick = null;

   // Append the new div to the end of the appendParant , document body by default
   appendParant.appendChild(newDiv);
 }

/*************************************************************************************** */

