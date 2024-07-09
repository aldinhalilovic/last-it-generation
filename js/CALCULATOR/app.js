const display = document.getElementById("display");

console.log(display);

const buttons = document.getElementsByClassName("btn");

console.log(buttons);

let displayValue = display.textContent;
for (let i = 0; i < buttons.length; i++) {
  buttons.item(i).addEventListener("click", (e) => {
    const target = e.target;

    if (display.textContent === "0" && target.matches("#number")) {
      display.textContent = target.textContent;
    } else if (target.matches("#number")) {
      display.textContent += target.textContent;
    }
    if (target.matches("#plus")) {
      display.textContent += target.textContent;
    }

    if (target.matches("#equals")) {
      display.textContent = eval(display.textContent);
    }
  });
}
