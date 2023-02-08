const input = document.querySelector('#validation-input');
const VALIDATION_LENGTH = Number(input.dataset.length);

const handlerValidationInput = () => {
    const isValidInput = input.value.length === VALIDATION_LENGTH;

    isValidInput
        ? input.setAttribute('class', 'valid')
        : input.setAttribute('class', 'invalid')
}

input.addEventListener('blur', handlerValidationInput)