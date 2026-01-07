let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';  // Pulisce il carrello
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item.name + " - €" + item.price.toFixed(2);
        cartItems.appendChild(li);
    });
    document.getElementById('totalPrice').textContent = "Totale: €" + totalPrice.toFixed(2);
}

function proceedToCheckout() {
    alert("Procedi con il pagamento su PayPal!");
}
