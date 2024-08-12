const imagesContainer = document.getElementById("gallery-img-wrapper");


imagesContainer.addEventListener("click", (e) => {
    const img = e.target;
    window.open(img.src);
})