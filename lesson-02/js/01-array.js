//! перебор массива
// вывод в таблицу
const friends = [
  { name: "mango", online: "false" },
  { name: "kiwi", online: "true" },
  { name: "poly", online: "false" },
  { name: "ajax", online: "false" },
  { name: "rate", online: "true" },
];
console.table(friends);

// если никаких вычислений на базе index не нужны, то этот метод
for (const friend of friends) {
  console.log(friend);
}

// если нужны вычисления, то этот метод
console.log("вторая переборка");
for (let index = 0; index < friends.length; index++) {
  const element = friends[index];
  console.log("element:", element);
}
// !поbcк друга по имени
console.log("------поиск друга по имени-----");
function findFrienByName(allFriends, friendName) {
  for (const friend of allFriends) {
    console.log("friendName:", friendName);
    console.log("object", friend.onLine);
    if (friendName === friend.name) {
      console.log("exists");
      return friend;
    }
  }
  console.log("doesnt exists");
  return null;
}
let result = findFrienByName(friends, "poly");
console.log("result:", result);

console.log(findFrienByName(friends, "poly"));
console.log(findFrienByName(friends, "chelsy"));

// !получить имена всех друзей
console.log("------получить имена всех друзей-----");

function getAllNames(allFriends) {
  const names = [];
  for (const friend of allFriends) {
    names.push(friend.name);
  }
  return names;
}
console.log(getAllNames(friends));

// !получить имена друзей онлайн
console.log("------получить имена друзей онлайн-----");

function getOnlineFriends(allFriends) {
  const onlineFriends = [];
  for (const friend of allFriends) {
    if (friend.online === "true") {
      onlineFriends.push(friend.name);
    }
  }
  return onlineFriends;
}
console.log(getOnlineFriends(friends));

// !задача
console.log("------задача-----");
// напишите функцию calcTotalPrice(stone, stoneName), которая принимает массив объектов
// и строку с названием камня. Функция считает и возвращает общую стоимость
// камней с таким именем, ценой и количеством из объекта

const stones = [
  { name2: "смарагд", price: "1300", quantity: "4" },
  { name2: "диамант", price: "2700", quantity: "3" },
  { name2: "сапфир", price: "400", quantity: "7" },
  { name2: "щебень", price: "200", quantity: "2" },
];

const calcTotalPrice = function (stones, stoneName) {
  for (const stone of stones) {
    if (stone.name2 === stoneName) {
      return stone.price * stone.quantity;
    }
  }
  return `${stoneName} doesnt exists`;
};

console.log(calcTotalPrice(stones, "сапфир"));
console.log(calcTotalPrice(stones, "diamnd"));
