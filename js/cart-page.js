// ============================================
// CART PAGE
// ============================================

function renderCartPage() {
    const container = document.getElementById('cartItems');
    if (!container) return;

    const cart = getCart();
    const emptyState = document.getElementById('cartEmpty');
    const summary = document.getElementById('cartSummary');
    const itemsWrapper = document.getElementById('cartItemsWrapper');

    if (cart.length === 0) {
        container.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        if (summary) summary.style.display = 'none';
        if (itemsWrapper) itemsWrapper.style.display = 'none';
        return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (summary) summary.style.display = 'block';
    if (itemsWrapper) itemsWrapper.style.display = 'block';

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="cart-item-price">$${item.price.toFixed(2)} each</p>
            </div>
            <div class="cart-item-qty">
                <button type="button" class="qty-btn cart-decrease" data-id="${item.id}" aria-label="Decrease quantity">−</button>
                <input type="number" min="1" value="${item.quantity}" class="cart-qty-input" data-id="${item.id}">
                <button type="button" class="qty-btn cart-increase" data-id="${item.id}" aria-label="Increase quantity">+</button>
            </div>
            <div class="cart-item-total">$${(item.price * item.quantity).toFixed(2)}</div>
            <button type="button" class="cart-remove" data-id="${item.id}" aria-label="Remove ${item.name} from cart">✕</button>
        </div>
    `).join('');

    updateCartSummary();
    attachCartItemListeners();
}

function updateCartSummary() {
    const subtotal = getCartSubtotal();
    const shipping = getShippingCost(subtotal);
    const tax = subtotal * CART_TAX_RATE;
    const total = subtotal + shipping + tax;

    const subtotalEl = document.getElementById('cartSubtotal');
    const shippingEl = document.getElementById('cartShipping');
    const taxEl = document.getElementById('cartTax');
    const totalEl = document.getElementById('cartTotal');

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
    if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
}

function attachCartItemListeners() {
    document.querySelectorAll('.cart-decrease').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const item = getCart().find(i => i.id === id);
            if (item) updateCartItemQuantity(id, item.quantity - 1);
            renderCartPage();
        });
    });

    document.querySelectorAll('.cart-increase').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const item = getCart().find(i => i.id === id);
            if (item) updateCartItemQuantity(id, item.quantity + 1);
            renderCartPage();
        });
    });

    document.querySelectorAll('.cart-qty-input').forEach(input => {
        input.addEventListener('change', () => {
            const id = parseInt(input.dataset.id);
            updateCartItemQuantity(id, parseInt(input.value) || 1);
            renderCartPage();
        });
    });

    document.querySelectorAll('.cart-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            removeFromCart(id);
            renderCartPage();
        });
    });
}

document.addEventListener('DOMContentLoaded', renderCartPage);
