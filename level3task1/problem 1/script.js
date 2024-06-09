function enlargeImage(src) {
    const lightbox = document.getElementById('lightbox');
    const enlargedImage = document.getElementById('enlargedImage');
    enlargedImage.src = src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}
