
// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Tutup menu setelah memilih navigasi
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

// GALLERY FILTER
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Mengatur tombol aktif
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        galleryItems.forEach(item => {
            if (filter === "all" || item.dataset.category === filter) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// LIGHTBOX FOTO
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

galleryItems.forEach(item => {
    item.addEventListener("click", () => {
        const image = item.querySelector("img");

        if (!image || !image.getAttribute("src")) return;

        lightboxImage.src = image.src;
        lightbox.classList.add("show");
    });
});

// Tutup lightbox
closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("show");
});

// Tutup jika klik bagian luar foto
lightbox.addEventListener("click", event => {
    if (event.target === lightbox) {
        lightbox.classList.remove("show");
    }
});

// Tutup menggunakan tombol ESC
document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        lightbox.classList.remove("show");
    }
});

// REVEAL ANIMATION
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll(
    ".section-heading, .timeline-item, .about-grid, .gallery-item"
).forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});
