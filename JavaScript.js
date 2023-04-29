function imageOverlay() {
    var overlay = document.getElementById('image-overlay')
    overlay.classList.add('active')
}

function closeImageOverlay() {
    var overlay = document.getElementById('image-overlay')
    overlay.classList.remove('active')
}

function openOverlay(imageUrl) {
    var overlay = document.getElementById("my-overlay");
    var overlayImage = overlay.querySelector(".my-overlay-image");
    overlayImage.src = imageUrl;
    overlay.classList.add("active");
}

function closeOverlay() {
    var overlay = document.getElementById("my-overlay");
    overlay.classList.remove("active");
}
