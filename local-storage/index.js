
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.btn-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme && currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    if (button) {
        button.addEventListener('click', function () { 
            document.body.classList.toggle('dark-theme');
            let theme = (document.body.classList.contains('dark-theme') ? 'dark' : 'light');
            localStorage.setItem('theme', theme);
        });
    }
});