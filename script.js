function openImage(src) {
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    popup.style.display = 'flex';
    popupImg.src = src;
}

function closeImage() {
    document.getElementById('popup').style.display = 'none';
}

// Animation on scroll
window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.style.opacity = 1;
        }
    });
});
