function loadContent(page) {
    const iframe = document.getElementById('content-frame');
    iframe.src = page;
}

// Responsive Navigation
document.querySelector('.nav-toggle').addEventListener('click', () => {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
});
