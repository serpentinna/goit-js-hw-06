const bodyElementRef = document.querySelector('.widget');
const currentColorValueRef = document.querySelector('.color');
const changeColorButtonRef = document.querySelector('.change-color');

changeColorButtonRef.addEventListener('click', event => {

  bodyElementRef.style.backgroundColor = getRandomHexColor();
  currentColorValueRef.textContent = getRandomHexColor();
 
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
