const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector("#ingredients");

const ingredientsList = ingredients.map(ingredient => {
 const list = document.createElement("li");
  list.textContent = ingredient;
  list.classList.add("item");
  return list;
});

console.log(ingredientsRef.prepend(...ingredientsList));

