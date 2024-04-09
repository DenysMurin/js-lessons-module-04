// присвоение по ссылке
const arr1 = [];
const arr2 = [];
const arr3 = arr1;
console.log(arr1 === arr2); //false
console.log(arr1 === arr3); //true

// это же касается и объектов
const obj1 = {
  x: 1,
  y: 2,
};
const obj2 = obj1;
obj2.z = 30;
console.log(obj1);

obj1.perspective = "300px";
console.log("obj1 с перспективой:", obj1);
console.log("obj1 с перспективой по ссылке:", obj2);

// ------------но лучше так не делать, потому что массив - упорядоченная коллекция
const arr = [1, 2, 3];
arr.hello = "веселуха";
console.log("arr:", arr);

function foo() {
  console.log("hello");
}
console.log("end of 2 js----------------------");
