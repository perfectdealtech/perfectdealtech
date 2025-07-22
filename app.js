// ========== PRODUCT DATA ==========
const products = [
  {
    id: 1,
    name: "HP Elitebook 745 G5 GAMING",
    price: 3500,
    category: "laptops",
    images: [
      "./media/laptop1/img1.jpeg",
      "./media/laptop1/img2.jpeg",
      "./media/laptop1/img3.jpeg",
      "./media/laptop1/img4.jpeg",
      "./media/laptop1/img5.jpeg",
    ],
    description: `
  <details class="spec-toggle">
    <summary>Technical Specifications</summary>
    <ul class="spec-list">
      <li>AMD Ryzen 5 PRO 2500U w/ Radeon Vega Mobile Gfx</li>
      <li>256GB NVMe SSD</li>
      <li>8GB DDR4 RAM</li>
      <li>14" Full HD display</li>
      <li>AMD Radeon RX Vega 8 Graphics - 1GB Dedicated</li>
      <li>Keyboard Backlight</li>
      <li>Fingerprint Sensor</li>
      <li>HD Camera</li>
      <li>1x USB Type-C</li>
      <li>2x USB Type-A 3.2 Gen 1</li>
      <li>HDMI, Ethernet LAN, Bluetooth</li>
      <li>3.5 mm Audio Jack</li>
      <li>2x Stereo Speakers - Bang & Olufsen</li>
      <li>Excellent Battery</li>
      <li>OEM Charger Included</li>
    </ul>
  </details>
`,
  },
  {
    id: 2,
    name: "MacBook Air (13-inch, 2015)",
    price: 2800,
    category: "laptops",
    images: [
      "./media/laptop2/img1.jpeg",
      "./media/laptop2/img2.jpeg",
      "./media/laptop2/img3.jpeg",
      "./media/laptop2/img4.jpeg",
      "./media/laptop2/img5.jpeg",
      "./media/laptop2/img6.jpeg",
    ],
    description: `
  <details class="spec-toggle">
    <summary>Technical Specifications</summary>
    <ul class="spec-list">
      <li>Intel Core i5 2.2GHz Dual-Core (Turbo Boost up to 3.2GHz)</li>
      <li>256GB PCIe-based Flash Storage</li>
      <li>4GB LPDDR3 RAM</li>
      <li>Intel HD Graphics 6000</li>
      <li>13.3-inch (Diagonal) Display</li>
      <li>Full-Size Backlit Keyboard</li>
      <li>720p FaceTime HD Camera</li>
      <li>2 USB 3 Ports</li>
      <li>Thunderbolt Port</li>
      <li>3.5 mm Headphone Jack</li>
      <li>Stereo Speakers</li>
      <li>OEM Charger Included</li>
    </ul>
  </details>
`,
  },
  {
    id: 3,
    name: "Hp EliteBook 830 G7 Touchscreen",
    price: 4300,
    category: "laptops",
    images: [
      "./media/laptop3/img1.jpeg",
      "./media/laptop3/img2.jpeg",
      "./media/laptop3/img3.jpeg",
      "./media/laptop3/img4.jpeg",
      "./media/laptop3/img5.jpeg",
    ],
    description: `
  <details class="spec-toggle">
    <summary>Technical Specifications</summary>
    <ul class="spec-list">
      <li>Intel® Core i5-10310U 10th Gen – 2.21GHz base speed with Intel Turbo Boost</li>
      <li>256GB PCIe® NVMe™ SSD</li>
      <li>16GB DDR4 RAM</li>
      <li>13.3" 1080p Full HD Touch Display</li>
      <li>Facial Recognition</li>
      <li>Touchscreen Support</li>
      <li>Fingerprint Scanner</li>
      <li>Backlit Keyboard</li>
      <li>High Definition Webcam with Microphone</li>
      <li>WLAN Wi-Fi 6 (ax) & Bluetooth 5.2</li>
      <li>3-Cell Lithium-Ion Battery</li>
      <li>Bang & Olufsen Stereo Speakers</li>
      <li>Excellent Battery Life</li>
      <li>OEM Charger Included</li>
    </ul>
  </details>
`,
  },
  {
    id: 4,
    name: "Hp EliteBook x360 1040 G8",
    price: 7000,
    category: "laptops",
    images: [
      "./media/laptop4/img1.jpeg",
      "./media/laptop4/img2.jpeg",
      "./media/laptop4/img3.jpeg",
      "./media/laptop4/img4.jpeg",
      "./media/laptop4/img5.jpeg",
      "./media/laptop4/img6.jpeg",
    ],
    description: `
  <details class="spec-toggle">
    <summary>Technical Specifications</summary>
    <ul class="spec-list">
      <li>Intel® Core i7-1185G7 11th Gen – 3.00GHz base speed with Intel Turbo Boost Technology</li>
      <li>512GB SSD Storage</li>
      <li>16GB DDR4 RAM Options</li>
      <li>14-inch 1080p Full HD Display with Integrated Privacy Screen</li>
      <li>Facial Recognition</li>
      <li>Touchscreen Support</li>
      <li>Fingerprint Scanner</li>
      <li>x360 Convertible Design</li>
      <li>Backlit Keyboard</li>
      <li>High Definition Webcam + Microphone</li>
      <li>WLAN Wi-Fi 6 (ax) & Bluetooth 5.2</li>
      <li>3-Cell Lithium-Ion Battery</li>
      <li>Bang & Olufsen Stereo Speakers</li>
      <li>Excellent Battery Life</li>
      <li>OEM Charger Included</li>
    </ul>
  </details>
`,
  },
  {
    id: 5,
    name: "HP ProBook x360 11 G5 EE",
    price: 2000,
    category: "laptops",
    images: [
      "./media/laptop5/img1.jpeg",
      "./media/laptop5/img2.jpeg",
      "./media/laptop5/img3.jpeg",
      "./media/laptop5/img4.jpeg",
      "./media/laptop5/img5.jpeg",
    ],
    description: `
  <details class="spec-toggle">
    <summary>Technical Specifications</summary>
    <ul class="spec-list">
      <li>Intel® Celeron® N4020 CPU @ 1.10GHz</li>
      <li>128GB Storage</li>
      <li>4GB DDR4 RAM</li>
      <li>Intel UHD Graphics 605</li>
      <li>11.6-inch Screen Display</li>
      <li>Touchscreen Support</li>
      <li>x360 Convertible Design</li>
      <li>2 USB Type-A Ports</li>
      <li>1 USB Type-C Port</li>
      <li>HDMI Port</li>
      <li>Ethernet LAN Port</li>
      <li>Excellent Battery Life</li>
      <li>OEM Charger Included</li>
    </ul>
  </details>
`,
  },
  {
    id: 6,
    name: "Lenovo ThinkPad L13 Yoga",
    price: 4300,
    category: "laptops",
    images: [
      "./media/laptop6/img1.jpeg",
      "./media/laptop6/img2.jpeg",
      "./media/laptop6/img3.jpeg",
      "./media/laptop6/img4.jpeg",
      "./media/laptop6/img5.jpeg",
    ],
    description: `
  <details class="spec-toggle">
    <summary>Technical Specifications</summary>
    <ul class="spec-list">
      <li>Intel Core i5-10210U 10th Gen Quad-Core @ 2.11GHz (up to 4.2GHz with Intel Turbo Boost)</li>
      <li>256GB M.2 NVMe SSD</li>
      <li>8GB DDR4 RAM (2667 MHz)</li>
      <li>13.3" 1920 × 1080 IPS Touch Display</li>
      <li>x360 Convertible Touchscreen</li>
      <li>Intel UHD Graphics 620</li>
      <li>Spill-Resistant Backlit Keyboard</li>
      <li>ThinkPad Pen Pro Included 🖊️</li>
      <li>Thunderbolt 3 / USB / HDMI Ports</li>
      <li>MicroSD Media Card Reader</li>
      <li>720p Front-Facing Webcam</li>
      <li>Integrated Fingerprint Reader</li>
      <li>Facial Recognition</li>
      <li>Windows 11 Pro (64-Bit)</li>
      <li>Excellent Battery Life</li>
      <li>OEM Charger Included</li>
    </ul>
  </details>
`,
  },
  {
    id: 7,
    name: "Lenovo Yoga 11e x360",
    price: 2650,
    category: "laptops",
    images: [
      "./media/laptop7/img1.jpeg",
      "./media/laptop7/img2.jpeg",
      "./media/laptop7/img3.jpeg",
      "./media/laptop7/img4.jpeg",
    ],
    description: `
  <details class="spec-toggle">
    <summary>Technical Specifications</summary>
    <ul class="spec-list">
      <li>Intel® Celeron® N4100 Processor</li>
      <li>128GB M.2 NVMe SSD</li>
      <li>8GB DDR4 RAM (2400 MHz)</li>
      <li>11.6-inch IPS Touch Display</li>
      <li>x360 Convertible Touchscreen</li>
      <li>Intel HD Graphics</li>
      <li>Thunderbolt 3 / USB / HDMI / Ethernet Ports</li>
      <li>Bluetooth & Wi-Fi Support</li>
      <li>SD Card Slot</li>
      <li>HD Front-Facing Webcam</li>
      <li>Excellent Battery Life</li>
      <li>OEM Accessories Included</li>
    </ul>
  </details>
`,
  },
  {
    id: 8,
    name: "HP Elitebook 745 G5 GAMING",
    price: 3700,
    category: "laptops",
    images: [
      "./media/laptop1/img1.jpeg",
      "./media/laptop1/img2.jpeg",
      "./media/laptop1/img3.jpeg",
      "./media/laptop1/img4.jpeg",
      "./media/laptop1/img5.jpeg",
    ],
    description: `
  <details class="spec-toggle">
    <summary>Technical Specifications</summary>
    <ul class="spec-list">
      <li>AMD Ryzen 5 PRO 2500U w/ Radeon Vega Mobile Gfx</li>
      <li>256GB NVMe SSD</li>
      <li>8GB DDR4 RAM</li>
      <li>14" Full HD display</li>
      <li>AMD Radeon RX Vega 8 Graphics - 2GB Dedicated</li>
      <li>Keyboard Backlight</li>
      <li>Fingerprint Sensor</li>
      <li>HD Camera</li>
      <li>1x USB Type-C</li>
      <li>2x USB Type-A 3.2 Gen 1</li>
      <li>HDMI, Ethernet LAN, Bluetooth</li>
      <li>3.5 mm Audio Jack</li>
      <li>2x Stereo Speakers - Bang & Olufsen</li>
      <li>Excellent Battery</li>
      <li>OEM Charger Included</li>
    </ul>
  </details>
`,
  },
  {
    id: 9,
    name: "MacBook Air (13-inch, 2015)",
    price: 2800,
    category: "laptops",
    images: [
      "./media/laptop2/img1.jpeg",
      "./media/laptop2/img2.jpeg",
      "./media/laptop2/img3.jpeg",
      "./media/laptop2/img4.jpeg",
      "./media/laptop2/img5.jpeg",
      "./media/laptop2/img6.jpeg",
    ],
    description: `
  <details class="spec-toggle">
    <summary>Technical Specifications</summary>
    <ul class="spec-list">
      <li>Intel Core i7 2.2GHz Dual-Core (Turbo Boost up to 3.2GHz)</li>
      <li>256GB PCIe-based Flash Storage</li>
      <li>8GB LPDDR3 RAM</li>
      <li>Intel HD Graphics 6000</li>
      <li>13.3-inch (Diagonal) Display</li>
      <li>Full-Size Backlit Keyboard</li>
      <li>720p FaceTime HD Camera</li>
      <li>2 USB 3 Ports</li>
      <li>Thunderbolt Port</li>
      <li>3.5 mm Headphone Jack</li>
      <li>Stereo Speakers</li>
      <li>OEM Charger Included</li>
    </ul>
  </details>
`,
  },
  {
    id: 10,
    name: "Hp EliteBook x360 1040 G8",
    price: 7300,
    category: "laptops",
    images: [
      "./media/laptop4/img1.jpeg",
      "./media/laptop4/img2.jpeg",
      "./media/laptop4/img3.jpeg",
      "./media/laptop4/img4.jpeg",
      "./media/laptop4/img5.jpeg",
      "./media/laptop4/img6.jpeg",
    ],
    description: `
  <details class="spec-toggle">
    <summary>Technical Specifications</summary>
    <ul class="spec-list">
      <li>Intel® Core i7-1185G7 11th Gen – 3.00GHz base speed with Intel Turbo Boost Technology</li>
      <li>512GB SSD Storage</li>
      <li>32GB DDR4 RAM Options</li>
      <li>14-inch 1080p Full HD Display with Integrated Privacy Screen</li>
      <li>Facial Recognition</li>
      <li>Touchscreen Support</li>
      <li>Fingerprint Scanner</li>
      <li>x360 Convertible Design</li>
      <li>Backlit Keyboard</li>
      <li>High Definition Webcam + Microphone</li>
      <li>WLAN Wi-Fi 6 (ax) & Bluetooth 5.2</li>
      <li>3-Cell Lithium-Ion Battery</li>
      <li>Bang & Olufsen Stereo Speakers</li>
      <li>Excellent Battery Life</li>
      <li>OEM Charger Included</li>
    </ul>
  </details>
`,
  },
];

