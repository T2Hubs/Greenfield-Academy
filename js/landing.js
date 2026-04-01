/* ========================================
   LANDING PAGE JS
   ======================================== */

// Carousel
(function () {
    const slidesContainer = document.getElementById('carouselSlides');
    const dotsContainer = document.getElementById('carouselDots');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    if (!slidesContainer) return;

    const images = DataStore.getCarouselImages();
    let currentSlide = 0;
    let autoPlayTimer;

    function renderCarousel() {
        if (images.length === 0) {
            slidesContainer.innerHTML = `
                <div class="carousel-slide active" style="background: linear-gradient(135deg, var(--bg-dark), var(--bg-surface)); display:flex; align-items:center; justify-content:center;">
                    <p style="color: var(--text-muted); font-size: 1.2rem;">No images available. Add images from the Admin panel.</p>
                </div>
            `;
            dotsContainer.innerHTML = '';
            return;
        }

        slidesContainer.innerHTML = images.map((img, i) => `
            <div class="carousel-slide ${i === 0 ? 'active' : ''}" data-title="${img.title}">
                <img src="${img.src}" alt="${img.title}" loading="${i === 0 ? 'eager' : 'lazy'}">
            </div>
        `).join('');

        dotsContainer.innerHTML = images.map((_, i) => `
            <div class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>
        `).join('');

        // Dot click handlers
        dotsContainer.querySelectorAll('.carousel-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                goToSlide(parseInt(dot.dataset.index));
            });
        });
    }

    function goToSlide(index) {
        const slides = slidesContainer.querySelectorAll('.carousel-slide');
        const dots = dotsContainer.querySelectorAll('.carousel-dot');

        if (slides.length === 0) return;

        slides[currentSlide]?.classList.remove('active');
        dots[currentSlide]?.classList.remove('active');

        currentSlide = (index + slides.length) % slides.length;

        slides[currentSlide]?.classList.add('active');
        dots[currentSlide]?.classList.add('active');

        // Update hero title if applicable
        const heroTitle = document.getElementById('heroTitle');
        const heroSubtitle = document.getElementById('heroSubtitle');
        if (images[currentSlide]) {
            // Keep default title
        }

        resetAutoPlay();
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function startAutoPlay() {
        autoPlayTimer = setInterval(nextSlide, 5000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayTimer);
        startAutoPlay();
    }

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    renderCarousel();
    startAutoPlay();
})();

// Notices
(function () {
    const noticesGrid = document.getElementById('noticesGrid');
    if (!noticesGrid) return;

    const notices = DataStore.getNotices();

    if (notices.length === 0) {
        noticesGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 0; color: var(--text-muted);">
                <p style="font-size: 1.1rem;">No notices available at the moment.</p>
            </div>
        `;
        return;
    }

    // Show most recent 6 notices
    const recentNotices = notices.slice(0, 6);

    noticesGrid.innerHTML = recentNotices.map(notice => `
        <div class="notice-card fade-in">
            <span class="notice-badge ${notice.type}">${notice.type}</span>
            <div class="notice-date">📅 ${formatDate(notice.date)}</div>
            <h3 class="notice-title">${notice.title}</h3>
            <p class="notice-text">${notice.content}</p>
        </div>
    `).join('');

    // Re-observe new fade-in elements
    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));
})();
