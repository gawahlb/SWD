function hMenu() {
    var x = document.getElementById("links");
    var icon = document.getElementById("hamburger-icon");
    x.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', (event) => {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

const navItem = document.querySelectorAll('.links');

navItem.forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.links.active').classList.remove('active');
        this.classList.add('active');
    });
});