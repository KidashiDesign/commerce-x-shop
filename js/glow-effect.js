// ============================================
// GLOW EFFECT
// Cursor-tracking spotlight border in CI colors,
// applied to category and product tiles
// ============================================

function initGlowEffect() {
    const cards = document.querySelectorAll('.category-card, .product-card');

    cards.forEach(card => {
        card.setAttribute('data-glow', '');
    });

    if (window.__glowPointerBound) return;
    window.__glowPointerBound = true;

    const syncPointer = (e) => {
        const x = e.clientX.toFixed(2);
        const y = e.clientY.toFixed(2);

        document.querySelectorAll('[data-glow]').forEach(card => {
            card.style.setProperty('--x', x);
            card.style.setProperty('--y', y);
        });
    };

    document.addEventListener('pointermove', syncPointer);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlowEffect);
} else {
    initGlowEffect();
}

// Re-initialize after dynamic content load (e.g. featured products)
window.addEventListener('contentLoaded', initGlowEffect);
