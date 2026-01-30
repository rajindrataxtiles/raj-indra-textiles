// Get cart from localStorage or empty array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add product to cart
function addToCart(name, price) {
  const product = { name, price };
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

// Display cart items on cart page
function displayCart() {
  const cartContainer = document.getElementById("cartItems");
  const totalContainer = document.getElementById("total");
  let total = 0;

  if (!cartContainer) return; // prevent errors if not on cart page

  cartContainer.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price;
    cartContainer.innerHTML += `
      <div class="cart-item">
        <p>${item.name} - ₹${item.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
      </div>
    `;
  });

  totalContainer.innerText = total;
}

// Remove item from cart
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}
