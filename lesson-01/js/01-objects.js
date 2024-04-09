const playListName = "My songs";
const playListRating = 4.8;
const playListTracks = ["track1", "track2", "track3"];
const playListFavourite = true;
// сейчас выше - 4 независимые переменные

// метод создания массива - не оч удобный
// *const playList2 = Object.create();
// *Array.from();
// а этот создает объект, используя вложенные свойства
const playList = {
  name: "My songs",
  rating: 4.8,
  tracks: ["track1", "track2", "track3"],
  isFavorite: true,
  languages: {
    en: "english",
    de: "german",
    uk: "ukrainian",
  },
  artists: [],
};
console.log(playList);
// доступ к свойствам по ключу через квадратные скобки
let value = playList["name"];
value = playList["tracks"];
console.log("value:", value);
value = playList["languages"]["en"];
console.log("value:", value);

// доступ к свойствам через точку - самый лучший
value = playList.rating;
console.log("value:", value);
value = playList.languages.de;
console.log("value:", value);
// доступ к вложенным свойствам
value = playList["tracks"][1];
console.log("value:", value);

// изменнеие значений свойств
console.log("playList before:", playList);
playList.rating = 5;
console.log("playList after:", playList);

// он же через квадратные скобки
playList["rating"] = 4.5;
console.log("playList:", playList);

// добавление свойств
console.log(playList.artists); //тк нет такого, то покаже undefined
// пример кода
if (!playList.artists) {
  console.log("no artists");
} else {
  ("this field in Object Playlist");
} //можно добавить в массив

const propertyName = "tracks";
const result = playList[propertyName];
console.log("result:", result);
// ----------------это из html---
const userInput = document.querySelector('input[type = "text"]').value;
console.log("userInput:", userInput);
const result1 = playList[userInput];
console.log("result1:", tracksList);
tracksList.append(...result1);

// как можно передавать в функцию объект
function foo(values) {
  console.log(values);
  console.log(values.a);
  console.log(values.b);
}
foo({
  a: 1,
  b: 2,
});
foo({
  a: 5,
  b: 10,
});
console.log("end of 1 js----------------------");
