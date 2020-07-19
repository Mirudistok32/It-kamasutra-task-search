document.addEventListener("DOMContentLoaded", () => {
  const formSearch = document.querySelector(".form__inner");
  const inputSearch = document.querySelector(".form__input");
  const formSum = document.querySelector(".sum__form");
  const inputSumFirstNumber = document.getElementById("firstNumber");
  const inputSumSecondNumber = document.getElementById("secondNumber");
  let a = "XXX";
  let b = "YYY";
  let c = "CCC";

  const persons = [
    { name: "Вика", age: 21 },
    { name: "Стас", age: 24 },
    { name: "Агесилай", age: 2100 },
    { name: "Мирудисток", age: 5 },
  ];

  const numbers = [32, 43, 2, 3, 8, 9, 11, 934, 73, 32, 67];

  //Функция вычисляет сумму двух чисел
  const superSum = (a = 0, b = 0) => {
    console.log(`Сумма равна ${a + b}`);
  };

  //Функция для поиска максимального значения в массиве чисел
  const maxValue = (arr) => {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    console.log(max);
  };

  //Функция для поиска минимального значения в массиве чисел
  const minValue = (arr) => {
    let min = Number.MAX_VALUE;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    console.log(min);
  };

  //Форма для работы с поисковой системой Mirudistok Search
  formSearch.addEventListener("submit", (e) => {
    e.preventDefault();

    if (inputSearch.value === "google") {
      alert("Yandex круче. Но это не точно");
    } else {
      setTimeout(() => {
        alert(`То что вы ввели: ${inputSearch.value}, 
                  Первое имя в массиве ${persons[0].name}`);
      }, 3000);
    }
  });

  //Форма для вычисления суммы двух целых чисел
  formSum.addEventListener("submit", (e) => {
    e.preventDefault();

    alert(
      `Сумма ваших чисел равна: ${
        +inputSumFirstNumber.value + +inputSumSecondNumber.value
      }`
    );
  });

  //Нахождения max и min числа с помощью стандартного API JavaScript
  console.log("Стандартное API JavaScript(Math.max() и Math.min())");
  console.log(Math.max(...numbers));
  console.log(Math.min(...numbers));

  //Нахождения max и min числа с помощью моих крафтовых функции
  console.log(
    "Мои функции для поиска max и min значений(maxValue() и minValue())"
  );
  maxValue(numbers);
  minValue(numbers);

  //Меняем местами значения переменных a и b
  console.log("#########");
  console.log("Меняем местами a и b");
  console.log(`До работы ИИ: a: ${a}, b: ${b}`);
  c = a;
  a = b;
  b = c;
  console.log(`После работы ИИ: a: ${a}, b: ${b}`);
  console.log("#########");
});
