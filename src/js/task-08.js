const form = document.querySelector('.login-form');

let formData = {};

const handlerSubmit = (e) => {
    e.preventDefault();

    if (form.elements.email.value && form.elements.password.value) {
        formData.email = form.elements.email.value;
        formData.password = form.elements.password.value;

        console.log('formData: ', formData);
        form.reset()

        return
    }

    alert('Всі поля повинні бути заповнені');
}

form.addEventListener('submit', handlerSubmit)