let cart = [];

// ========== UTILITY FUNCTIONS ==========
function showNotification(message, type = "success") {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("show");
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => notification.remove(), 300);
    }, 1500);
  }, 10);
}

// ========== MOBILE MENU MODULE ==========
(function mobileMenuModule() {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  const navLinks = document.querySelectorAll(".nav-list a");

  function toggleMenu(e) {
    e.stopPropagation();
    mainNav.classList.toggle("active");
  }

  function closeMenuOnClickOutside(e) {
    const isClickInsideMenu =
      mainNav.contains(e.target) || e.target === mobileMenuToggle;
    if (!isClickInsideMenu && mainNav.classList.contains("active")) {
      mainNav.classList.remove("active");
    }
  }

  function closeMenuOnLinkClick() {
    mainNav.classList.remove("active");
  }

  function init() {
    if (mobileMenuToggle && mainNav) {
      mobileMenuToggle.addEventListener("click", toggleMenu);
      document.addEventListener("click", closeMenuOnClickOutside);
      navLinks.forEach((link) => {
        link.addEventListener("click", closeMenuOnLinkClick);
      });
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();

// ========== CART MODULE ==========
(function cartModule() {
  const cartBtns = document.querySelectorAll(".cart-btn, .cart-link");
  const cartModal = document.getElementById("cart-modal");
  const closeModalBtns = document.querySelectorAll(".close-modal");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartCountElements = document.querySelectorAll(".cart-count");
  const cartTotalAmount = document.getElementById("cart-total-amount");
  const grandTotalElement = document.getElementById("grand-total");
  const checkoutBtn = document.querySelector(".checkout-btn");

  function updateCart() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElements.forEach((count) => (count.textContent = totalItems));

    if (!cartItemsContainer || !cartTotalAmount || !grandTotalElement) return;

    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
                        <div class="empty-cart">
                            <i class="fas fa-shopping-cart"></i>
                            <p>Your cart is empty</p>
                            <a href="#products" class="btn">Continue Shopping</a>
                        </div>
                    `;
      cartTotalAmount.textContent = "0.00";
      grandTotalElement.textContent = "0.00";
      if (checkoutBtn) checkoutBtn.disabled = true;
      return;
    } else if (checkoutBtn) {
      checkoutBtn.disabled = false;
    }

    let subtotal = 0;
    cart.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      subtotal += itemTotal;

      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
                        <img src="${item.image}" alt="${
        item.name
      }" class="cart-item-image">
                        <div class="cart-item-details">
                            <h4 class="cart-item-title">${item.name}</h4>
                            <p>₵${item.price.toFixed(2)} × ${item.quantity}</p>
                            <p class="cart-item-price">₵${itemTotal.toFixed(
                              2
                            )}</p>
                        </div>
                        <button class="cart-item-remove" data-id="${
                          item.id
                        }">&times;</button>
                    `;
      cartItemsContainer.appendChild(cartItem);
    });

    const deliveryFee = 5;
    const grandTotal = subtotal + deliveryFee;
    cartTotalAmount.textContent = subtotal.toFixed(2);
    grandTotalElement.textContent = grandTotal.toFixed(2);

    document.querySelectorAll(".cart-item-remove").forEach((btn) => {
      btn.addEventListener("click", () =>
        removeFromCart(parseInt(btn.dataset.id))
      );
    });
  }

  function addToCart(product) {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1,
        image: product.images[0],
      });
    }
    updateCart();
    showNotification("Item added to cart!");
  }

  function removeFromCart(productId) {
    cart = cart.filter((item) => item.id !== productId);
    updateCart();
    showNotification("Item removed from cart!");
  }

  function init() {
    // Cart modal controls
    cartBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (cartModal) {
          cartModal.style.display = "flex";
          document.body.classList.add("modal-open");
          updateCart();
        }
      });
    });

    // Close modal handlers
    closeModalBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        if (modal) {
          modal.style.display = "none";
          document.body.classList.remove("modal-open");
        }
      });
    });

    // Close when clicking outside modal
    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal")) {
        e.target.style.display = "none";
        document.body.classList.remove("modal-open");
      }
    });

    // Expose functions to global scope
    window.getCart = () => cart;
    window.addToCart = addToCart;
    window.updateCart = updateCart;
  }

  document.addEventListener("DOMContentLoaded", init);
})();

