const counterValue = document.querySelector("#value");

const decrementBtn = document.querySelector('[data-action="decrement"]');
const handleNegativeButtonClick = () => {
  counterValue.textContent--;
};
decrementBtn.addEventListener("click", handleNegativeButtonClick);

const incrementBtn = document.querySelector('[data-action="increment"]');
const handlePositiveButtonClick = () => {
  counterValue.textContent++;
};
incrementBtn.addEventListener("click", handlePositiveButtonClick);
