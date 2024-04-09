// короткие свойства
const username = "mango";
const email = "mangomail@mail.com";

const credentials = {
  username: username,
  email: email,
};

// credentials["username"] = "mango--";
// credentials["email"] = "mangomail@ma--il.com";
console.log(credentials);
console.log(credentials.username);
console.log(credentials.email);

//  с цветом
const inputName = "color";
const colorPickerData = {
  [inputName]: "teal",
};
console.log(colorPickerData);
// ----------------книга
const book = {
  title: "last kingdom",
  author: "bernard show",
  genres: ["historical", "adventure"],
  isPublic: true,
  rating: 8.38,
};

bookProp.addEventListener("change", (event) => {
  const propKey = event.target.value;

  bookSpec.textContent = book[propKey];
});
