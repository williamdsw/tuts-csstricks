
document.addEventListener('DOMContentLoaded', function () { 
    const buttons = document.querySelectorAll('button');
    const content = document.querySelector('.module-content');
    if (buttons.length != 0 && content) {
        buttons.forEach(button => button.addEventListener('click', function () { 
            content.style.isolation = this.textContent;
        }));
    }
});