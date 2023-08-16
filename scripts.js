const toggleLightTheme = document.querySelector('#light').addEventListener('change', toggleTheme);
const toggleDarkTheme = document.querySelector('#dark').addEventListener('change', toggleTheme);
const validateNameInput = validate(document.querySelector('input[type=text]'));
const validateEmailInput = validate(document.querySelector('input[type=email]'));
const validatePhoneInput = validate(document.querySelector('input[type=tel]'));
const formatPhoneNumber = document.querySelector('input[type=tel').addEventListener('input', format);
const validatePasswordInputs = document.querySelectorAll('input[type=password]').forEach(input => validate(input));
const matchPasswordInputs = document.querySelectorAll('input[type=password]').forEach(input => input.addEventListener('input', matchPasswords))

document.querySelector('input[type=email').addEventListener('input', (e) => {

})

function validate(input) {

    input.addEventListener('focus', (e) => {
        input.parentElement.parentElement.lastElementChild.style = "transform: scale(1)";
    })

    input.addEventListener('blur', (e) => {

        input.parentElement.parentElement.lastElementChild.style = "transform: scale(0)";

        if ((e.target.validity.valid == true || e.target.validity.valid == false) && e.target.value !== "") {
            e.target.nextElementSibling.style = "transform: scale(1)";
        }

    })

    input.addEventListener('input', (e) => {

        if (input.id == 'email') {

            input.validity.typeMismatch ?
                input.setCustomValidity("Please match the requested format.") :
                input.setCustomValidity('');

        }

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

function matchPasswords(e) {

    if (e.target.id == 'password') {
        e.target.value !== document.querySelector('#confirm_password').value ?
            document.querySelector('#confirm_password').setCustomValidity('Passwords do not match.') :
            document.querySelector('#confirm_password').setCustomValidity('');
    } else if (e.target.id == 'confirm_password') {
        e.target.value !== document.querySelector('#password').value ?
            e.target.setCustomValidity('Passwords do not match.') :
            e.target.setCustomValidity('');
    }

}

function toggleTheme(e) {

    if (e.target.id == 'light') {
        if (e.target.checked) {
            const root = document.documentElement;
            root.className = '';
        }
    } else if (e.target.id == 'dark') {
        if (e.target.checked) {
            const root = document.documentElement;
            root.className = 'dark';
        }
    }
}