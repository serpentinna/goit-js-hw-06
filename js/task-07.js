const inputRef = document.querySelector('#font-size-control');
const textSizeRef = document.querySelector('#text');

inputRef.addEventListener('input', (event) => {   
    textSizeRef.style.fontSize = `${event.currentTarget.value}px`;   
});