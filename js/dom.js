// uzimanje HTML elemenata pomocu ID-ja
const plaviDiv = document.getElementById("blueDiv");

// kreiranje novog HTML elementa
const headingOne = document.createElement("h1");

function createParagraph(textNeki) {
  const paragraph = document.createElement("p");
  paragraph.textContent = textNeki;

  return paragraph;
}

// dodavanje texta nekom HTML elementu
headingOne.textContent = "Ovo je nas prvi h1";
plaviDiv.innerText = "Nesto neki text";
plaviDiv.appendChild(headingOne);

// uzimanje HTML elemenata pomocu classa
const crveniDiv = document.getElementsByClassName("redDiv");

// uzimanje elementa pomocu indexa iz HTML Collection;
// // console.log(crveniDiv.item(0));
// uzimanje elementa pomocu ID-ja iz HTML Collection
// // console.log(crveniDiv.namedItem("blueDiv"));

// Petljom dodajemo text nad svaki div sa klasom redDiv :)
for (let i = 0; i < crveniDiv.length; i++) {
  crveniDiv.item(i).textContent = `Ovo je ${i + 1}. element`;
}

const zutiDiv = document.querySelectorAll("div");

// console.log(zutiDiv);

const paragraph = document.createElement("p");
paragraph.textContent = "ovo je custom paragprag";

// for (let i = 0; i < zutiDiv.length; i++) {
//   zutiDiv.item.appendChild(paragraph);
// }

console.log(plaviDiv);

let kolikoPutaSamUsaoUDiv = 0;

plaviDiv.addEventListener("mouseenter", () => {
  console.log("Usao sam misom u div");
  kolikoPutaSamUsaoUDiv++;
});

plaviDiv.addEventListener("mouseleave", () => {
  console.log("Izasao sam iz diva");
});

plaviDiv.addEventListener("click", () => {
  console.log("pritisnuo sam dugme");
  crveniDiv.item(
    0
  ).textContent = `${kolikoPutaSamUsaoUDiv} sam puta usao u div`;
});
