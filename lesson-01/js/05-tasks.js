// напиши скрипт, который для объекта user последовательно:
// добавляет поле mood со значение happy
// заменяет значение hobby на skydiving
// заменяет значение premium на false
// выводит содержание объекта user в формате ключЖзначение, испоьзуя Object.keys( и for...of)

const user = {
  name: "mango",
  age: 20,
  hobby: "html",
  premium: true,
};
// добавляем-изменяем нескольк методов
user.mood = "happy";
user["hobby"] = "skidiving";
// user.premium = "false";можно ниже так:
user.premium = !user.premium;
console.log("user:", user);
// сделаем массив:
const keys = Object.keys(user);
let result = "";
for (const key of keys) {
  result += `${key}:${user[key]} \n`;
}
console.log(result);

// есть объект, где сохраняются зарплаты нашей команды. напишите код для:
// сумирования всех зарплат и сохранить результат в переменной sum
// должно выйти 390. если объект salaries пустой, то результат должен быть 0

const salaries = {
  john: 100,
  ann: 160,
  pete: 130,
};
let sum = 0;
const salariesArray = Object.values(salaries);
console.log(salariesArray);

if (salariesArray.length) {
  for (const salary of salariesArray) {
    sum += salary;
  }
  console.log(sum);
} else {
  console.log(sum);
}
