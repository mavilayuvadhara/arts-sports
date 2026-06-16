document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    
    const closeBtn = document.querySelector(".close-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let currentIndex = 0;

    // Function to update Lightbox content
    const showImage = (index) => {
        const item = galleryItems[index];
        const img = item.querySelector("img");
        const caption = item.querySelector("p");

        lightboxImg.src = img.src;
        lightboxCaption.textContent = caption.textContent;
        currentIndex = index;
    };

    // Open Lightbox when clicking a grid item
    galleryItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            lightbox.style.display = "flex";
            showImage(index);
        });
    });

    // Close Lightbox
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Next Button Functionality
    nextBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevents clicking through to underlying elements
        let nextIndex = currentIndex + 1;
        if (nextIndex >= galleryItems.length) nextIndex = 0; // Loop back to start
        showImage(nextIndex);
    });

    // Previous Button Functionality
    prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) prevIndex = galleryItems.length - 1; // Loop back to end
        showImage(prevIndex);
    });

    // Close Lightbox if clicking outside the image content box
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });

    // Optional: Add keyboard support (Left/Right Arrows and Escape)
    document.addEventListener("keydown", (e) => {
        if (lightbox.style.display === "flex") {
            if (e.key === "ArrowRight") nextBtn.click();
            if (e.key === "ArrowLeft") prevBtn.click();
            if (e.key === "Escape") lightbox.style.display = "none";
        }
    });
});
