document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment').value;

    if (name && address && paymentMethod) {
        alert('Purchase completed successfully!');
        localStorage.removeItem('cart');
        window.location.href = 'index.html';
    } else {
        alert('Please fill in all fields.');
    }
});
