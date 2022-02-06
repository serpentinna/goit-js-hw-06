const catecoriesRef = document.querySelectorAll('.item');
console.log("Number of categories:", catecoriesRef.length);

catecoriesRef.forEach(category => {
    console.log("Category:", category.firstElementChild.textContent);
    console.log("Elements:", category.lastElementChild.children.length);
});