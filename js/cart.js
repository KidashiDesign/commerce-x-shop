// ============================================
// SHOPPING CART (DEMO ONLY - NO REAL PAYMENT IS PROCESSED)
// Shared across all pages via localStorage
// ============================================

function getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
}

function getCartCount() {
    return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

function getCartSubtotal() {
    return getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
}

const CART_FREE_SHIPPING_THRESHOLD = 100;
const CART_SHIPPING_FLAT_RATE = 9.99;
const CART_TAX_RATE = 0.08;

function getShippingCost(subtotal) {
    if (subtotal === 0 || subtotal >= CART_FREE_SHIPPING_THRESHOLD) return 0;
    return CART_SHIPPING_FLAT_RATE;
}

function updateCartItemQuantity(id, quantity) {
    const cart = getCart();
    const item = cart.find(i => i.id === id);
    if (!item) return;

    if (quantity < 1) {
        removeFromCart(id);
        return;
    }

    item.quantity = quantity;
    saveCart(cart);
}

function removeFromCart(id) {
    const cart = getCart().filter(i => i.id !== id);
    saveCart(cart);
}

function clearCart() {
    saveCart([]);
}

/**
 * Update the little badge on the cart icon in the nav bar
 */
function updateCartBadge() {
    const count = getCartCount();
    document.querySelectorAll('.cart-count').forEach(badge => {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    });
    document.querySelectorAll('.nav-cart-link').forEach(link => {
        link.classList.toggle('active', count > 0);
    });
}

document.addEventListener('DOMContentLoaded', updateCartBadge);
