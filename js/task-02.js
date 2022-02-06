const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector("#ingredients");

ingredients.reverse().forEach(ingredient => {
 const list = document.createElement("li");
  list.textContent = ingredient;
  list.classList.add("item");
  console.log(ingredientsRef.prepend(list));
});



