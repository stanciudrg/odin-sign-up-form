const nameInput = document.querySelector('input[type=text');
const emailInput = document.querySelector('input[type=email');
const phoneInput = document.querySelector('input[type=tel');
const passwordInput = document.querySelector('input[type=password');

nameInput.addEventListener('focus', (e) => {
    document.querySelector('#name-format').style = "transform: scale(1)";
})

nameInput.addEventListener('blur', (e) => {
    document.querySelector('#name-format').style = "transform: scale(0)";
    if ((e.target.validity.valid == true || e.target.validity.valid == false) && e.target.value !== "") {
        e.target.nextElementSibling.style = "transform: scale(1)";
    }
})

nameInput.addEventListener('input', (e) => {
    if (e.target.value === "") {
        e.target.nextElementSibling.style = "transform: scale(0)";
    }
})

nameInput.addEventListener('invalid', (e) => {
    if (e.target.value !== "") {
        e.target.nextElementSibling.style = "transform: scale(1)";
    }
})

emailInput.addEventListener('focus', (e) => {
    document.querySelector('#email-format').style = "transform: scale(1)";
})

emailInput.addEventListener('blur', (e) => {
    document.querySelector('#email-format').style = "transform: scale(0)";
    if ((e.target.validity.valid == true || e.target.validity.valid == false) && e.target.value !== "") {
        e.target.nextElementSibling.style = "transform: scale(1)";
    }
})

emailInput.addEventListener('input', (e) => {
    if (e.target.value === "") {
        e.target.nextElementSibling.style = "transform: scale(0)";
    }
})

emailInput.addEventListener('invalid', (e) => {
    if (e.target.value !== "") {
        e.target.nextElementSibling.style = "transform: scale(1)";
    }
})

phoneInput.addEventListener('focus', (e) => {
    document.querySelector('#phone-format').style = "transform: scale(1)";
})

phoneInput.addEventListener('blur', (e) => {
    document.querySelector('#phone-format').style = "transform: scale(0)";
    if ((e.target.validity.valid == true || e.target.validity.valid == false) && e.target.value !== "") {
        e.target.nextElementSibling.style = "transform: scale(1)";
    }
})

phoneInput.addEventListener('input', (e) => {
    if (e.target.value === "") {
        e.target.nextElementSibling.style = "transform: scale(0)";
    }
})

phoneInput.addEventListener('invalid', (e) => {
    if (e.target.value !== "") {
        e.target.nextElementSibling.style = "transform: scale(1)";
    }
})

emailInput.addEventListener('invalid', (e) => {
    if (e.target.value !== "") {
        e.target.nextElementSibling.style = "transform: scale(1)";
    }
})

passwordInput.addEventListener('focus', (e) => {
    document.querySelector('#password-format').style = "transform: scale(1)";
})

passwordInput.addEventListener('blur', (e) => {
    document.querySelector('#password-format').style = "transform: scale(0)";
    if ((e.target.validity.valid == true || e.target.validity.valid == false) && e.target.value !== "") {
        e.target.nextElementSibling.style = "transform: scale(1)";
    }
})

passwordInput.addEventListener('input', (e) => {
    if (e.target.value === "") {
        e.target.nextElementSibling.style = "transform: scale(0)";
    }
})

passwordInput.addEventListener('invalid', (e) => {
    if (e.target.value !== "") {
        e.target.nextElementSibling.style = "transform: scale(1)";
    }
})

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