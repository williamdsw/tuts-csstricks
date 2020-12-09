
document.addEventListener('DOMContentLoaded', function () { 
    const button = document.querySelector('.btn-toggle');
    const themeLink = document.querySelector('#theme-link');

    if (button && themeLink) {
        button.addEventListener('click', function () {
            const href = themeLink.getAttribute('href');
            const theme = (href === 'css/light-theme.css' ? 'css/dark-theme.css' : 'css/light-theme.css');
            themeLink.href = theme;
        });
    }
});