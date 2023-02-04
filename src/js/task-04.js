const currentValue = document.querySelector('#value'),
    decrementBtn = document.querySelector('[data-action="decrement"]'),
    incrementBtn = document.querySelector('[data-action="increment"]');

let count = 0

const handlerIncrement = () => currentValue.innerText = count += 1;

const handlerDecrement = () => {
    Number(currentValue.innerText) > 0
        ? currentValue.innerText = count -= 1
        : currentValue;
}

incrementBtn.addEventListener('click', handlerIncrement);
decrementBtn.addEventListener('click', handlerDecrement);
