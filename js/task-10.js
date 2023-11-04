function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
let size = 30;

const boxes = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");

boxes.style.display = "flex";
boxes.style.flexWrap = "wrap";
boxes.style.gap = "10px";
boxes.style.marginTop = "20px";

function createBoxes(amount) {
  if (boxes.innerHTML === "") {
    size = 30;
  }
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
    size += 10;
  }
}

btnCreate.addEventListener("click", (event) => {
  createBoxes(input.value);
});
btnDestroy.addEventListener("click", (event) => {
  destroyBoxes();
});

function destroyBoxes() {
  boxes.innerHTML = "";
}
