export function addToCart(itemName) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(itemName);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.location.href = '/cart'; // Redirigir a la página del carrito
}

document.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsList = document.getElementById('cartItems');

    cartItems.forEach(function(item) {
        const newItem = document.createElement('li');
        newItem.textContent = item;
        cartItemsList.appendChild(newItem);
    });

    document.getElementById('purchaseButton').addEventListener('click', function() {
        alert('Compra realizada con éxito.');
        localStorage.removeItem('cartItems'); // Limpiar el carrito después de la compra
        window.location.href = '/';
    });
});
