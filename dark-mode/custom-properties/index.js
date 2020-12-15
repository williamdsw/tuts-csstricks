
document.addEventListener('DOMContentLoaded', function () { 
    const button = document.querySelector('.btn-toggle');
    if (button) {
        button.addEventListener('click', function () {
            document.body.classList.toggle('dark-theme');
        });
    }
});