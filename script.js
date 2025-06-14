"use strict";
console.log("Підключено JavaScript для Практичної роботи №2");

// 1. Функція-оголошення
function greet() {
  console.log("Привіт, світ!");
}
greet();
greet();

// 2. Функціональний вираз
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(4, 5)); // 20

// 3. Стрілочна функція
const divide = (a, b) => a / b;
console.log(divide(20, 4)); // 5

// 4. Параметри та return
function square(x) {
  return x * x;
}
console.log(square(6)); // 36

// 5. Області видимості
if (true) {
  let localVar = "Я в блоці";
  console.log(localVar); // Працює
}
// console.log(localVar); // ReferenceError

// 6. Замикання — функція-лічильник
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// 7. Контекст this
const person = {
  name: "Олена",
  sayHello() {
    console.log(`Привіт, мене звуть ${this.name}`);
  },
};
person.sayHello(); // Привіт, мене звуть Олена

// 8. Каррінг
function add(a) {
  return function (b) {
    return a + b;
  };
}
const addTen = add(10);
console.log(addTen(5)); // 15

// 9. Комплексне завдання: Анкета
function createSurvey() {
  const name = prompt("Введіть ваше ім’я:");
  const age = Number(prompt("Введіть ваш вік:"));
  const city = prompt("Введіть ваше місто:");
  const isAdult = age >= 18;

  return {
    name,
    age,
    city,
    isAdult,
  };
}

function displaySurvey(surveyData) {
  const message = `Ім'я: ${surveyData.name}\nВік: ${surveyData.age}\nМісто: ${
    surveyData.city
  }\nПовнолітній: ${surveyData.isAdult ? "так" : "ні"}`;
  console.log(message);
  alert(message);
}

const survey = createSurvey();
displaySurvey(survey);

// 10. Додаткове завдання: Конвертер температури
function createConverter(factor, offset) {
  return function (temp) {
    return temp * factor + offset;
  };
}

const cToF = createConverter(9 / 5, 32);
const fToC = createConverter(5 / 9, (-32 * 5) / 9);

const tempValue = Number(prompt("Введіть температуру:"));
const direction = prompt(
  'Введіть напрямок конвертації: "C to F" або "F to C"'
).trim();

let result;

if (direction === "C to F") {
  result = cToF(tempValue);
} else if (direction === "F to C") {
  result = fToC(tempValue);
} else {
  alert("Невідомий напрямок конвертації");
}

if (result !== undefined) {
  alert(`Результат: ${result.toFixed(2)}`);
  console.log(`Результат конвертації: ${result.toFixed(2)}`);
}
