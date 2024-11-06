let data = localStorage.getItem("cart");
if (data) {
  cart = JSON.parse(data);
} else {
  cart = [];
}

let coinsData = localStorage.getItem("coins");
if (coinsData) {
  console.log(coinsData);
} else {
  localStorage.setItem("coins", 0);
}

let coinsDiv = document.querySelector(".coin-count");
coinsDiv.innerText = coinsData;

const cartCount = [...document.getElementsByClassName("count")];
cartCount.forEach((item) => {
  item.innerHTML = cart.length;
});

const categoryItems = [
  { img: "dress", name: "Clothes" },
  {
    img: "shoes",
    name: "Footwear",
  },
  {
    img: "jewelry",
    name: "Jewelry",
  },

  {
    img: "perfume",
    name: "Perfume",
  },
  {
    img: "cosmetics",
    name: "Cosmetics",
  },
  {
    img: "glasses",
    name: "Glasses",
  },
  {
    img: "bag",
    name: "Bags",
  },
];

const bestSellerItems = [
  { name: "Baby Fabric Shoes", oldPrice: "610", newPrice: "449" },
  { name: "Men's Hoodies T-Shirts", oldPrice: "1249", newPrice: "945" },
  { name: "Girls' T-Shirts", oldPrice: "1599", newPrice: "1450" },
  { name: "Woolen Hat For Men", oldPrice: "420", newPrice: "340" },
];

const trendingItems = [
  {
    id: 1,
    img: "sports-1",
    name: "Running & Trekking Shoes - White",
    oldPrice: "940",
    newPrice: "790",
  },
  {
    id: 2,
    img: "sports-2",
    name: "Trekking & Running Shoes - black",
    oldPrice: "1890",
    newPrice: "450",
  },
  {
    id: 3,
    img: "party-wear-1",
    name: "Womens Party Wear Shoes",
    oldPrice: "890",
    newPrice: "729",
  },
  {
    id: 4,
    img: "sports-3",
    name: "Sports Claw Women's Shoes",
    oldPrice: "1049",
    newPrice: "125",
  },
];

const newArrivalItems = [
  {
    id: 5,
    img: "clothes-1",
    name: "Relaxed Short full Sleeve T-Shirt",
    oldPrice: "940",
    newPrice: "790",
  },
  {
    id: 6,
    img: "clothes-2",
    name: "Girls pnk Embro design Top",
    oldPrice: "1890",
    newPrice: "450",
  },
  {
    id: 7,
    img: "shirt-1",
    name: "Pure Garment Dyed Cotton Shirt",
    oldPrice: "890",
    newPrice: "729",
  },
  {
    id: 8,
    img: "jacket-5",
    name: "MEN Yarn Fleece Full-Zip Jacket",
    oldPrice: "1049",
    newPrice: "125",
  },
];

const newProducts = [
  {
    id: 9,
    img1: "jacket-3",
    img2: "jacket-4",
    name: "Mens Winter Leathers Jackets",
    oldPrice: "650",
    newPrice: "569",
  },
  {
    id: 10,
    img1: "shirt-1",
    img2: "shirt-2",
    name: "Pure Garment Dyed Cotton Shirt",
    oldPrice: "650",
    newPrice: "569",
  },
  {
    id: 11,
    img1: "jacket-5",
    img2: "jacket-6",
    name: "MEN Yarn Fleece Full-Zip Jacket",
    oldPrice: "650",
    newPrice: "569",
  },
  {
    id: 12,
    img1: "clothes-3",
    img2: "clothes-4",
    name: "Black Floral Wrap Midi Skirt",
    oldPrice: "650",
    newPrice: "569",
  },
  {
    id: 13,
    img1: "shoe-2",
    img2: "shoe-2_1",
    name: "Casual Men's Brown shoes",
    oldPrice: "650",
    newPrice: "569",
  },
  {
    id: 14,
    img1: "watch-3",
    img2: "watch-4",
    name: "Pocket Watch Leather Pouch",
    oldPrice: "650",
    newPrice: "569",
  },
  {
    id: 15,
    img1: "watch-1",
    img2: "watch-2",
    name: "Smart watche Vital Plus",
    oldPrice: "650",
    newPrice: "569",
  },
  {
    id: 16,
    img1: "party-wear-1",
    img2: "party-wear-2",
    name: "Womens Party Wear Shoes",
    oldPrice: "650",
    newPrice: "569",
  },
  {
    id: 17,
    img1: "jacket-1",
    img2: "jacket-2",
    name: "Mens Winter Leathers Jackets",
    oldPrice: "650",
    newPrice: "569",
  },
  {
    id: 18,
    img1: "sports-2",
    img2: "sports-4",
    name: "Trekking & Running Shoes - black",
    oldPrice: "650",
    newPrice: "569",
  },
  {
    id: 19,
    img1: "shoe-1",
    img2: "shoe-1_1",
    name: "Men's Leather Formal Wear shoes",
    oldPrice: "650",
    newPrice: "569",
  },
  {
    id: 20,
    img1: "shorts-1",
    img2: "shorts-2",
    name: "Better Basics French Terry Sweatshorts",
    oldPrice: "650",
    newPrice: "569",
  },
];

