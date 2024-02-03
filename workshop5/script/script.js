//Task1
//შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე.
//შეასრულეთ ეს დავალება ციკლების მეშვეობით.

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function everyThre(arr) {
  let newArr = [];

  for (let i = 2; i < arr.length; i += 3) {
    newArr.push(arr[i]);
  }

  return newArr;
}

everyThre(numArr);

//Task2
//შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 10,9,8,7,6,5,4,3,2,1,
//შეასრულეთ ეს დავალება ციკლების მეშვეობით.

const numArr1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

numArr1.reverse();

//Task3
//მოცემული მასივიდან
// ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. შედეგი ესეთი უნდა იყოს:
// ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას
// ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.

let names = ["John", "Nick", "Bob", "Mary", "Bob", "Sue", "Ann", "Bob", "Bob"];

const newNamesArr = names.filter((name) => name != "Bob");

//Task4
//ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, მაგ.
// შექმენით ფუნქცია სახელით: fun და პარამეტრებით: number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3,
// მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.

function degreeNumFunc(num, pow) {
  let degreeNumber = 1;

  for (i = 0; i < pow; i++) {
    degreeNumber = degreeNumber * num;
  }

  return degreeNumber;
}

degreeNumFunc(5, 3);

//Task5
//შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების
// ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა
// უნაშთოდ და გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

//Task6
//შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის
//სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120,

function factorialCalculator(number) {
  let result = 1;
  if (number <= 1) {
    return "Invalid input. Please provide a non-negative integer.";
  } else {
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
  }
  return result;
}

factorialCalculator(5);

//Task7
// შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს:
// Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.

function upperCaseFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

upperCaseFirstLetter("javaScript");

//Task8
// შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი. მაგ.
// blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ this string is not blank-ს თუ
// ცარიელი არაა.

function stringChecker(string) {
  let result;

  string.length > 0
    ? (result = "this string is not blank")
    : (result = "this string is blank");

  return result;
}

stringChecker("");

//Task9
// შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. მაგ. stringToArray(testString) =>
// თუ მივაწვდით სტრიქონს “Hello, World” => გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]

const stringToArray = (str) => str.split(" ");

stringToArray("Hello, World");

//Task10
// შექმენით ერთგვარი ემაილის დამცველი ფუნქცია, რომლის ფუნქციონალი მდგომარეობს შემდგომში: მომხმარებელი გაწვდის ემაილს
// წერტილით გამოყოფილ თავისი სახელით და გვარით, beqa.beqauri@gmail.com, თქვენი ფუნქცია კი გამოიტანს მის დაცულ ვერსიას ამ
// ფორმით:  beqa……..@gmail.com. წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს.

function hideEmail(email) {
  const parts = email.split("@");
  const username = parts[0];
  const domain = parts[1];

  const hiddenUsername = username.slice(0, 4) + ".".repeat(username.length - 4);

  return hiddenUsername + "@" + domain;
}

const userEmail = "beqa.beqauri@gmail.com";
const hiddenEmail = hideEmail(userEmail);
