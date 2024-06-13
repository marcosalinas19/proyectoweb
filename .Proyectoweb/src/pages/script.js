document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addCommentButton').addEventListener('click', function() {
        const commentSection = document.getElementById('commentSection');
        const commentInput = document.getElementById('commentInput');
        const commentText = commentInput.value;

        if (commentText) {
            const newComment = document.createElement('div');
            newComment.textContent = commentText;
            commentSection.appendChild(newComment);
            commentInput.value = '';
        } else {
            alert('Por favor, escribe un comentario.');
        }
    });

    document.getElementById('addElogioButton').addEventListener('click', function() {
        const elogioSection = document.getElementById('elogioSection');
        const elogioInput = document.getElementById('elogioInput');
        const elogioText = elogioInput.value;

        if (elogioText) {
            const newElogio = document.createElement('div');
            newElogio.textContent = elogioText;
            elogioSection.appendChild(newElogio);
            elogioInput.value = '';
        } else {
            alert('Por favor, escribe un elogio.');
        }
    });

    document.getElementById('searchButton').addEventListener('click', function() {
        alert('Función de búsqueda no implementada.');
    });

    document.getElementById('checkoutButton').addEventListener('click', function() {
        window.location.href = '/premium';
    });

    window.addEventListener('click', function(event) {
        const modal = document.getElementById('modal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});

function addToCart(itemName) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(itemName);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.location.href = '/cart'; // Redirigir a la página del carrito
}