//category items display
let categoryContainer = document.getElementById("category-item-container");
categoryItems.forEach((item) => {
  const htmlToAdd = `<li class="sidebar-menu-category">
    <button class="sidebar-accordion-menu" data-accordion-btn>
      <div class="menu-title-flex">
        <img
          src="./assets/images/icons/${item.img}.svg"
          alt="${item.name}"
          width="20"
          height="20"
          class="menu-title-img"
        />

        <p class="menu-title">${item.name}</p>
      </div>

      <div>
        <ion-icon name="add-outline" class="add-icon"></ion-icon>
        <ion-icon
          name="remove-outline"
          class="remove-icon"
        ></ion-icon>
      </div>
    </button>
  </li>`;
  categoryContainer.insertAdjacentHTML("beforeend", htmlToAdd);
});

//Best sellers items display
let bestSellerContainer = document.getElementById("best-seller-container");
bestSellerItems.forEach((item, i) => {
  const htmlToAdd = `<div class="showcase">
    <a href="#" class="showcase-img-box">
      <img
        src="./assets/images/products/${i + 1}.jpg"
        alt=${item.name}
        width="75"
        height="75"
        class="showcase-img"
      />
    </a>

    <div class="showcase-content">
      <a href="#">
        <h4 class="showcase-title">${item.name}</h4>
      </a>

      <div class="showcase-rating">
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
      </div>

      <div class="price-box">
        <del>Rs.${item.oldPrice}</del>
        <p class="price">Rs.${item.newPrice}</p>
      </div>
    </div>
  </div>`;
  bestSellerContainer.insertAdjacentHTML("beforeend", htmlToAdd);
});

//products
let newArrivalsContainer = document.getElementById("new-arrivals-container");
newArrivalItems.forEach((item) => {
  const param = encodeURIComponent(JSON.stringify(item));
  const htmlToAdd = `<div class="showcase">
    <a href="#" class="showcase-img-box">
      <img
        src="./assets/images/products/${item.img}.jpg"
        alt=${item.name}
        width="70"
        class="showcase-img"
      />
    </a>

    <div class="showcase-content">
      <a href="#">
        <h4 class="showcase-title">
        ${item.name}
        </h4>
      </a>

      <a href="#" class="showcase-category">Clothes</a>

      <div class="price-box">
        <p class="price">Rs.${item.newPrice}</p>
        <del>Rs.${item.oldPrice}</del>
      </div>
      <button class="add-cart-btn" onclick="addToCart(this)" data-item=${param}>add to cart</button>
    </div>
  </div>`;

  newArrivalsContainer.insertAdjacentHTML("beforeend", htmlToAdd);
});

let trendngContainer = document.getElementById("trending-container");
trendingItems.forEach((item) => {
  const param = encodeURIComponent(JSON.stringify(item));
  const htmlToAdd = `<div class="showcase">
    <a href="#" class="showcase-img-box">
      <img
        src="./assets/images/products/${item.img}.jpg"
        alt=${item.name}
        width="70"
        class="showcase-img"
      />
    </a>

    <div class="showcase-content">
      <a href="#">
        <h4 class="showcase-title">
        ${item.name}
        </h4>
      </a>

      <a href="#" class="showcase-category">Clothes</a>

      <div class="price-box">
        <p class="price">Rs.${item.newPrice}</p>
        <del>Rs.${item.oldPrice}</del>
        

      </div>
      <button class="add-cart-btn" onclick="addToCart(this)" data-item=${param}>add to cart</button>
      
    </div>
  </div>`;

  trendngContainer.insertAdjacentHTML("beforeend", htmlToAdd);
});

