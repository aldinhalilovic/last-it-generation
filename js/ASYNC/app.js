// function logOne() {
//   logTwo();
//   console.log(1);
// }

// function logTwo() {
//   logThree();
//   console.log(2);
// }

// function logThree() {
//   logFour();
//   console.log(3);
// }

// function logFour() {
//   console.log(4);
// }

// logOne();

// Armina -> 1, 2, 3, 4, 1
// Nejla -> 4, 3, 2, 1
// Ajse -||-
// Adem -> 1,2,3,4
// Ali -> 4 , 1, 3, 2

// function logOne() {
//   console.log(1);
// }

// setTimeout(() => {
//   console.log("Aldin");
// }, 1000);

// setTimeout(() => {
//   console.log("Adem");
// }, 0);

// logOne();
// logOne();
// logOne();
// logOne();
// logOne();
// logOne();
// logOne();
// logOne();
// logOne();
// logOne();
// logOne();
// logOne();
// logOne();
// logOne();
// logOne();
// logOne();
// logOne();
// logOne();
// logOne();
// logOne();
// logOne();
// logOne();
// logOne();
// logOne();
// logOne();
// logOne();
// logOne();

// Adem -> adem, 1, aldin
// Ajsa -> -||-
// Nejla -> aldin, adem, 1
// Dzeno -> 1, adem, aldin

// setTimeout(function c() {
//   console.log("c");
// }, 1);
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");
// console.log("1");

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // neki podatak

//     if ()
//     resolve("Clanarina je validna");
//     reject("nemaaa");
//   }, 3000);
// });

// myPromise
//   .then((data) => {
//     const newData = data + ", mozete da udjete u klub!";
//     return newData;
//   })
//   .then((nestoPeto) => alert(nestoPeto))
//   .catch((data) => {
//     if (data === "nemaaa") {
//       alert("Neuspesan zahtev ka serveru, pokusajte opet");
//     }
//   })
//   .finally(() => alert("Provera je zavrsena"));
// fetch("https://dummyjson.com/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     const allPosts = data.posts;
//     const parniPostovi = allPosts.filter((post) => post.id % 2 === 0);
//     return parniPostovi;
//   })
//   .then((parniPostovi) => console.log(parniPostovi));

// const brojPostova = prompt("Unesite broj postova");

// fetch(`https://dummyjson.com/posts`)
//   .then((res) => res.json())
//   .then((data) => data.posts)
//   .then((posts) => posts.filter((post) => post.id % 2 === 0))
//   .then(console.log);

// fetch("https://dummyjson.com/posts")
//   .then((res) => res.json())
//   .then((data) => data.posts.filter((post) => post.reactions.dislikes < 20))
//   .then(console.log);

// fetch("https://dummyjson.com/products")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => data.products)
//   .then((products) => {
//     const evenIds = products.filter((product) => product.id % 2 === 0);
//     return evenIds;
//   })
//   .then((evenIdProducts) => evenIdProducts.filter((el) => el.stock < 10))
//   .then(console.log);

const person = {
  ime: "Aldin",
  prezime: "Halilovic",
  godina: 20,
};

const secondPerson = {
  ime: "Hamza",
  prezime: "Krkmisevic",
  godina: 16,
};

const { godina: mojeGodine, ime, prezime } = person;
const {
  godina: hamzineGodine,
  ime: hamzinoIme,
  prezime: hamzinoPrezime,
} = secondPerson;

console.log(person.godina);
console.log(mojeGodine);

console.log(prezime);
console.log(hamzinoPrezime);
