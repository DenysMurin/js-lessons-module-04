// !for in
const feedback = {
  good: 5,
  neutral: 18,
  bad: 3,
};
let table = "  | keys | values |\n ";
for (const key in feedback) {
  table += `|${key.padEnd(8, " ")}|  ${feedback[key]}  \n`;

  console.log(key, typeof key, feedback[key]);
  const value = feedback[key];
  console.log("value:", value);
  console.log(table);
}
let totalFeedback = 0;
for (const key in feedback) {
  totalFeedback += feedback[key];
  console.log("totalFeedback:", totalFeedback);
}
// !object.keys//собирает в массив ключи или значения
const keys = Object.keys(feedback);
console.log("keys:", keys);
for (const key of keys) {
  // console.log(key);
  console.log(feedback[key]);
}
// а теперь значения
const values = Object.values(feedback);
console.log("values:", values);
// посчитаем totalfeedback
let totalFeedback2 = 0;
for (const value of values) {
  console.log(value);
  totalFeedback2 += value;
  console.log("totalFeedback2:", totalFeedback2);
}
