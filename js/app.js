// console.log("app.js loaded!");
// console.log(17); number
// console.log("17");
// console.log(10); // number
// console.log("10 + 10"); // string
// console.log(true); // boolean
// // console.log(false); // boolean
// console.log(undefined);
// console.log(null);

// console.log(1 + 1);

// console.log("1 + 1");

// console.log("1" + 1);

// console.log(1 + "1");
// console.log("aldin");

// sabiranje stringova

// console.log("aldin" + "halilovic");
// console.log("aldin" + " halilovic");

// + ispred stringa convertuje string u number

// console.log(1 + +"1");
// console.log(1 + +"aldin");

// typeof nesto   odredjuje tip podatka od /nesto/
// console.log(typeof "aldin");
// console.log(typeof true);
// console.log(typeof typeof true);
// console.log(typeof 0);

// var;
// let;
// const;

var a = "aldin";

var b = "hamza";

var prvaVarijabla;

// console.log(prvaVarijabla);

prvaVarijabla = "ali";

// console.log(a);
// console.log(b);

// console.log(prvaVarijabla);

// var 1 = 'aldin'

var aldin_halilovic = 1; // snake case

var aldinHalilovic = 2; // cammel case

var URL = "https://nesto.com/users";

var prva = 100;
// console.log(prva);

prva = 300;
// console.log(prva);

// let aldin;

// console.log(aldin);
// let aldin = "aldin ima 15 godina :)";
// console.log(aldin);

// aldin = "aldin nema vise 15 godina :))";
// console.log(aldin);

// const poslednja = "nemaa";

// console.log(poslednja);

// poslednja = "mozel ?";
// console.log(poslednja);

// console.log(mozda);
// var mozda = "hocel ?";

// console.log(nece);
// let nece = "error";

// == and ===
// console.log(5 === 3);
// console.log(5 === 5);

// console.log(5 == "5");
// console.log(5 == "3");

// console.log(5 !== 3);
// console.log(5 != "5");
// console.log(5 !== 5);

const c = "aldin";
const d = "aldin";

// console.log(c === d);

//  and operator

// console.log(false && 5);
// console.log(5 && 3 && 10 && 5);

// or operator

// console.log(false || !false);

// console.log(5 < 3);

//////////////////////////2. CAS ////////////////////////////

// let deklaracija; // deklaracija (formiranje varijable)

// deklaracija = 83; // inicijalizacija (dodeljivanje vrednosti varijabli)

// 5 == "5";
// 5 !== 5;

// const aldin = prompt("Unesi broj godina :)");

// // alert("Ne moze nista da se unese :(");

// console.log(aldin);

// CONDITIONALS (IF, TERNARY, SWITCH/CASE)

// const brojGodina = prompt("Unesite vase godine");

// console.log(brojGodina);

//  IF CONDITIONAL
// if (brojGodina < 18) {
//   alert("Ne mozete da udjete!");
// } else if (Number(brojGodina) === 18) {
//   alert("Na granici ste, ovaj put moze !");
// } else {
//   alert("Izvolite !");
// }

// TERNARY CONDITIONAL
// brojGodina < 18 ? alert("Niste punoletni") : alert("Punoletni ste :)"); // ternary operator

// SWITCH/CASE

// switch (+brojGodina) {
//   case 5:
//     alert("Odlican, 5!");
//     break;
//   case 4:
//     alert("Vrlo dobar, 4!");
//     break;
//   case 3:
//     alert("Dobar, 3.");
//     break;
//   case 2:
//     alert("Dovoljan, 2!");
//     break;
//   case 1:
//     alert("Nedovoljan, Avgust :)");
//     break;

//   default:
//     alert("Niste radili test! || Greska pri unosu");
//     break;
// }

// console.log(5 % 2);

// const randomNumber = prompt("Unesite neki broj");

// randomNumber % 2 ? alert("Broj je paran") : alert("Broj je neparan");

// const ime = prompt("Unesite vase ime");

// const prezime = prompt("Unesite vase prezime");

// if (!ime || !prezime) {
//   alert("Unesite opet vase ime i prezime");
// } else if (ime) {
//   alert("Ima samo ime " + ime);
// } else if (prezime) {
//   alert("Ima samo prezime " + prezime);
// } else {
//   console.log(ime + " " + prezime);
// }

/////////////////////// LOOPS ///////////////////////////////////

// console.log(3);
// console.log(3);
// console.log(3);
// console.log(3);
// console.log(3);

// FOR LOOP

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i, "broj je paran");
//   } else {
//     console.log(i, "broj je neparan");
//   }
// }

// for (let i = 20; i > 0; i--) {
//   console.log(i);
// }

// FizzBuzz challenge;

// deljiv sa 3 -> FIZZ;
// deljiv sa 5 -> BUZZ;
// deljiv i sa 3 i sa 5 -> FizzBuzz;
// ostale brojeve ispisati

// let i = 20;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// const randomNumber = Math.floor(Math.random() * 20);
// let myNumber = prompt("Guess the number from 0 to 20 :)");

// while (+myNumber !== randomNumber) {
//   myNumber = prompt("Guess again");
// }

// alert("U are correct, number is: " + randomNumber);

//////////////////////////////////////////////////////

// loop practices;

// practice

// const brojBrojeva = +prompt("Unesite broj brojeva :)");
// let rezultat = 1;

// for (let i = 0; i < brojBrojeva; i++) {
//   const unetiBroj = +prompt("Unesite vas broj");
//   rezultat *= unetiBroj; // rezultat = rezultat * unetiBroj
// }

// alert("Ovo je rezultat " + rezultat);

// Template strings

let mojeIme = "Aldin";

// console.log("Moje ime je " + mojeIme, "i prezivam se Halilovic");
console.log(`Moje ime je ${mojeIme}`);

// moje_ime; //snake case
// mojeIme; //cammel case

let jedanBroj = 10;

jedanBroj += 25; // += ->   jedanBroj = jedanBroj + 25; -= *=
console.log(jedanBroj);

for (let i = 0; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "FIZZBUZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else {
    console.log(i);
  }
}
