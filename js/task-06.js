const input = document.querySelector('#validation-input');
const VALIDATION_LENGTH = Number(input.dataset.length);

const handlerValidationInput = () => {
    const isValidInput = input.value.length === VALIDATION_LENGTH;

    if (isValidInput) {
        input.classList.add("valid")
        input.classList.remove('invalid')
    } else {
        input.classList.add("invalid")
        input.classList.remove('valid')
    }
}

input.addEventListener('blur', handlerValidationInput)