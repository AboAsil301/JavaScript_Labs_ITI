// 1-Define ball Object in javascript that has the following properties:
// a- top, integer that contains the value of the top side position of the
// ball
// b- left, integer that contains the value of the left side position of the
// ball.
// c- radius : integer
// d- color : string
// f- calculateArea: function that calculate ball area as a circle
// g-toString: override the parent function and print ball dimensions
// values and color.

let ball_1 = {
  top: 6,
  left: 20,
  radius: 5,
  color: "red",
  calculateArea() {
    return this.radius * this.radius * 3.14;
  },
  toString() {
    return `top: ${this.top}, left: ${this.left}, radius: ${this.radius}, color: ${this.color}`;
  },
};

let ball_2 = {
  top: 10,
  left: 5,
  radius: 10,
  color: "blue",
  calculateArea() {
    return this.radius * this.radius * 3.14;
  },
  toString() {
    return `top: ${this.top}, left: ${this.left}, radius: ${this.radius}, color: ${this.color}`;
  },
};

let ball_3 = {
  top: 6,
  left: 30,
  radius: 20,
  color: "green",
  calculateArea() {
    return this.radius * this.radius * 3.14;
  },
  toString() {
    return `top: ${this.top}, left: ${this.left}, radius: ${this.radius}, color: ${this.color}`;
  },
};

//Now try to create array of balls with different values
let balls = [ball_1, ball_2, ball_3];

//A- loop through array to print all their colors ,areas
for (let i = 0; i < balls.length; i++) {
  console.log(
    `Color: ${balls[i].color}  ,   Area:  ${balls[
      i
    ].calculateArea()} ===> for ball number ${i + 1}`
  );
}

// B- sort them ascending by top , then by left then display the result on console
console.log(
  balls.sort((b, a) => {
    if (a.top < b.top) {
      return -1;
    } else if (a.top > b.top) {
      return 1;
    } else {
      if (a.left < b.left) {
        return -1;
      }
      if (a.left > b.left) {
        return 1;
      }
      return 0;
    }
  })
);

// Using ES6 create Class Engine with color property
// (Abstract class), the class has private static count property
// and move method that print “Moving”;
// abstract class
class Engine {
  color;
  static #count = 0;
  constructor(color) {
    if (this.constructor == Engine) {
      throw new Error("Abstract classes can't be instantiated.");
    }
    this.color = color;
    this.#count++;
  }
  move() {
    console.log("Moving");
  }
  static get EngineCount() {
    return this.#count;
  }
}

// Create Car Class (inherits from Engine class)
// Class constructor will take ownerName (private),
// brandName and productionYear
class Car extends Engine {
  #ownerName;
  brandName;
  productionYear;
  constructor(ownerName, brandName, productionYear) {
    super(brandName);
    this.#ownerName = ownerName;
    this.brandName = brandName;
    this.productionYear = productionYear;
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
      } parant move() say: ${this.move()}`
    );
  }
}

// now start creating objects and count them.
let car_1 = new Car("eman", "BMW", 2023);
let car_2 = new Car("Ahmed", "kia", 2021);
let car_3 = new Car("Ali", "Mercedes", 2000);

console.table([car_1, car_2, car_3]);

console.log(Engine.EngineCount);

let engine1 = new Engine("eman", "BMW", 2023);