// ========== PRODUCT MODAL MODULE ==========
(function productModalModule() {
  const productModal = document.getElementById("product-modal");
  if (!productModal) return; // Exit if modal not found

  const productGallery = productModal.querySelector(".product-gallery");
  const productDetails = productModal.querySelector(".product-details");
  const galleryPrev = productModal.querySelector(".gallery-prev");
  const galleryNext = productModal.querySelector(".gallery-next");
  const galleryIndicators = productModal.querySelector(".gallery-indicators");
  let currentSlide = 0;

  // Create and inject video styles
  const videoStyles = document.createElement("style");
  videoStyles.textContent = `
    .product-gallery {
      display: flex;
      transition: transform 0.3s ease;
      height: 400px; /* Fixed height for gallery */
    }
    
    .product-gallery > * {
      min-width: 100%;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #000;
    }
    
    .product-gallery img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
    
    .video-container {
      position: relative;
      width: 100%;
      height: 80%;
    }
    
    .product-video {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
      background: #000;
    }
    
    .video-play-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      background: rgba(0, 0, 0, 0.6);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 24px;
      cursor: pointer;
      z-index: 10;
      transition: opacity 0.3s;
    }
    
    .video-play-button.hidden {
      opacity: 0;
      pointer-events: none;
    }
    
    .gallery-indicators {
      display: flex;
      justify-content: center;
      margin-top: 15px;
    }
    
    .gallery-indicator {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #ccc;
      margin: 0 5px;
      cursor: pointer;
    }
    
    .gallery-indicator.active {
      background: #333;
    }
  `;
  document.head.appendChild(videoStyles);

  function updateGallery() {
    if (!productGallery.children.length) return;
    const slideWidth = productGallery.clientWidth;
    productGallery.style.transform = `translateX(-${
      currentSlide * slideWidth
    }px)`;

    if (galleryIndicators) {
      document
        .querySelectorAll(".gallery-indicator")
        .forEach((indicator, index) => {
          indicator.classList.toggle("active", index === currentSlide);
        });
    }
  }

  function goToSlide(index) {
    currentSlide = index;
    updateGallery();

    document.querySelectorAll(".product-gallery img").forEach((img) => {
      img.classList.remove("zoomed");
      img.style.transform = "scale(1)";
      img.style.transformOrigin = "center center";
    });
  }

  // Helper function to create image element
  function createImageElement(src, alt) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    img.loading = "lazy";

    // Double-tap zoom functionality
    let lastTap = 0;
    img.addEventListener("touchend", function (e) {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;

      if (tapLength < 300 && tapLength > 0) {
        e.preventDefault();
        const touch = e.changedTouches[0];
        toggleImageZoom(img, touch.clientX, touch.clientY);
      }

      lastTap = currentTime;
    });

    // Double-click for desktop
    img.addEventListener("dblclick", function (e) {
      e.stopPropagation();
      toggleImageZoom(img, e.clientX, e.clientY);
    });

    return img;
  }

  // New function to handle zoom toggle
  function toggleImageZoom(img, x = null, y = null) {
    const zoomed = img.classList.contains("zoomed");

    if (zoomed) {
      img.classList.remove("zoomed");
      img.style.transform = "scale(1)";
      img.style.transformOrigin = "center center";
    } else {
      // Reset other zoomed images
      document
        .querySelectorAll(".product-gallery img.zoomed")
        .forEach((zoomedImg) => {
          zoomedImg.classList.remove("zoomed");
          zoomedImg.style.transform = "scale(1)";
          zoomedImg.style.transformOrigin = "center center";
        });

      img.classList.add("zoomed");
      img.style.transform = "scale(2.5)";

      if (x !== null && y !== null) {
        const rect = img.getBoundingClientRect();
        const originX = ((x - rect.left) / rect.width) * 100;
        const originY = ((y - rect.top) / rect.height) * 100;

        img.style.transformOrigin = `${originX}% ${originY}%`;
      } else {
        img.style.transformOrigin = "center center";
      }
    }
  }

  // Helper function to create video element
  function createVideoElement(src) {
    const container = document.createElement("div");
    container.className = "video-container";

    const video = document.createElement("video");
    video.src = src;
    video.controls = true;
    video.muted = true;
    video.autoplay = false;
    video.loop = true;
    video.playsInline = true;
    video.className = "product-video";

    const playButton = document.createElement("div");
    playButton.className = "video-play-button";
    playButton.innerHTML = "▶";

    playButton.addEventListener("click", () => {
      video.play();
      playButton.classList.add("hidden");
    });

    video.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        playButton.classList.add("hidden");
      } else {
        video.pause();
        playButton.classList.remove("hidden");
      }
    });

    video.addEventListener("play", () => playButton.classList.add("hidden"));
    video.addEventListener("pause", () =>
      playButton.classList.remove("hidden")
    );

    container.appendChild(video);
    container.appendChild(playButton);
    return container;
  }

  // Swipe navigation function
  function enableSwipeNavigation(container, onSwipeLeft, onSwipeRight) {
    let startX = 0;
    let endX = 0;

    container.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    container.addEventListener("touchmove", (e) => {
      endX = e.touches[0].clientX;
    });

    container.addEventListener("touchend", () => {
      const deltaX = startX - endX;
      const threshold = 50; // Minimum swipe distance

      if (deltaX > threshold) {
        onSwipeLeft(); // Swipe left → next
      } else if (deltaX < -threshold) {
        onSwipeRight(); // Swipe right → previous
      }

      startX = 0;
      endX = 0;
    });
  }

  function openProductModal(product) {
    currentSlide = 0; // Reset to first slide
    if (!productGallery || !productDetails || !galleryIndicators) return;

    // Clear existing content
    productGallery.innerHTML = "";
    productDetails.innerHTML = "";
    galleryIndicators.innerHTML = "";

    // Create media elements
    product.images.forEach((mediaSrc, index) => {
      const isVideo = mediaSrc.toLowerCase().endsWith(".mp4");
      const mediaElement = isVideo
        ? createVideoElement(mediaSrc)
        : createImageElement(mediaSrc, `${product.name} - Image ${index + 1}`);

      productGallery.appendChild(mediaElement);

      // Create indicator
      const indicator = document.createElement("div");
      indicator.className = "gallery-indicator";
      if (index === 0) indicator.classList.add("active");
      indicator.addEventListener("click", () => goToSlide(index));
      galleryIndicators.appendChild(indicator);
    });

    // Create product details
    productDetails.innerHTML = `
      <h2>${product.name}</h2>
      <p class="product-price">₵${product.price.toFixed(2)}</p>
      <div>${product.description}</div>
      <button class="btn btn-primary add-to-cart" data-id="${
        product.id
      }">Add to Cart</button>
    `;

    // Force gallery reset before showing
    setTimeout(() => {
      updateGallery();
      productGallery.style.transition = "none";
      productGallery.style.transform = "translateX(0)";

      setTimeout(() => {
        productGallery.style.transition = "";
        updateGallery();
      }, 50);
    }, 10);

    // Show modal
    productModal.style.display = "flex";
    document.body.classList.add("modal-open");

    // Enable swipe navigation
    enableSwipeNavigation(
      productGallery,
      () => {
        // Swipe left
        if (currentSlide < productGallery.children.length - 1) {
          goToSlide(currentSlide + 1);
        }
      },
      () => {
        // Swipe right
        if (currentSlide > 0) {
          goToSlide(currentSlide - 1);
        }
      }
    );

    currentSlide = 0;
    updateGallery();
  }

  // Navigation handlers
  if (galleryPrev) {
    galleryPrev.addEventListener("click", () =>
      goToSlide(Math.max(0, currentSlide - 1))
    );
  }

  if (galleryNext) {
    galleryNext.addEventListener("click", () =>
      goToSlide(Math.min(productGallery.children.length - 1, currentSlide + 1))
    );
  }

  // Close modal
  const closeModal = productModal.querySelector(".close-modal");
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      productModal.style.display = "none";
      document.body.classList.remove("modal-open");

      // Reset image zoom
      const galleryImages = productGallery.querySelectorAll("img");
      galleryImages.forEach((img) => {
        img.classList.remove("zoomed");
        img.style.transform = "scale(1)";
        img.style.transformOrigin = "center center";
      });
    });
  }

  // Close when clicking outside modal
  productModal.addEventListener("click", (e) => {
    if (e.target === productModal) {
      productModal.style.display = "none";
      document.body.classList.remove("modal-open");

      // Reset image zoom
      const galleryImages = productGallery.querySelectorAll("img");
      galleryImages.forEach((img) => {
        img.classList.remove("zoomed");
        img.style.transform = "scale(1)";
        img.style.transformOrigin = "center center";
      });
    }
  });

  // Prevent unwanted zoom on double-click outside gallery
  productModal.addEventListener("dblclick", (e) => {
    const gallery = productModal.querySelector(".product-gallery");
    if (!gallery.contains(e.target)) {
      e.preventDefault();
    }
  });

  // View details button handler
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-details")) {
      const productCard = e.target.closest(".product-card");
      if (productCard) {
        const productId = parseInt(productCard.dataset.id);
        const product = products.find((p) => p.id === productId);
        if (product) openProductModal(product);
      }
    }
  });

  // Initialize gallery
  updateGallery();
  window.openProductModal = openProductModal;
})();

