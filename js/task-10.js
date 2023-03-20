function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");
const input = controls.querySelector("input");
const createButton = controls.querySelector("button[data-create]");
const destroyButton = controls.querySelector("button[data-destroy]");

const createBoxes = (amount) => {
  let size = 30;
  boxes.innerHTML = "";
  input.value = "";

  for (let i = 0; i < amount; i++) {
    let box = document.createElement("div");
    size += 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
  }
};

const onCreateButton = () => {
  createBoxes(input.value);
};
const onDestroyButton = () => {
  boxes.innerHTML = "";
};

createButton.addEventListener("click", onCreateButton);
destroyButton.addEventListener("click", onDestroyButton);
