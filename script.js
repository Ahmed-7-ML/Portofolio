function openImage(src) {
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popup-img');
    popup.style.display = 'flex';
    popupImg.src = src;
}

function closeImage() {
    document.getElementById('popup').style.display = 'none';
}
