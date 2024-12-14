let cart = [];

// Función para agregar productos al carrito
function addToCart(name, price) {
  const item = { name, price };
  cart.push(item);
  updateCart();
}

// Función para actualizar el carrito y el total
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const totalPriceEl = document.getElementById("total-price");

  cartItems.innerHTML = "";
  let totalPrice = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    totalPrice += item.price;
  });

  cartCount.textContent = cart.length;
  totalPriceEl.textContent = `Total: $${totalPrice}`;
}

// Función para vaciar el carrito
function clearCart() {
  cart = [];
  updateCart();
}
