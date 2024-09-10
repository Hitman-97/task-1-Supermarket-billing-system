document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Apple', price: 0.99 },
        { id: 2, name: 'Banana', price: 1.29 },
        { id: 3, name: 'Carrot', price: 0.79 }
    ];

    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
});

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cart.includes(productId)) {
        cart.push(productId);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}
