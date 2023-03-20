const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

const event = () => {
  span.textContent = input.value.length ? input.value : "Anonymous";
};

input.addEventListener("input", event);
