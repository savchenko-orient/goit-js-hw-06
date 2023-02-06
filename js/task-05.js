const nameInput = document.querySelector('#name-input'),
    nameOutput = document.querySelector('#name-output');

const handlerInput = () => {
    nameInput.value
        ? nameOutput.innerText = nameInput.value
        : nameOutput.innerText = "Anonymous"
}

nameInput.addEventListener('input', handlerInput)