let images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg"
];

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = images[currentIndex];
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById("lightbox-img").src = images[currentIndex];
}

function filterImages(category) {
    let allImages = document.querySelectorAll(".gallery img");

    allImages.forEach(img => {
        if (category === "all" || img.dataset.category === category) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}
document.addEventListener("keydown", function (e) {
    let lightbox = document.getElementById("lightbox");

    if (lightbox.style.display === "flex") {
        if (e.key === "ArrowRight") {
            changeImage(1);
        } else if (e.key === "ArrowLeft") {
            changeImage(-1);
        } else if (e.key === "Escape") {
            closeLightbox();
        }
    }
});
