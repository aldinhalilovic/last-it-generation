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

// console.log(ja);

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

// console.log(ja.grupa.dobri);

// if (ja.grupa.dobri) {
//   console.log("Moja grupa je dobra");
// } else {
//   console.log("moja grupa ne valja");
// }

// if (ja.ime) {
//   console.log("Zovem se ", ja.ime);
// } else {
//   console.log("Nemam ime, bezimen");
// }

const noviObjekat = {
  marka: "Lenovo",
  model: "Thinkpad",
  ram: 16,
  procesor: "I7",
  graficka: "Integrisana",
  nov: false,
  touchScreen: true,
  portovi: ["USB", "HDMI", "3.5mm", "SD kartica"],
  cena: {
    iznos: 52000,
    valuta: "RSD",
    pdv: false,
  },
};

// console.log(noviObjekat.portovi[3]);
// console.log(noviObjekat["portovi"][2]);
// console.log(noviObjekat.cena.pdv);
// // noviObjekat.cena.push(popust, 20);
// noviObjekat.cena.popust = 20;

// console.log(noviObjekat);

const kljucevi = Object.keys(noviObjekat);
const vrednosti = Object.values(noviObjekat);
// console.log(kljucevi);
// console.log(vrednosti);

const mojaAdresa = {
  country: "Srbija",
  city: "Novi Pazar",
  street: "1. Maj",
  number: 73,
};

// const adrese = Object.values(mojaAdresa);

// // console.log(adrese);

// let mojeAdrese = "Trenutno se nalazim:";

// for (let i = 0; i < adrese.length; i++) {
//   mojeAdrese += ` ${adrese[i]}`;
// }
// console.log(mojeAdrese);

const svasta = Object.entries(mojaAdresa);

// console.log(svasta);

let novaAdresa = "My address is : \n";

// for (let i = 0; i < svasta.length; i++) {
//   novaAdresa += ` \n${svasta[i][0]}: ${svasta[i][1]}`;
// }

svasta.forEach((el) => (novaAdresa += `\n${el[0]}: ${el[1]}`));

// console.log(novaAdresa);

const randomBrojevi = [13, 10, 12, 1, 5, 56, 127, 0, 17, 1993, 834];

const noviUseri = [...randomBrojevi, 2, 4, 1021837];

// console.log(noviUseri);

const noviObjekatZaSpredovanje = {
  ime: "Aldin",
  prezime: "Halilovic",
  brojGodina: 21,
};

const najnovijiObjekat = {
  ...noviObjekatZaSpredovanje,
  brojGodina: 22,
  vozackiIspit: true,
};

const adem = {
  ...noviObjekatZaSpredovanje,
  polozenDiplomski: true,
  posao: true,
};

const hamza = {
  ...noviObjekatZaSpredovanje,
  josSrednjaSkola: true,
  vozackiIspit: false,
};

// console.log(najnovijiObjekat);

// console.log(adem);
// console.log(hamza);

const nizObjekata = [
  { ime: "aldin", prezime: "halilovic" },
  { ime: "ali", prezime: "korac" },
];

const nekiNoviObjekat = {
  marka: "Lenovo",
  model: "Thinkpad",
  ram: 16,
  procesor: "I7",
  graficka: "Integrisana",
  nov: false,
  touchScreen: true,
  portovi: ["USB", "HDMI", "3.5mm", "SD kartica"],
  cena: {
    iznos: 52000,
    valuta: "RSD",
    pdv: false,
  },
};
const kljuceviNeki = Object.keys(nekiNoviObjekat);
const vrednostiNeke = Object.values(nekiNoviObjekat);
const entriesNeki = Object.entries(nekiNoviObjekat);

// console.log(nekiNoviObjekat);
// console.log(kljuceviNeki);
// console.log(vrednostiNeke);
// console.log(entriesNeki);

const hamzinObjekat = {
  ime: "Hamza",
  prezime: "Krkmisevic",
  godine: 17,
  // ulaz: function () {
  //   console.log(this.skola.ocene);
  // },
  skola: {
    ocene: "lose",
    izostanci: "jos gori",
    // imeMoje: function () {
    //   console.log(this.ime);
    // },
  },
};

// console.log(noviThisObjekat);
// hamzinObjekat.ulaz();

// function amIAdult() {
//   console.log(this);
//   if (this.godine >= 18) {
//     console.log("Punoletan");
//   } else if (this.godine < 18) {
//     console.log("Mali je jos uvek");
//   }
// }

const ime = {
  torba: "Lenovo",
  boja: "siva",
  velicina: "M",
};

function myBag(velicina, boja, bojabojabojaboja) {
  console.log(
    `Moja torba je ${this.velicina} velicine, a voleo bih da bude ${velicina} velicine i da bude ${boja} boja`
  );
}

// myBag("S");
// myBag.call(ime, "S", "crvena");
// myBag.apply(ime, ["L", "plava"]);

const nekaBindFunkcija = myBag.bind(ime);

// nekaBindFunkcija("XL", "zuta");

