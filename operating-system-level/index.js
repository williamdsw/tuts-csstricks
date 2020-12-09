
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.btn-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
   
    if (button) {
        button.addEventListener('click', function () { 
            const theme = (prefersDarkScheme.matches ? 'light-theme' : 'dark-theme');
            document.body.classList.toggle(theme);
        });
    }
});