const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const cartDiscount = document.getElementById('cart-discount');
const checkoutButton = document.getElementById('checkout-btn');
const signupForm = document.getElementById('signup-form');
const contactForm = document.getElementById('contact-form');
const detailModal = document.getElementById('detail-modal');
const loginModal = document.getElementById('customer-login-modal');
const toastContainer = document.getElementById('toast-container');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalExtra = document.getElementById('modal-extra');
const modalAction = document.getElementById('modal-action');
const detailClose = document.getElementById('detail-close');
const loginClose = document.getElementById('login-close');
const customerLoginBtn = document.getElementById('customer-login-btn');
const customerLogoutBtn = document.getElementById('customer-logout-btn');
const userPill = document.getElementById('user-pill');
const loginForm = document.getElementById('customer-login-form');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const heroOrderBtn = document.getElementById('hero-order-btn');
const checkoutForm = document.getElementById('checkout-form');
const checkoutOutlet = document.getElementById('checkout-outlet');
const checkoutPayment = document.getElementById('checkout-payment');
const voucherCode = document.getElementById('voucher-code');
const orderStatus = document.getElementById('order-status');

const cart = JSON.parse(localStorage.getItem('kopiKenanganCart') || '[]');
let activeProduct = null;

menuToggle?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;
    productCards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.category === filter;
      card.style.display = matches ? 'block' : 'none';
    });
  });
});

document.querySelectorAll('.btn-add').forEach((button) => {
  button.addEventListener('click', () => {
    const name = button.dataset.name;
    const price = Number(button.dataset.price);
    if (!customerIsLoggedIn()) {
      openLoginModal('login');
      return;
    }
    addToCart(name, price);
  });
});

heroOrderBtn?.addEventListener('click', () => {
  if (!customerIsLoggedIn()) {
    openLoginModal('order');
    return;
  }
  window.location.hash = '#order';
});

document.querySelectorAll('.btn-detail').forEach((button) => {
  button.addEventListener('click', () => {
    const product = button.closest('.product-card');
    if (!product) return;

    activeProduct = {
      name: product.querySelector('h3')?.textContent || 'Produk',
      price: Number(product.dataset.price) || 0,
      description: product.dataset.description || '',
      details: product.dataset.details || '',
    };

    showModal(activeProduct);
  });
});

document.querySelectorAll('.btn-promo').forEach((button) => {
  button.addEventListener('click', () => {
    const promo = button.closest('.promo-card');
    if (!promo) return;

    const code = promo.dataset.code || '';
    const title = promo.dataset.title || 'Promo Spesial';
    const valid = promo.dataset.valid || '';
    if (voucherCode && code) voucherCode.value = code;
    showToast(`${title} diterapkan. Berlaku: ${valid}.`, 'success');
    window.location.hash = '#order';
    renderCart();
  });
});
document.querySelectorAll('.btn-outlet').forEach((button) => {
  button.addEventListener('click', () => {
    const outlet = button.closest('.outlet-card');
    if (!outlet) return;

    const name = outlet.dataset.name || 'Outlet';
    const address = outlet.dataset.address || '';
    const hours = outlet.dataset.hours || '';
    const status = outlet.dataset.status || '';
    alert(`${name}\n${address}\nJam: ${hours}\nStatus: ${status}`);
  });
});

modalAction?.addEventListener('click', () => {
  if (!activeProduct) return;
  if (!customerIsLoggedIn()) {
    hideModal();
    openLoginModal('order');
    return;
  }
  addToCart(activeProduct.name, activeProduct.price);
  hideModal();
});

detailModal?.addEventListener('click', (event) => {
  if (event.target === detailModal) {
    hideModal();
  }
});

function showModal(product) {
  if (!detailModal || !modalTitle || !modalDescription || !modalExtra) return;

  modalTitle.textContent = product.name;
  modalDescription.textContent = product.description;
  modalExtra.innerHTML = `<p>${product.details}</p><p class="modal-price">Harga: Rp ${product.price.toLocaleString('id-ID')}</p>`;
  detailModal.classList.add('open');
  detailModal.setAttribute('aria-hidden', 'false');
}

function hideModal() {
  if (!detailModal) return;
  detailModal.classList.remove('open');
  detailModal.setAttribute('aria-hidden', 'true');
  activeProduct = null;
}

function openLoginModal(reason) {
  if (!loginModal) return;
  loginModal.dataset.reason = reason || 'login';
  loginModal.classList.add('open');
  loginModal.setAttribute('aria-hidden', 'false');
}

function closeLoginModal() {
  if (!loginModal) return;
  loginModal.classList.remove('open');
  loginModal.setAttribute('aria-hidden', 'true');
}

function showToast(message, type = 'info') {
  if (!toastContainer) return;
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('visible');
  }, 10);
  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function customerIsLoggedIn() {
  return sessionStorage.getItem('kopiKenanganCustomer') === 'true';
}

function updateUserUI() {
  const email = sessionStorage.getItem('kopiKenanganCustomerEmail');
  if (customerIsLoggedIn() && userPill && customerLogoutBtn && customerLoginBtn) {
    userPill.hidden = false;
    customerLogoutBtn.hidden = false;
    customerLoginBtn.hidden = true;
    userPill.textContent = `Hi, ${email ?? 'Pelanggan'}`;
  } else if (userPill && customerLogoutBtn && customerLoginBtn) {
    userPill.hidden = true;
    customerLogoutBtn.hidden = true;
    customerLoginBtn.hidden = false;
  }
  renderCart();
}

