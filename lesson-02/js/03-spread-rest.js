// !залишкові параметри
function showNumbers(number1, number2, number3, ...numbers) {
  console.log(arguments);
  console.log(number1, number2, number3);
  console.log(numbers); //остаток от 1-3
  for (const number of numbers) {
    console.log(number); //перечисление номеров
  }
}
showNumbers(1, 2, 3, 4, 5, 6, 7);
console.log("добавление массива");
//добавление массива
const arr = [1, 2, 3]; //допустим, был какой то массив
const numbs = [1000, 5000, 7000, 9000];
console.log("numbs:", numbs);
console.log(numbs.concat(arr));
const numbs2 = [1000, 5000, ...arr, 7000, 9000]; //просто вставить
console.log("numbs2:", numbs2);

console.log("поиск наибольшего или меньшего числа");
//добавление массива
// поиск наибольшег или меньшего числа
const temps = [18, 14, 12, 21, 17, 29, 24];
let max = Math.max(...temps);
console.log("max:", max);
let min = Math.min(...temps);
console.log("min:", min);

// создание массива и тип по ссілке
console.log("создание массива и тип по ссілке");
const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
const b = [...a];
console.log("b:", b);
console.log("a:", a);
console.log(a === b); //yt равны, потому что разные
console.log(a[0] === b[0]); //равенство первых элементов
a[0].x = 10; //перезаписали первый элемент
console.log("b:", b[0]); //тоже перезаписан, потому что по ссылке

// объединение через оператор spread
console.log("собъединение через оператор spread");
// порядок имеет значение
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
console.log("allTemps:", allTemps);

// создание объекта
console.log("создание объекта");

const objA = { x: 1, y: 2 };
const objB = { x: 0, z: 3 };
const objC = { ...objA, ...objB };
console.log("objC:", objC);

// создание объекта - пример на переключении темы браузера
console.log("создание объекта - пример на переключении темы браузера");
const defaultSettings = {
  theme: "light",
  showNotifications: true,
  hideSidebar: false,
};
const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};
const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};
console.log("finalSettings:", finalSettings);
