const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const onNameInput = (event) => {
    
    nameOutput.textContent = event.currentTarget.value === "" ? 'Anonymous' : event.currentTarget.value;

};

nameInput.addEventListener('input', onNameInput);


