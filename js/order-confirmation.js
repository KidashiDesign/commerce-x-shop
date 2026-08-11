// ============================================
// ORDER CONFIRMATION PAGE (DEMO ONLY)
// ============================================

function renderOrderConfirmation() {
    const order = JSON.parse(localStorage.getItem('lastOrder') || 'null');
    const noOrder = document.getElementById('noOrder');
    const summaryWrapper = document.getElementById('orderSummaryWrapper');

    if (!order) {
        if (noOrder) noOrder.style.display = 'block';
        if (summaryWrapper) summaryWrapper.style.display = 'none';
        return;
    }

    if (noOrder) noOrder.style.display = 'none';
    if (summaryWrapper) summaryWrapper.style.display = 'block';

    document.getElementById('orderNumber').textContent = order.orderNumber;
    document.getElementById('orderEmail').textContent = order.shippingInfo.email;
    document.getElementById('orderTotal').textContent = `$${order.total.toFixed(2)}`;
    document.getElementById('orderAddress').textContent =
        `${order.shippingInfo.address}, ${order.shippingInfo.city} ${order.shippingInfo.zip}, ${order.shippingInfo.country}`;

    const container = document.getElementById('orderItems');
    if (container) {
        container.innerHTML = order.items.map(item => `
            <div class="order-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="order-item-info">
                    <span class="order-item-name">${item.name}</span>
                    <span class="order-item-qty">Qty: ${item.quantity}</span>
                </div>
                <span class="order-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
        `).join('');
    }
}

document.addEventListener('DOMContentLoaded', renderOrderConfirmation);
