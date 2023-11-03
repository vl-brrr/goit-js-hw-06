const categories = document.querySelectorAll("#categories .item");

function countCategories() {
  return `Number of categories: ${categories.length}`;
}

console.log(countCategories());

categories.forEach((category) => {
  console.log(`Category: ${category.querySelector("h2").textContent}
Elements: ${category.querySelectorAll("ul li").length}`);
});
