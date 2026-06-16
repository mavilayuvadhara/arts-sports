document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    
    const closeBtn = document.querySelector(".close-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let currentIndex = 0;

    const showImage = (index) => {
        const item = galleryItems[index];
        const img = item.querySelector("img");
        const caption = item.querySelector("p");

        lightboxImg.src = img.src;
        lightboxCaption.textContent = caption.textContent;
        currentIndex = index;
    };

    // Open Lightbox using the .active class
    galleryItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            lightbox.classList.add("active");
            showImage(index);
        });
    });

    // Close Lightbox
    closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });

    nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        let nextIndex = currentIndex + 1;
        if (nextIndex >= galleryItems.length) nextIndex = 0;
        showImage(nextIndex);
    });

    prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) prevIndex = galleryItems.length - 1;
        showImage(prevIndex);
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("active");
        }
    });

    document.addEventListener("keydown", (e) => {
        if (lightbox.classList.contains("active")) {
            if (e.key === "ArrowRight") nextBtn.click();
            if (e.key === "ArrowLeft") prevBtn.click();
            if (e.key === "Escape") lightbox.classList.remove("active");
        }
    });
});
