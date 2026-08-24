// ============================================
// FOOTER PRODUCT CARDS - shown above the footer on every page
// ============================================

function renderFooterProducts() {
    const container = document.getElementById('footerProductsGrid');

    if (!container || typeof getProducts !== 'function') return;

    const linkPrefix = container.closest('[data-product-link-prefix]')
        ? container.closest('[data-product-link-prefix]').dataset.productLinkPrefix
        : '';

    const params = new URLSearchParams(window.location.search);
    const currentId = parseInt(params.get('id'), 10);

    let products = getProducts();
    products = products.filter(product => product.id !== 4);
    if (!Number.isNaN(currentId)) {
        products = products.filter(product => product.id !== currentId);
    }
    products = products.slice(0, 4);

    container.innerHTML = products.map(product => `
        <a href="${linkPrefix}product.html?id=${product.id}" class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-content">
                <div class="product-category">${product.category}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-rating">
                    <span class="stars">★★★★★</span>
                    <span class="review-count">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    $${product.price.toFixed(2)}
                    <span class="product-original-price">$${product.originalPrice.toFixed(2)}</span>
                </div>
            </div>
        </a>
    `).join('');

    if (typeof initBlurHoverAnimations === 'function') initBlurHoverAnimations();
    if (typeof initGlowEffect === 'function') initGlowEffect();
}

document.addEventListener('DOMContentLoaded', renderFooterProducts);
