const myArray = [
  true,
  26,
  "Academy of Digital Industries",
  null,
  undefined,
  "🥳",
  BigInt(1e9),
  { name: "John", surname: "Doe" },
];

//Task 1

const isArray = Array.isArray(myArray);

//--------//
//Task2

const firstElement = myArray[0];

//--------//
//Task3

const lastElement = myArray[myArray.length - 1];

//--------//
//Task4

const color = [
  "Blue ",
  "Green",
  "Red",
  "Orange",
  "Violet",
  "Indigo",
  "Yellow ",
];

const o = ["th", "st", "nd", "rd"];

const sayColorNames = [
  { first: `1${o[1]} choice is  ${color[0]}` },
  { first: `2${o[2]} choice is  ${color[1]}` },
  { first: `3${o[3]} choice is  ${color[2]}` },
];

//--------//
//Task5

const userInfo = {
  name: "John",
  surname: "Doe",
  age: 54,
  hobby: "Gaming",
};

userInfo.address = "Urzikstan";

delete userInfo.hobby;

userInfo.age = 86;
