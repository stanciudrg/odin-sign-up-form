const toggleLightTheme = document.querySelector('#light').addEventListener('change', toggleTheme);
const toggleDarkTheme = document.querySelector('#dark').addEventListener('change', toggleTheme);
const validateNameInput = validate(document.querySelector('input[type=text]'));
const validateEmailInput = validate(document.querySelector('input[type=email]'));
const validatePhoneInput = validate(document.querySelector('input[type=tel]'));
const formatPhoneNumber = document.querySelector('input[type=tel').addEventListener('input', format);
const validatePasswordInputs = document.querySelectorAll('input[type=password]').forEach(input => validate(input));
const matchPasswordInputs = document.querySelectorAll('input[type=password]').forEach(input => input.addEventListener('input', matchPasswords))


function validate(input) {

    // Shows the input format only while the input is being focused

    input.addEventListener('focus', (e) => {
        input.parentElement.parentElement.lastElementChild.style = "transform: scale(1)";
    })

    input.addEventListener('blur', (e) => {

        input.parentElement.parentElement.lastElementChild.style = "transform: scale(0)";

        // Shows the validity status icons when the blur event is triggered

        if ((e.target.validity.valid == true || e.target.validity.valid == false) && e.target.value !== "") {
            e.target.nextElementSibling.style = "transform: scale(1)";
        }

    })

    input.addEventListener('input', (e) => {

        if (input.id == 'email') {

            // Replaces the error message that is being shown when an incorrect format is 
            // used for the email address input 

            input.validity.typeMismatch ?
                input.setCustomValidity("Please match the requested format.") :
                input.setCustomValidity('');

        }

        // Hide the validity status icon if user deletes the entire content of an input

        if (e.target.value === "") {
            e.target.nextElementSibling.style = "transform: scale(0)";
        }

    })

    // Show the validity status icon on Enter keyboard press or Enter key touch. This ensures that
    // the validity status icon is shown if the user tries to move forward to the next input by pressing Enter
    // but is not allowed due to the format being incorrect

    input.addEventListener('invalid', (e) => {
        if (e.target.value !== "") {
            e.target.nextElementSibling.style = "transform: scale(1)";
        }
    })

}

function format(e) {

    // Only allow the user to enter numbers while automatically inserting hyphens in order to respect
    // the format requested by the pattern attribute set on the phone input

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