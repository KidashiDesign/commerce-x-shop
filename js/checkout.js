// ============================================
// CHECKOUT PAGE (DEMO ONLY - NO REAL PAYMENT IS PROCESSED)
// ============================================

function renderCheckoutSummary() {
    const container = document.getElementById('checkoutItems');
    if (!container) return;

    const cart = getCart();

    if (cart.length === 0) {
        window.location.href = '../cart.html';
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="checkout-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="checkout-item-info">
                <span class="checkout-item-name">${item.name}</span>
                <span class="checkout-item-qty">Qty: ${item.quantity}</span>
            </div>
            <span class="checkout-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');

    const subtotal = getCartSubtotal();
    const shipping = getShippingCost(subtotal);
    const tax = subtotal * CART_TAX_RATE;
    const total = subtotal + shipping + tax;

    document.getElementById('checkoutSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('checkoutShipping').textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
    document.getElementById('checkoutTax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('checkoutTotal').textContent = `$${total.toFixed(2)}`;
}

function initPaymentTabs() {
    const tabs = document.querySelectorAll('.payment-tab');
    const panels = document.querySelectorAll('.payment-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            const panel = document.getElementById(tab.dataset.panel);
            if (panel) panel.classList.add('active');
        });
    });
}

function initCardFormatting() {
    const cardNumber = document.getElementById('cardNumber');
    const cardExpiry = document.getElementById('cardExpiry');
    const cardCvc = document.getElementById('cardCvc');

    if (cardNumber) {
        cardNumber.addEventListener('input', () => {
            const digits = cardNumber.value.replace(/\D/g, '').slice(0, 16);
            cardNumber.value = digits.replace(/(.{4})/g, '$1 ').trim();
        });
    }

    if (cardExpiry) {
        cardExpiry.addEventListener('input', () => {
            const digits = cardExpiry.value.replace(/\D/g, '').slice(0, 4);
            cardExpiry.value = digits.length > 2 ? `${digits.slice(0, 2)} / ${digits.slice(2)}` : digits;
        });
    }

    if (cardCvc) {
        cardCvc.addEventListener('input', () => {
            cardCvc.value = cardCvc.value.replace(/\D/g, '').slice(0, 4);
        });
    }
}

function generateOrderNumber() {
    return 'CX-' + Math.random().toString(36).slice(2, 8).toUpperCase();
}

function initCheckoutForm() {
    const form = document.getElementById('checkoutForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const placeOrderBtn = form.querySelector('button[type="submit"]');
        placeOrderBtn.disabled = true;
        placeOrderBtn.textContent = 'Processing (Demo)...';

        const cart = getCart();
        const subtotal = getCartSubtotal();
        const shipping = getShippingCost(subtotal);
        const tax = subtotal * CART_TAX_RATE;
        const total = subtotal + shipping + tax;
        const activeTab = document.querySelector('.payment-tab.active');

        const order = {
            orderNumber: generateOrderNumber(),
            items: cart,
            subtotal,
            shipping,
            tax,
            total,
            shippingInfo: {
                name: document.getElementById('checkoutName').value,
                email: document.getElementById('checkoutEmail').value,
                address: document.getElementById('checkoutAddress').value,
                city: document.getElementById('checkoutCity').value,
                zip: document.getElementById('checkoutZip').value,
                country: document.getElementById('checkoutCountry').value
            },
            paymentMethod: activeTab ? activeTab.dataset.panel : 'card',
            createdAt: new Date().toISOString(),
            demo: true
        };

        // Simulated processing delay - this is a visual demo only, no real
        // payment gateway is contacted and no money ever changes hands.
        setTimeout(() => {
            localStorage.setItem('lastOrder', JSON.stringify(order));

            const orders = JSON.parse(localStorage.getItem('orders') || '[]');
            orders.push(order);
            localStorage.setItem('orders', JSON.stringify(orders));

            clearCart();

            window.location.href = 'order-confirmation.html';
        }, 1200);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderCheckoutSummary();
    initPaymentTabs();
    initCardFormatting();
    initCheckoutForm();
});
