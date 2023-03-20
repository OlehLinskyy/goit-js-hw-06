function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const color = document.querySelector(".color");
const body = document.querySelector("body");

const event = () => {
  const hex = getRandomHexColor();
  body.style.backgroundColor = hex;
  color.textContent = hex;
};

button.addEventListener("click", event);
