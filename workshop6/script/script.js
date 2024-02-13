//1. შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მოცემულ სტრიქონში.

const simpleText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
function findBiggestWordInString(text) {
  let biggestWord = "";

  text.split(" ").forEach((word) => {
    if (word.length > biggestWord.length) {
      biggestWord = word;
    }
  });

  return biggestWord;
}

findBiggestWordInString(simpleText);

//2. შექმენით ობიექტი სახელით "calculator" შესაბამისი ატრიბუტებით სახელად. num1, num2, ანუ რაღაც ესეთი {num1: 10, num2: 5}, დაამატეთ ამ ობიექტში ახალი
// ატრიბუტები სახელით add, substract, multiply, divide, მათი მთავარი მიზანი უნდა იქნეს, რომ გამოიანგარიშოს ამ ორი რიცხვის ჯამი, სხვაობა, ნამრავლი, განაყოფი.
// ეს ყველაფერი მოახდინეთ this საკვანძო სიტყვის მეშვეობით.

const calculator = {
  num1: 10,
  num2: 5,
  add: function () {
    return this.num1 + this.num2;
  },
  subtract: function () {
    return this.num1 - this.num2;
  },
  multiply: function () {
    return this.num1 * this.num2;
  },
  divide: function () {
    return this.num1 / this.num2;
  },
};

calculator.add();
calculator.subtract();
calculator.multiply();
calculator.divide();

//3. შექმენით ფუნქცია, რომელიც შეიძლება გამოყენებულ იქნეს როგორც ფუნქციის ჰოისტინგის მაგალითად. შექმენით ეს ფუნქცია მისი გამოძახების შემდეგ და აღწერეთ
// კომენტარებით თუ როგორ მუშაობს იგი ჰოისტინგის მეშვეობით.

//Function declaration can be hoisted.
myFunc("Hello World!");
function myFunc(params) {
  return params;
}

//Function Expression can`t be hoisted
myFunc1();
const myFunc1 = function (params) {
  return params;
};

//Arrow Function can`t be hoisted.
myFunc2();
const myFunc2 = (params) => params;
