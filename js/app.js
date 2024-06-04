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

// let mojeIme = "Aldin";

// console.log("Moje ime je " + mojeIme, "i prezivam se Halilovic");
// console.log(`Moje ime je ${mojeIme}`);

// moje_ime; //snake case
// mojeIme; //cammel case

// let jedanBroj = 10;

// jedanBroj += 25; // += ->   jedanBroj = jedanBroj + 25; -= *=
// console.log(jedanBroj);

// for (let i = 0; i < 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i, "FIZZBUZZ");
//   } else if (i % 5 === 0) {
//     console.log("BUZZ");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else {
//     console.log(i);
//   }
// }

/////////////////////////FUNCTIONS/////////////////////////////

// function myFunction() {
//   console.log("Moja prva funkcija");
// }
// myFunction();

// function addTwo() {
//   console.log(2 + 2);
// }

// function addThree() {
//   console.log(3 + 3);
// }
// addTwo();
// addThree();

// function additionNumbers(a, b) {
//   const rezulat = a + b;

//   const proizvod = rezulat * 10;

//   const kolicnik = proizvod / 5;

//   return kolicnik;
// }

// const sumOfTwo = additionNumbers(5, 10);

// console.log(additionNumbers(5, 10));

// console.log(sumOfTwo);
// console.log(sumOfTwo * 4);

// function oddNumber(number) {
//   // if (number % 2 === 0) {
//   //   return `Ovaj broj je ${number} paran`;
//   // } else {
//   //   return `Ovaj broj je ${number} neparan`;
//   // }

//   // const odd =
//   //   number % 2 === 0
//   //     ? `Ovaj broj je ${number} paran`
//   //     : `Ovaj broj je ${number} neparan`;

//   // return odd;

//   return number % 2 === 0
//     ? `Ovaj broj je ${number} paran`
//     : `Ovaj broj je ${number} neparan`;
// }

// console.log(oddNumber(10));

// for (let i = 0; i < 100; i++) {
//   // const a = oddNumber(i);

//   // console.log(a);

//   console.log(oddNumber(i));
// }

// function myName(argument) {
//   return 2;
// }

// const mojeImeNeko = myName("Halilovic");

// function convertAge(to) {
//   return to * 7;
// }

// convertAge(5);

// const dajRandomBroj = Math.random; // i ostatak funckcije;

// const unetiBrojDrugi = prompt("Unesi broj ljudskih godina");

// convertAge(unetiBrojDrugi);

// 5 > 3 ? console.log("tvrdnja je tacna") : console.log("tvrdnja nije tacna");

// if (5 > 3) {
//   console.log("pet je vece od tri");
// } else if (5 < 3) {
//   console.log("pet je manje od tri");
// } else {
//   console.log("nesto skroz peto");
// }

// ocena = 3;
// switch (ocena) {
//   case 1:
//     console.log("nedovoljan");
//     break;
//   case 2:
//     console.log("dovoljan");
//     break;
//   case 3:
//     console.log("dobar");
//     break;
//   case 4:
//     console.log("vrlo dobar");
//     break;
//   case 5:
//     console.log("odlican");
//     break;

//   default:
//     console.log("nije radio test");
//     break;
// }

// for (i = 0; i < 20; i++) {
//   console.log(i);
// }

// for (i = 100; i > 0; i--) {
//   console.log(i);
// }

function myFirstFunction(broj) {
  return broj * broj;
}

const nekaDrugaFunkcija = function (argument) {
  console.log(argument);
};

const arrowFunction = () => {
  console.log("arrow funcion");
};

const squareNum = (broj) => broj * broj;

const rezultat = myFirstFunction(25);

// console.log(rezultat);
// nekaDrugaFunkcija(13);
// arrowFunction();

const arrowResult = squareNum(10);
// console.log(arrowResult);

// const emptyArray = [];

// emptyArray.push(10);

// emptyArray.pop();

// emptyArray.unshift("aldin");
// emptyArray.shift();

const firstMapArray = [9, 7, 30, 93, 13];

const mappedArray = firstMapArray.map((el) => el * el);

// console.log(firstMapArray);
// console.log(mappedArray);

function numOnPow(broj) {
  return broj * broj;
}

function ourCustomMap(nekiNiz, callBackFn) {
  const prazanNiz = [];

  for (let i = 0; i < nekiNiz.length; i++) {
    prazanNiz.push(callBackFn(nekiNiz[i]));
    // filter
    // if (callBackFn(nekiNiz[i])) {
    //   prazanNiz.push(nekiNiz[i]);
    // }
  }

  return prazanNiz;
}

const customMapArray = ourCustomMap(firstMapArray, numOnPow);
// console.log(customMapArray);

// FILTER METHOD

const firstFilterArray = [13, 7, 10, 17, 8, 22, 23, 16];

const evenNumbers = firstFilterArray.filter((el) => el % 2 === 0 && el > 10);

// console.log(evenNumbers);

