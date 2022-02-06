let counterValue = 0;

const refs = {
    decrementBtn: document.querySelector('button[data-action="decrement"]'),
    incrementBtn: document.querySelector('button[data-action="increment"]'),
    value: document.querySelector('#value'),
}


const onDecrementBtnClick = () => {
    counterValue -= 1;   
    refs.value.textContent = counterValue;
    console.log(refs.value.textContent);
};

const onIncrementBtnClick = () => {
    counterValue += 1;
    refs.value.textContent = counterValue;
    console.log(refs.value.textContent);
     }


refs.decrementBtn.addEventListener('click', onDecrementBtnClick);
refs.incrementBtn.addEventListener('click', onIncrementBtnClick);