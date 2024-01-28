//Task 1
function multipleNum(num) {
  if (typeof num === "number") {
    return num * num;
  } else {
    return NaN;
  }
}

multipleNum("12");

//---------//

//Task 2
function celsiusToFahrenheit(celsius) {
  if (typeof celsius === "number" || !isNaN(parseFloat(celsius))) {
    return `${celsius}°C = ${(parseFloat(celsius) * 9) / 5 + 32}°F`;
  } else {
    return NaN;
  }
}

celsiusToFahrenheit("36");

//----------//

//Task 3

const getRange = function (num1, num2, num3) {
  if (num1 >= num2 && num1 <= num3) {
    return true;
  } else {
    return false;
  }
};

getRange("2", "3", "8");

//----------//

//Task 4
const yearToCheck = 2024;

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

isLeapYear(yearToCheck)
  ? `${yearToCheck} is a leap year.`
  : `${yearToCheck} is not a leap year.`;

//----------//

//Task5
const num1 = +prompt("Enter any number");

const num2 = +prompt("Enter another number");

const action = prompt("Specify any logical operator");

let sum;

switch (action) {
  case "+":
    sum = num1 + num2;

    break;
  case "-":
    sum = num1 - num2;
    break;

  case "*":
    sum = num1 * num2;
    break;

  case "/":
    sum = num1 / num2;
    break;

  case "%":
    sum = num1 % num2;
    break;

  default:
    sum = "Oops, Something unexpected happened";
    break;
}

console.log(sum);
