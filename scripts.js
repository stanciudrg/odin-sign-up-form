const nameInput = validate(document.querySelector('input[type=text'));
const emailInput = validate(document.querySelector('input[type=email'));
const phoneInput = {
    validatePhoneNumber: validate(document.querySelector('input[type=tel')),
    formatPhoneNumber: document.querySelector('input[type=tel').addEventListener('input', format)
}
const passwordInputs = document.querySelectorAll('input[type=password').forEach(input => validate(input));;

document.querySelector('#light').addEventListener('change', (e) => {
    if (e.target.checked) {
        const root = document.documentElement;
        root.className = '';
    }
});

document.querySelector('#dark').addEventListener('change', (e) => {
    if (e.target.checked) {
        const root = document.documentElement;
        root.className = 'dark';
    }
});

function validate(input) {

    input.addEventListener('focus', (e) => {
        if (!input.parentElement.parentElement.lastElementChild.classList.contains('duplicate-input')) { input.parentElement.parentElement.lastElementChild.style = "transform: scale(1)"; };
    })

    input.addEventListener('blur', (e) => {
        if (!input.parentElement.parentElement.lastElementChild.classList.contains('duplicate-input')) { input.parentElement.parentElement.lastElementChild.style = "transform: scale(0)"; };
        if ((e.target.validity.valid == true || e.target.validity.valid == false) && e.target.value !== "") {
            e.target.nextElementSibling.style = "transform: scale(1)";
        }
    })

    input.addEventListener('input', (e) => {
        if (e.target.value === "") {
            e.target.nextElementSibling.style = "transform: scale(0)";
        }
    })

    input.addEventListener('invalid', (e) => {
        if (e.target.value !== "") {
            e.target.nextElementSibling.style = "transform: scale(1)";
        }
    })

}

function format(e) {

    let phoneNumber = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !phoneNumber[2] ? phoneNumber[1] : phoneNumber[1] + '-' + phoneNumber[2] + (phoneNumber[3] ? '-' + phoneNumber[3] : '');

}