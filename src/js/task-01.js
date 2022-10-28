"use strict";

const categories = document.querySelectorAll(".item");
console.log(categories.length);

const categoriesArr = [...categories]
.map (
    categories => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
)
.join("\n");
console.log(categoriesArr);