function addToCart(name, price) {
  const existingItem = cart.find((item) => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  saveCart();
  renderCart();
  showToast(`${name} berhasil ditambahkan ke keranjang.`, 'success');
}

function saveCart() {
  localStorage.setItem('kopiKenanganCart', JSON.stringify(cart));
}

function getCartSummary() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const voucher = voucherCode?.value?.trim().toUpperCase() || '';
  const discount = voucher === 'KOPI30' ? Math.round(subtotal * 0.3) : voucher === 'BUY2GET1' ? 18000 : voucher === 'MEMBERWEEK' ? 12000 : 0;
  return { subtotal, discount: Math.min(discount, subtotal), total: Math.max(subtotal - discount, 0), voucher };
}

function renderCart() {
  if (!cartItems) return;

  if (!customerIsLoggedIn()) {
    cartItems.innerHTML = '<li>Silakan login untuk melihat keranjang dan memesan.</li>';
    cartCount.textContent = '0 item';
    cartDiscount.textContent = 'Rp 0';
    cartTotal.textContent = 'Rp 0';
    return;
  }

  cartItems.innerHTML = '';

  if (cart.length === 0) {
    cartItems.innerHTML = '<li>Keranjang masih kosong.</li>';
    cartCount.textContent = '0 item';
    cartDiscount.textContent = 'Rp 0';
    cartTotal.textContent = 'Rp 0';
    return;
  }

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${item.name} x${item.quantity}</span><span class="cart-line-actions"><strong>Rp ${(item.price * item.quantity).toLocaleString('id-ID')}</strong><button type="button" class="cart-remove" data-index="${index}" aria-label="Hapus ${item.name}">Hapus</button></span>`;
    cartItems.appendChild(li);
  });

  const summary = getCartSummary();
  cartCount.textContent = `${cart.reduce((sum, item) => sum + item.quantity, 0)} item`;
  cartDiscount.textContent = `Rp ${summary.discount.toLocaleString('id-ID')}`;
  cartTotal.textContent = `Rp ${summary.total.toLocaleString('id-ID')}`;
}

cartItems?.addEventListener('click', (event) => {
  const removeButton = event.target.closest('.cart-remove');
  if (!removeButton) return;
  const index = Number(removeButton.dataset.index);
  if (Number.isNaN(index)) return;
  const [removed] = cart.splice(index, 1);
  saveCart();
  renderCart();
  if (removed) showToast(`${removed.name} dihapus dari keranjang.`, 'info');
});

voucherCode?.addEventListener('input', renderCart);

checkoutButton?.addEventListener('click', () => {
  if (!customerIsLoggedIn()) {
    openLoginModal('checkout');
    return;
  }

  if (cart.length === 0) {
    showToast('Tambahkan produk terlebih dahulu sebelum checkout.', 'warning');
    return;
  }

  if (!checkoutOutlet?.value || !checkoutPayment?.value) {
    showToast('Pilih outlet dan metode pembayaran sebelum checkout.', 'warning');
    return;
  }

  const summary = getCartSummary();
  const orderNumber = `KK-${Date.now().toString().slice(-6)}`;
  const order = {
    number: orderNumber,
    outlet: checkoutOutlet.value,
    payment: checkoutPayment.value,
    total: summary.total,
    voucher: summary.voucher,
    items: [...cart],
    status: 'Menunggu pembayaran'
  };
  localStorage.setItem('kopiKenanganLastOrder', JSON.stringify(order));
  cart.splice(0, cart.length);
  saveCart();
  renderCart();
  if (orderStatus) {
    orderStatus.hidden = false;
    orderStatus.innerHTML = `<strong>${order.number}</strong><span>${order.status} via ${order.payment} di outlet ${order.outlet}. Total Rp ${order.total.toLocaleString('id-ID')}.</span>`;
  }
  showToast('Checkout berhasil dibuat. Instruksi pembayaran siap dikirim.', 'success');
});

loginForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = loginEmail?.value?.trim();
  const password = loginPassword?.value?.trim();

  if (!email || !password) {
    showToast('Mohon isi email dan password.', 'warning');
    return;
  }

  sessionStorage.setItem('kopiKenanganCustomer', 'true');
  sessionStorage.setItem('kopiKenanganCustomerEmail', email);
  closeLoginModal();
  updateUserUI();
  showToast('Login berhasil. Sekarang Anda bisa memesan.', 'success');
  if (['checkout', 'order'].includes(loginModal?.dataset.reason)) {
    setTimeout(() => {
      window.location.hash = '#order';
    }, 300);
  }
});

customerLoginBtn?.addEventListener('click', () => openLoginModal('login'));
loginClose?.addEventListener('click', closeLoginModal);
customerLogoutBtn?.addEventListener('click', () => {
  sessionStorage.removeItem('kopiKenanganCustomer');
  sessionStorage.removeItem('kopiKenanganCustomerEmail');
  updateUserUI();
  showToast('Anda telah logout.', 'info');
});

if (detailClose) {
  detailClose.addEventListener('click', hideModal);
}

loginModal?.addEventListener('click', (event) => {
  if (event.target === loginModal) {
    closeLoginModal();
  }
});

updateUserUI();

function validateForm(form) {
  const requiredFields = form.querySelectorAll('[required]');
  let valid = true;

  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      valid = false;
      field.style.borderColor = '#e76f51';
    } else {
      field.style.borderColor = '#eadbcf';
    }
  });

  return valid;
}

signupForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!validateForm(signupForm)) {
    showToast('Mohon lengkapi semua kolom sebelum mendaftar.', 'warning');
    return;
  }

  showToast('Pendaftaran member berhasil. Silakan cek email Anda.', 'success');
  signupForm.reset();
});

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!validateForm(contactForm)) {
    showToast('Mohon lengkapi semua kolom sebelum mengirim pesan.', 'warning');
    return;
  }

  showToast('Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.', 'success');
  contactForm.reset();
});

renderCart();
