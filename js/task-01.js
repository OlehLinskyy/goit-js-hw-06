const listOfCategories = categories.querySelectorAll(".item");
console.log(`Number of categories: ${listOfCategories.length}`);

listOfCategories.forEach(function (item) {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelector("ul").children.length}`);
});
