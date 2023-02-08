const currentValue = document.querySelector('#value'),
    decrementBtn = document.querySelector('[data-action="decrement"]'),
    incrementBtn = document.querySelector('[data-action="increment"]');

const handlerIncrement = () => currentValue.innerText = Number(currentValue.innerText) + 1;

const handlerDecrement = () => {
    Number(currentValue.innerText) > 0
        ? currentValue.innerText = currentValue.innerText - 1
        : currentValue;
}

incrementBtn.addEventListener('click', handlerIncrement);
decrementBtn.addEventListener('click', handlerDecrement);
