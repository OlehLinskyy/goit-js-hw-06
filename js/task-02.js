const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const markup =  ingredients.map((data) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = data;
  itemEl.classList.add("item");
  return itemEl;
});

list.append(...markup);