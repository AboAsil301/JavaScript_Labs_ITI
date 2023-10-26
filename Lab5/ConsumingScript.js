// a) Find all images on the page by two ways
//   (document default collection and document methods):

// Using the document default collection:
const imagesDefaultCollection = document.images;
console.log(imagesDefaultCollection);

// Using the document methods:
const imagesUsingMethod = document.getElementsByTagName("img");
console.log(imagesUsingMethod);

// Now try to add a border to these images
// using the document default collection:
imagesDefaultCollection[0].style.border = "1px solid blue";

//using the document methods:
imagesUsingMethod[1].style.border = "1px solid blue";

// **************************************************************************

// b) Find all options for the City drop-down list:
const cityDropdownOptions = document.querySelectorAll("#city-dropdown option");
console.log(cityDropdownOptions);

// c) Find all rows (tds) for the second table on the page:
const secondTableRows = document.querySelectorAll("table:nth-of-type(2) tr");
console.log(secondTableRows);

// d) Find all elements that contain class name fontBlue and BGrey:
const elementsWithFontBlueAndBGrey =
  document.querySelectorAll(".fontBlue.BGrey");
console.log(elementsWithFontBlueAndBGrey);

// **************************************************************************

// 2) Display the date with time on the document title (document.title)
// which changes every second to show time with date.
//Note: Use the toLocaleString() method of the Date Object:

// ====> Look at the updateTitleWithTime function in the functions file

// Update the time every second
setInterval(updateTitleWithTime, 1000);

// **************************************************************************

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

// // Get the URL parameters using the location object
// const formPageURL = new URLSearchParams(location.href);
// // Get the 'name' and 'age' parameters from the URL
// const userName = formPageURL.toString().split("=")[1].split("+")[0];
// const userAge = formPageURL.toString().split("=")[2];
// // Display the data in the console
// console.log(`welcome ${userName} you are ${userAge} years old`);

// **************************************************************************

// 5- Now from the previous lab Car class assignment,. start create
// cars on window using document.createElement when user
// create Object from the class.

class Engine {
  color;
  static #count = 0;
  constructor(color) {
    if (this.constructor == Engine) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.color = color;
    Engine.#count++;
  }
  move() {
    console.log("Moving");
  }
  static get EngineCount() {
    return Engine.#count;
  }
}

// Create Car Class (inherits from Engine class)
// Class constructor will take ownerName (private),
// brandName and productionYear
class Car extends Engine {
  #ownerName;
  brandName;
  productionYear;
  #image;
  constructor(ownerName, brandName, productionYear, imageSrc) {
    super(brandName);
    this.#ownerName = ownerName;
    this.brandName = brandName;
    this.productionYear = productionYear;
    this.#image = document.createElement("img");
    this.#image.src = imageSrc;
    document.body.appendChild(this.#image);
  }

  // Function to create and display the car on the window
  setStyle(OjectStyle) {
    Object.keys(OjectStyle).forEach((key) => {
      this.#image.style[key] = OjectStyle[key];
    });
  }
  // Class methods:
  // a- setter and getter for ownerName
  set ownerName(value) {
    this.#ownerName = value;
  }
  get ownerName() {
    return this.#ownerName;
  }

  // b- move() which print car data with “moving” keyword from parant
  move() {
    console.log(
      `car data is ==> ownerName : ${this.ownerName} , brandName :${
        this.brandName
      } , productionYear : ${
        this.productionYear
      } parnt move() say: ${this.move()}`
    );
  }
}

// // Function to create and display the car on the window
// function createCarElement(car) {
//   const carElement = document.createElement("img");
//   carElement.src = car.image;
//   carElement.alt = car.brandName;
//   carElement.style.width = "200px";
//   carElement.style.height = "200px";
//   carElement.style.border = "1px solid white";
//   carElement.style.cursor = "pointer";
//   carElement.style.borderRadius = "15%";

//   //carElement.textContent = `Owner Name: ${car.ownerName}, Brand Name: ${car.brandName}, Production Year: ${car.productionYear}`;

//   document.body.appendChild(carElement);
// }

// Test the Car class and display cars on the window
const car1 = new Car("John Doe", "Toyota", 2020, "images/10.png");
//createCarElement(car1);
car1.setStyle();

const car2 = new Car(
  "Alice Smith",
  "Honda",
  2018,
  "images/11.png"
);
//createCarElement(car2);
car2.setStyle( { "width": "200px", "height": "200px", "borderRadius": "15%"} );
const car3 = new Car("John Doe", "Toyota", 2020, "images/12.png");
//createCarElement(car3);
car3.setStyle( "200px", "200px", "600px", "800px", "30%" );