const nizReci = [
  "laptop",
  "fudbal",
  "piljara",
  "monitor",
  "ranac",
  "kroasan",
  "mis",
  "kuciste",
];

//1. da se vrate sve reci koje imaju drugo slovo 'u'
// 2. da se vrate sve reci koje su duze od 6 slova

const nekaVarijabla = [13, 3, 10, 92, 22, 56, 100];

// const novaVarijabla = nekaVarijabla.map((el) => {
//   if (el % 2 !== 0) {
//     return el * el;
//   }

//   return el;
// });

// const handleFilter = (el) => {
//   const pomnozenBrojSaTri = el * 3;

//   return pomnozenBrojSaTri % 2 !== 0;
// };

// const novaVarijabla = nekaVarijabla.filter(handleFilter);

// console.log(novaVarijabla);

// 1. Zadatak
// Prvi deo. Napraviti pomocni niz koji ce sadrzati elemente od oba niza.
// Drugi deo. Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve.
// Treci deo. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.

const DATA1 = [2, 26, 38, 75, 11, 29];
const DATA2 = ["a", "b", "c", "d", "e"];

// const uslovUMap = DATA1.map((el) => el % 2 === 0);

// console.log(uslovUMap);

const nekiNizNebitan = [10, 19, 28, 63, 100];

const noviNizOdFiltera = nekiNizNebitan.filter(function (el) {
  return el % 2 === 0;
});

const prviPrimerNiza = [10, 23, 26, 31, 2, 7, 27, 59, 13];

// let suma = 0;
// for (let i = 0; i < prviPrimerNiza.length; i++) {
//   suma += prviPrimerNiza[i];
// }

// console.log(suma);
// 2684

// console.log(prviPrimerNiza);
// const suma = prviPrimerNiza.reduce((prev, curr) => {
//   console.log(prev, "prevvvvvvv value");
//   console.log(curr, "current value");
//   return prev + curr;
// }, 1000);

const suma = prviPrimerNiza.reduce((prev, curr) => {
  // console.log(prev, "prevvvvvvv value");
  // console.log(curr, "current value");
  // return prev + curr;

  if (prev % 2 === 0) {
    return curr + prev + 5;
  } else {
    return (curr + prev) * 5;
  }
});

// console.log(suma);

const godineOdeljenja = [17, 17, 17, 20, 21, 17, 20, 17, 13, 13, 21, 15];

const prosekGodina =
  godineOdeljenja.reduce((prev, curr) => prev + curr) / godineOdeljenja.length;

// console.log(godineOdeljenja);
// console.log(prosekGodina, "prosek godina");

function calculateAvarageYear(nekiNizBrojeva) {
  let suma = 0;

  for (let i = 0; i < nekiNizBrojeva.length; i++) {
    suma += nekiNizBrojeva[i];
  }

  return suma / nekiNizBrojeva.length;
}

const nekiBrojevi = [13, 10, 23, 1007, 22, 3, 17, 12321, 2];

const kilometri = nekiBrojevi.map((el) => el * 1.6);

// console.log(nekiBrojevi);
// console.log(kilometri);

const prosekKilometara =
  (nekiBrojevi.reduce((prev, curr) => prev + curr) * 1.6) / nekiBrojevi.length;

// console.log(prosekKilometara);

///////////// OBJEKTI ///////////////////////////

const ja = {
  // ime: "Aldin",
  ime: "",
  prezime: "Halilovic",
  godina: 21,
  itZnanje: ["HTML", "CSS", "JS", "REACT", "REACT NATIVE", "......."],
  grupa: {
    brojClanova: 12,
    dobri: false,
    // dobri: true,
    odrasli: ["Adem", "Lamija", "Ajsa", "Nejla", "Armina"],
  },
};

console.log(ja);

// DOT NOTATION
const mojeIme = ja.ime;

// console.log(mojeIme);

const mojePrezime = ja["prezime"];
// console.log(mojePrezime);

const imeIPrezime = ja.ime + " " + ja.prezime;

// console.log(imeIPrezime);

// console.log("Moje ime je " + ja.ime, "prezivam se ", ja.prezime);

const osobina = "ime";

// ja.osobina;

// const ja = {
//   ime: "Aldin",
//   prezime: "Halilovic",
//   godina: 21,
//   itZnanje: ["HTML", "CSS", "JS", "REACT", "REACT NATIVE", "......."],
//   grupa: {
//     brojClanova: 12,
//     dobri: true,
//     odrasli: ["Adem", "Lamija", "Ajsa", "Nejla", "Armina"],
//   },
// };

// console.log(ja.itZnanje[2]);

// for (let i = 0; i < ja.itZnanje.length; i++) {
//   console.log(ja.itZnanje[i]);
// }

console.log(ja.grupa.dobri);

if (ja.grupa.dobri) {
  console.log("Moja grupa je dobra");
} else {
  console.log("moja grupa ne valja");
}

if (ja.ime) {
  console.log("Zovem se ", ja.ime);
} else {
  console.log("Nemam ime, bezimen");
}
