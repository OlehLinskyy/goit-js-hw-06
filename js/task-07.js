const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
span.style.fontSize = `${input.value}px`;

const event = () => {
  span.style.fontSize = `${input.value}px`;
};

input.addEventListener("input", event);
