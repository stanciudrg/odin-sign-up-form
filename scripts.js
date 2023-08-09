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