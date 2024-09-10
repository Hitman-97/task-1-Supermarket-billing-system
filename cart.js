document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Apple', price: 0.99 },
        { id: 2, name: 'Banana', price: 1.29 },
        { id: 3, name: 'Carrot', price: 0.79 }
    ];

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartDiv = document.getElementById('cart-items');
    
    if (cartItems.length === 0) {
        cartDiv.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    const cartProducts = products.filter(product => cartItems.includes(product.id));
    cartProducts.forEach(product => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${product.id})">Remove</button>
        `;
        cartDiv.appendChild(itemDiv);
    });
});

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(id => id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}

document.getElementById('proceed-to-checkout').addEventListener('click', () => {
    window.location.href = 'checkout.html';
});
