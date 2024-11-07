let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartContainer = document.getElementById("cart-container");
if (cart.length < 1) {
  cartContainer.innerHTML = `<h2 class="banner-title">CART IS EMPTY</h2>`;
  cartContainer.style.display = "flex";
  cartContainer.style.justifyContent = "center";
}

// Display cart items
cart.forEach((item) => {
  const newPrice = item.newPrice ? item.newPrice : item.price;
  const img = item.img ? item.img : item.img1;
  const param = encodeURIComponent(JSON.stringify(item));
  const htmlToAdd = `
    <div class="showcase">
      <div class="showcase-banner showcase-banner-cart">
        <img src="./assets/images/products/${img}.jpg" alt="${item.name}" width="300" class="product-img-cart" />
      </div>
      <div class="showcase-content">
        <a href="#">
          <h3 class="showcase-title">${item.name}</h3>
        </a>
        <div class="showcase-rating">
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
        </div>
        <div class="price-box">
          <p class="price">Rs.${newPrice}</p>
        </div>
        <div class="add-cart-btn-container">
          <button class="add-cart-btn" onclick="removeFromCart(this)" data-item=${param}>remove from cart</button>
        </div>
      </div>
    </div>
  `;
  cartContainer.insertAdjacentHTML("beforeend", htmlToAdd);
});

// Function to remove item from cart
function removeFromCart(event) {
  const str = event.getAttribute("data-item");
  const productObj = JSON.parse(decodeURIComponent(str));

  cart = cart.filter((item) => item.name != productObj.name);
  localStorage.setItem("cart", JSON.stringify(cart));

  Toastify({
    text: "Item removed from cart",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: { background: "green", display: "flex", width: "max-content" },
    callback: function () {
      location.reload();
    },
  }).showToast();
}

// Redirect to home page function
function gotoHome() {
  window.location = window.location.origin;
}

// PayPal Integration
document.getElementById("place-order-btn").addEventListener("click", (e) => {
  e.preventDefault();

  // Show PayPal button
  document.getElementById("place-order-btn").style.display = "none";
  document.getElementById("paypal-button-container").style.display = "block";

  // Load the PayPal button into the container
  paypal.Buttons({
    createOrder: (data, actions) => {
      // Use calculateTotalAmount() for dynamic transaction amount
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: 500.0 // function to calculate cart total
          }
        }]
      });
    },
    onApprove: (data, actions) => {
      return actions.order.capture().then(function(details) {
        // Success message
        Toastify({
          text: "Order placed successfully!",
          duration: 3000,
          close: true,
          gravity: "top",
          position: "right",
          backgroundColor: "#4CAF50",
          stopOnFocus: true,
        }).showToast();

        // Redirect to success page
        setTimeout(() => {
          window.location.href = "order-success.html";
        }, 3000);
      });
    },
    onError: (err) => {
      console.error("PayPal error:", err);
      Toastify({
        text: "Payment error. Please try again.",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: "#FF0000",
        stopOnFocus: true,
      }).showToast();
    }
  }).render("#paypal-button-container");
});

// Function to calculate the total amount
function calculateTotalAmount() {
  let totalAmount = 0;
  cart.forEach(item => {
    totalAmount += item.newPrice ? item.newPrice : item.price;
  });
  return totalAmount.toFixed(2); // Format to 2 decimal places
}
