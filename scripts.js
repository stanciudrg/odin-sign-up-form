document.querySelector('input[type=text').addEventListener('focus', (e) => {
    document.querySelector('.name-format').classList.toggle('visible');
})

document.querySelector('input[type=text').addEventListener('blur', (e) => {
    document.querySelector('.name-format').classList.toggle('visible');
})

document.querySelector('input[type=email').addEventListener('focus', (e) => {
    document.querySelector('.email-format').classList.toggle('visible');
})

document.querySelector('input[type=email').addEventListener('blur', (e) => {
    document.querySelector('.email-format').classList.toggle('visible');
})

document.querySelector('input[type=tel').addEventListener('focus', (e) => {
    document.querySelector('.phone-format').classList.toggle('visible');
})

document.querySelector('input[type=tel').addEventListener('blur', (e) => {
    document.querySelector('.phone-format').classList.toggle('visible');
})

document.querySelector('input[type=password').addEventListener('focus', (e) => {
    document.querySelector('.password-format').classList.toggle('visible');
})

document.querySelector('input[type=password').addEventListener('blur', (e) => {
    document.querySelector('.password-format').classList.toggle('visible');
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