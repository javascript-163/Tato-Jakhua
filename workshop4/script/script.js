//Task 1

let action = "move";

switch (action) {
  case "move":
    alert("You`re moving!");
    break;
  case "jump":
    alert("You`re jumping!");
    break;
  case "run":
    alert("you`re running!");
    break;
  default:
    alert("Invalid action.");
}

//-------------//

//Task 2

const vegetable = "carrot";

switch (vegetable) {
  case "carrot":
    alert("Hello");
    break;
  case "Broccoli":
    alert("Welcome");
    break;
  case "Tomato":
    alert("Enjoy");
    break;
  default:
    alert("Neither");
}

//------------//

//Task 3

const userAge = 18;

const ageDeterminingFunc = (age) => {
  let result;

  age >= 18 ? (result = "You can vote!") : (result = "You can not vote!");

  return result;
};

ageDeterminingFunc(userAge);

//----------------//

//Task4

const password = "ILoveJavaScript123!";

function passwordCheckerFunc(pass) {
  let result;

  switch (true) {
    case !isNaN(pass):
      result = "Your password is not suitable!";
      break;
    case pass.length <= 3:
      result = "Your password is to short!";
      break;
    case pass.length > 3 && pass.length <= 6:
      result = "Your password is to weak!";
      break;
    case pass.length > 6 && pass.length <= 8:
      result = "Your password is acceptable!";
      break;
    case pass.length > 8 || pass.length >= 16:
      result = "Your password is strong!";
      break;
    default:
      result = "Oops, something unexpected happened!";
  }

  return result;
}

passwordCheckerFunc(password);

//----------//

//Task 5
let correctAnswers = 0;
const questions = [
  { question: "How many types are there in JavaScript?", answer: "8" },
  {
    question:
      "Function is a primitive data type in JavaScript! Enter 'true' or 'false'.",
    answer: "false",
  },
  {
    question: `An empty string ("" === true) is not true. Enter 'true' or 'false'.`,
    answer: "true",
  },
  {
    question:
      "The information entered in the prompt is interpreted as a string with numbers between them. Answer 'true' or 'false.'",
    answer: "true",
  },
  {
    question:
      "JavaScript is an asynchronous, single-threaded, non-blocking language. Enter 'true' or 'false'.",
    answer: "false",
  },
];

function askQuestion(question, correctAnswer) {
  let userAnswer = prompt(question);
  if (correctAnswer === userAnswer) {
    alert("Correct!");
    return true;
  } else {
    alert("Incorrect, Better luck next time!");
    return false;
  }
}

for (let i = 0; i < questions.length; i++) {
  if (!askQuestion(questions[i].question, questions[i].answer)) {
    alert(
      `You answered ${correctAnswers} out of 5 questions correctly. Keep going!`
    );
    break;
  }
  correctAnswers++;
}

if (correctAnswers === questions.length) {
  alert("Good job! You answered all the questions correctly.");
} else {
  alert("You didn't answer all questions correctly. The quiz ends here.");
}

//---------//

//Extra task 1

const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArray = [];

for (let c = 2; c < numberArray.length; c += 3) {
  newArray.push(numberArray[c]);
}

//----------//

//Extra task 2

function factorialCalculator(number) {
  if (number > 1) {
    return number * factorialCalculator(number - 1);
  } else {
    return false;
  }
}

factorialCalculator(5);

//-------------//

//Extra task 3

function upperCaseFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

upperCaseFirstLetter("javaScript");

//----------//

//Extra task 4

function stringChecker(string) {
  let result;

  string.length > 0
    ? (result = "this string is not blank")
    : (result = "this string is blank");

  return result;
}

stringChecker("");