// ========== CHECKOUT MODULE ==========
(function checkoutModule() {
  const checkoutModal = document.getElementById("checkout-modal");
  const checkoutForm = document.getElementById("customer-checkout-form");
  const checkoutFormMessage = document.getElementById("checkout-form-message");
  const closeCheckoutBtns = document.querySelectorAll(
    "#checkout-modal .close-modal"
  );
  const cancelCheckoutBtn = document.querySelector(".cancel-checkout");
  const submitOrderBtn = document.querySelector(".submit-order");
  const cartModal = document.getElementById("cart-modal");
  const checkoutBtn = document.querySelector(".checkout-btn");

  function showFormMessage(message, type = "error") {
    if (checkoutFormMessage) {
      checkoutFormMessage.textContent = message;
      checkoutFormMessage.className = `form-message ${type}`;
      checkoutFormMessage.style.display = "block";
    }
  }

  function hideFormMessage() {
    if (checkoutFormMessage) {
      checkoutFormMessage.style.display = "none";
    }
  }

  function sendOrderToWhatsApp(name, phone, address, notes) {
    const cartItems = window.getCart ? window.getCart() : [];
    if (cartItems.length === 0) {
      showFormMessage("Your cart is empty!", "error");
      return false;
    }

    let message = `📋 *NEW ORDER - Perfect Deal Technologies* 📋\n\n`;
    message += `👤 *Customer:* ${name}\n`;
    message += `📞 *Phone:* ${phone}\n`;
    message += `🏠 *Address:* ${address}\n\n`;
    message += `🛒 *Order Items:*\n`;

    let subtotal = 0;
    cartItems.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      message += `➤ ${item.name} (Qty: ${item.quantity}) - ₵${itemTotal.toFixed(
        2
      )}\n`;
      subtotal += itemTotal;
    });

    const deliveryFee = 5;
    const grandTotal = subtotal + deliveryFee;

    message += `\n💰 *Subtotal:* ₵${subtotal.toFixed(2)}\n`;
    message += `🚚 *Delivery Fee:* ₵${deliveryFee.toFixed(2)}\n`;
    message += `💵 *Total:* ₵${grandTotal.toFixed(2)}\n\n`;

    if (notes) message += `📝 *Special Instructions:* ${notes}\n\n`;
    message += `⏰ *Order Time:* ${new Date().toLocaleString()}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/233203655458?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    // Clear cart
    if (window.updateCart) {
      cart.length = 0;
      window.updateCart();
    }

    checkoutModal.style.display = "none";
    document.body.classList.remove("modal-open");
    checkoutForm.reset();
    return true;
  }

  function init() {
    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const cartItems = window.getCart ? window.getCart() : [];

        if (cartItems.length === 0) {
          showNotification("Your cart is empty!", "error");
          return;
        }

        if (cartModal) cartModal.style.display = "none";
        if (checkoutModal) {
          checkoutModal.style.display = "flex";
          document.body.classList.add("modal-open");
          hideFormMessage();
        }
      });
    }

    if (checkoutForm) {
      checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("customer-name").value.trim();
        const phone = document.getElementById("customer-phone").value.trim();
        const address = document
          .getElementById("customer-address")
          .value.trim();
        const notes = document.getElementById("customer-notes").value.trim();

        if (!name || !phone || !address) {
          showFormMessage("Please fill in all required fields", "error");
          return;
        }

        sendOrderToWhatsApp(name, phone, address, notes);
      });
    }

    if (cancelCheckoutBtn) {
      cancelCheckoutBtn.addEventListener("click", () => {
        checkoutModal.style.display = "none";
        document.body.classList.remove("modal-open");
        checkoutForm.reset();
        hideFormMessage();
        if (cartModal) {
          cartModal.style.display = "flex";
          document.body.classList.add("modal-open");
        }
      });
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();

// ========== FORM SUBMISSIONS ==========
(function formModules() {
  document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const newsletterForm = document.querySelector(".newsletter-form");

    if (contactForm) {
      contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);

        try {
          const response = await fetch(contactForm.action, {
            method: contactForm.method,
            body: formData,
            headers: {
              Accept: "application/json",
            },
          });

          if (response.ok) {
            showNotification(
              "Thank you for your message! We will get back to you soon."
            );
            contactForm.reset();
          } else {
            showNotification("There was a problem submitting your message.");
          }
        } catch (error) {
          showNotification("Network error. Please try again later.");
        }
      });
    }

    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector("input").value;
        showNotification("Thank you for subscribing to our newsletter!");
        newsletterForm.reset();
      });
    }
  });
})();

// ========== GLOBAL EVENT LISTENERS ==========
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const productId = parseInt(e.target.dataset.id);
    const product = products.find((p) => p.id === productId);
    if (product && window.addToCart) {
      window.addToCart(product);

      // Close the product modal if visible
      const productModal = document.getElementById("product-modal");
      if (productModal && productModal.style.display === "flex") {
        productModal.style.display = "none";
        document.body.classList.remove("modal-open");
      }
    }
  }
});

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.getElementById("products-container");

  // Generate product cards
  products.forEach((product) => {
    const productCard = document.createElement("article");
    productCard.className = "product-card";
    productCard.dataset.category = product.category;
    productCard.dataset.id = product.id;

    productCard.innerHTML = `
      <div class="product-image">
        <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="product-category">${product.category}</p>
        <p class="product-price">₵${product.price.toFixed(2)}</p>
        <div class="product-buttons">
          <button class="btn view-details">View Details</button>
          <button class="btn add-to-cart" data-id="${
            product.id
          }">Add to Cart</button>
        </div>
      </div>
    `;

    productsContainer.appendChild(productCard);
  });

  // Add Filter Functionality AFTER products are loaded
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.category;

      // Highlight active button
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Show/hide product cards
      productCards.forEach((card) => {
        const cardCategory = card.dataset.category;
        if (category === "all" || cardCategory === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