// var randomRec = "predavanje";

// function nebitnaFunkcija() {
//   let randomRec = "nesto";
//   console.log(randomRec);
// }

// function nekaPetaFunckija() {
//   console.log(randomRec);
// }

// nekaPetaFunckija();

// var amin;

// console.log(amin);

// amin = "neka rec";

// console.log(amin);

// console.log(ali);

// let ali = "jafa";

// const maid = "cips";

// console.log(maid);

// sayHello();

// let sayHello = () => {
//   console.log("Hello world");
// };

// JEDNA NIZ DA SADRZI SVE NIKE PATIKE
// DRUGI NIZ DA SADRZI SVE ADIDAS PATIKE
// TRECI NIZ DA SADRZI SVE NIKE PATIKE ISPOD 15000 RSD
// PETI NIZ DA SADRZI NIKE PATIKE DO BROJA 42
// SESTI NIZ DA SADRZI ADIDAS PATIKE DO BROJA 42
// SEDMI NIZ DA SADRZI SVE MUSKE ADIDAS PATIKE

// const noveNikePatike = [];

// for (let i = 0; i < nasaPrvaProdavnica.length; i++) {
//   if (nasaPrvaProdavnica[i].brand === "Nike") {
//     noveNikePatike.push(nasaPrvaProdavnica[i]);
//   }
// }

// console.log(noveNikePatike);

const nasaPrvaProdavnica = [
  {
    brand: "Nike",
    model: "TN",
    broj: 42,
    cena: 24000,
    valuta: "RSD",
    pol: "M",
  },
  {
    brand: "Nike",
    model: "Jordan 4",
    broj: 41,
    cena: 25000,
    valuta: "RSD",
    pol: "Z",
  },
  {
    brand: "Replay",
    model: "NN",
    broj: 42,
    cena: 18500,
    valuta: "RSD",
    pol: "M",
  },
  {
    brand: "Adidas",
    model: "Campus",
    broj: 39,
    cena: 14000,
    valuta: "RSD",
    pol: "Z",
  },
  {
    brand: "Adidas",
    model: "Adi 2000",
    broj: 41,
    cena: 12500,
    valuta: "RSD",
    pol: "M",
  },
  {
    brand: "Nike",
    model: "SB Dunk Avocado",
    broj: 39,
    cena: 9000,
    valuta: "RSD",
    pol: "M",
  },
  {
    brand: "Adidas",
    model: "Ozweego",
    broj: 41,
    cena: 12500,
    valuta: "RSD",
    pol: "Z",
  },
  {
    brand: "Nike",
    model: "Air force 1",
    broj: 45,
    cena: 15000,
    valuta: "RSD",
    pol: "M",
  },
  {
    brand: "Adidas",
    model: "Superstar",
    broj: 39,
    cena: 9000,
    valuta: "RSD",
    pol: "Z",
  },
  {
    brand: "Nike",
    model: "Air Max",
    broj: 43,
    cena: 12500,
    valuta: "RSD",
    pol: "M",
  },
];

const nikePatike = nasaPrvaProdavnica.filter((el) => el.brand === "Nike");

// OSMI NIZ DA SADRZI SVE ZENSKE ADIDAS PATIKE

const sveZenskePatike = nasaPrvaProdavnica.filter(
  (patike) => patike.pol === "Z" && patike.brand === "Adidas"
);

// CEVTRTI NIZ DA SADRZI SVE ADIDAS PATIKE ISPOD 10000 RSD

// const adidasIspodDesetK = nasaPrvaProdavnica.filter(
//   (el) => el.brand === "Adidas" && el.cena < 10000
// );

// console.log(adidasIspodDesetK);

const profili = [
  {
    ime: "Aldin",
    prezime: "Halilovic",
  },
  {
    ime: "Hamza",
    prezime: "Krkmisevic",
  },
  {
    ime: "Amin",
    prezime: "Gusinac",
  },
  {
    ime: "Lejla",
    prezime: "Pruzljanin",
  },
  { ime: "Armina", prezime: "Zejnelovic" },
];

const noviProfili = profili.map((el) => {
  return {
    full_name: `${el.ime} ${el.prezime}`,
  };
});

const noviArtikli = nasaPrvaProdavnica.map((patike) => {
  // // dodavanje svim artiklima znizenje property
  // return {
  //   ...patike,
  //   snizenje: patike.cena < 15000,
  // };

  // // dodavanje samo artiklima koji su ispod 15000
  if (patike.cena < 15000) {
    return {
      ...patike,
      snizenje: true,
    };
  } else {
    return patike;
  }
});

const watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True",
  },
];

const ratings = watchList.map((movie) => +movie.imdbRating);
// console.log(ratings);

const sumRatings = watchList.reduce((prev, curr) => {
  console.log(prev);
  return prev + +curr.imdbRating;
}, 0);

// console.log(sumRatings);

const lessThenSomething = watchList.filter((movie) => movie.Year < 2010);

console.log(lessThenSomething);
