const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
ingredients.map((data) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = data;
  itemEl.classList.add("item");
  list.appendChild(itemEl);
});
