// const inputRef = document.querySelector('#controls');
// const createButtonRef = document.querySelector('button[data-create]');
// const destroyButtonRef = document.querySelector('button[data-destroy]');
// const boxesDesplayerREf = document.querySelector('#boxes');
// let totalNumberOfBoxes = 0;

// inputRef.firstElementChild.addEventListener('change', () => {

//   const {
//     elements {
//       box: document.createElement('div');
//       number: 

//     }
// } = boxesToAdd;
//     boxesToAdd = document.createElement('div');
//   boxesDesplayerREf.prepend(...boxesToAdd);
  
// });

// createButtonRef.addEventListener('click', event => {
//   const boxesToAdd = document.createElement('div');
//   boxesDesplayerREf.prepend(...boxesToAdd);
// });

// function getNumberOfBoxes () {

// }
// createButtonRef.addEventListener('click', event => {
//   if (boxesCreatorRef.value > 0) {
//     const boxes = boxesCreatorRef.forEach(box => document.createElement('div'));
//     boxes.style.width = "30px";
//     boxes.style.height = "30px";
//   }

//   boxesDesplayerREf.innerHTML += boxes;
// });


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
