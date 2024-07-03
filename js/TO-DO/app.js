const toDoInput = document.getElementById("todo-input");
const submitButton = document.querySelector("button");
const toDoListSection = document.getElementById("todo-list");

const unOrderList = document.createElement("ul");

toDoListSection.appendChild(unOrderList);

let toDoTextValue = "";

toDoInput.addEventListener("keyup", (e) => {
  toDoTextValue = e.target.value;
});

submitButton.addEventListener("click", () => {
  if (!toDoTextValue) {
    alert("ne moze prazan string");
  } else {
    const listItem = document.createElement("li");
    listItem.textContent = toDoTextValue;

    unOrderList.appendChild(listItem);
    toDoInput.value = "";
    toDoTextValue = "";
  }
});

unOrderList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
