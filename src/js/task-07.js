const input = document.querySelector('#font-size-control'),
    text = document.querySelector('#text');

const handlerInput = () => text.style.fontSize = `${input.value}px`;

input.addEventListener('input', handlerInput);