//new products
const newProductsContainer = document.getElementById("new-products-container");
newProducts.forEach((item) => {
  const param = encodeURIComponent(JSON.stringify(item));
  const htmlToAdd = `<div class="showcase">
    <div class="showcase-banner">
      <img
        src="./assets/images/products/${item.img1}.jpg"
        alt=${item.name}
        width="300"
        class="product-img default"
      />
      <img
        src="./assets/images/products/${item.img2}.jpg"
        alt=${item.name}
        width="300"
        class="product-img hover"
      />

  
      <div class="showcase-actions">
        <button class="btn-action">
          <ion-icon name="eye-outline"></ion-icon>
        </button>
  
        <button class="btn-action">
          <ion-icon name="repeat-outline"></ion-icon>
        </button>
  
        <button class="btn-action"  onclick="addToCart(this)" data-item=${param}>
          <ion-icon name="bag-add-outline" ></ion-icon>
        </button>
      </div>
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
        <p class="price">Rs.${item.newPrice}</p>
        <del>Rs.${item.oldPrice}</del>
      </div>
      <div class="add-cart-btn-container"><button class="add-cart-btn" onclick="addToCart(this)" data-item=${param}>add to cart</button></div>
    </div>
  </div>`;

  newProductsContainer.insertAdjacentHTML("beforeend", htmlToAdd);
});

const dealContainer = document.getElementById("deal-container");
const dealProduct = {
  id: 21,
  img: "shampoo",
  name: "shampoo, conditioner & facewash packs",
  oldPrice: "1049",
  newPrice: "990",
};

const param = encodeURIComponent(JSON.stringify(dealProduct));
const dealProductHTML = `<div class="showcase">
<div class="showcase-banner">
  <img
    src="./assets/images/products/${dealProduct.img}.jpg"
    alt=${dealProduct.title}
    class="showcase-img"
  />
</div>

<div class="showcase-content">
  <div class="showcase-rating">
    <ion-icon name="star"></ion-icon>
    <ion-icon name="star"></ion-icon>
    <ion-icon name="star"></ion-icon>
    <ion-icon name="star-outline"></ion-icon>
    <ion-icon name="star-outline"></ion-icon>
  </div>

  <a href="#">
    <h3 class="showcase-title">
      ${dealProduct.name}
    </h3>
  </a>

  <p class="showcase-desc">
    Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
    dolor sit amet consectetur Lorem ipsum dolor
  </p>

  <div class="price-box">
    <p class="price">Rs.${dealProduct.newPrice}</p>

    <del>Rs.${dealProduct.oldPrice}</del>
  </div>

  <button class="add-cart-btn" onclick="addToCart(this)" data-item=${param}>add to cart</button>

  <div class="showcase-status">
    <div class="wrapper">
      <p>already sold: <b>20</b></p>

      <p>available: <b>40</b></p>
    </div>

    <div class="showcase-status-bar"></div>
  </div>

  <div class="countdown-box">
    <p class="countdown-desc">Hurry Up! Offer ends in:</p>

    <div class="countdown">
      <div class="countdown-content">
        <p class="display-number">360</p>

        <p class="display-text">Days</p>
      </div>

      <div class="countdown-content">
        <p class="display-number">24</p>
        <p class="display-text">Hours</p>
      </div>

      <div class="countdown-content">
        <p class="display-number">59</p>
        <p class="display-text">Min</p>
      </div>

      <div class="countdown-content">
        <p class="display-number">00</p>
        <p class="display-text">Sec</p>
      </div>
    </div>
  </div>
</div>
</div>`;
dealContainer.insertAdjacentHTML("beforeend", dealProductHTML);

function addToCart(event) {
  const str = event.getAttribute("data-item");
  const productObj = JSON.parse(decodeURIComponent(str));

  let alreadyPresent = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === productObj.name) alreadyPresent = true;
  }
  if (!alreadyPresent) {
    cart = [...cart, productObj];
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  cartCount.forEach((item) => {
    item.innerHTML = cart.length;
  });

  Toastify({
    text: alreadyPresent ? "Item already in cart" : "Item added to cart",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background: alreadyPresent ? "red" : "green",
      display: "flex",
      width: "max-content",
    },
  }).showToast();
}

function gotoCart() {
  window.location = window.location.origin + "/cart";
}
