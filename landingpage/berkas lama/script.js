const DEFAULT_PRODUCTS = [
  {
    id: 'os-bomber-black', name: 'Riot Bomber Black', brand: 'OSTRACISM', category: 'Bomber', price: 549000, discount: 12, rating: 4.8, reviews: 128, createdAt: '2026-06-28', fit: 'Regular fit', gender: 'Unisex',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80',
    description: 'Bomber hitam berbahan tebal dengan rib elastis untuk outfit streetwear harian.',
    specs: ['Taslan premium water repellent', 'Furing halus', 'Saku depan dan inner pocket', 'Rib manset dan pinggang'],
    colors: ['Hitam', 'Olive'], sizes: ['S', 'M', 'L', 'XL'], stock: { 'Hitam-S': 8, 'Hitam-M': 10, 'Hitam-L': 12, 'Hitam-XL': 7, 'Olive-M': 6, 'Olive-L': 5, 'Olive-XL': 3 }
  },
  {
    id: 'os-hoodie-ash', name: 'No Rules Hoodie Ash', brand: 'OSTRACISM', category: 'Hoodie', price: 389000, discount: 8, rating: 4.7, reviews: 96, createdAt: '2026-06-18', fit: 'Oversized fit', gender: 'Unisex',
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=900&q=80',
    description: 'Hoodie fleece oversized dengan kantong kangaroo dan sablon OSTRACISM di dada.',
    specs: ['Cotton fleece 330gsm', 'Hoodie tali bulat', 'Kantong kangaroo', 'Sablon plastisol tahan cuci'],
    colors: ['Abu', 'Hitam'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], stock: { 'Abu-S': 6, 'Abu-M': 12, 'Abu-L': 11, 'Abu-XL': 8, 'Hitam-M': 8, 'Hitam-L': 9, 'Hitam-XL': 5, 'Hitam-XXL': 3 }
  },
  {
    id: 'os-denim-blue', name: 'Rebel Denim Jacket', brand: 'OSTRACISM', category: 'Denim Jacket', price: 629000, discount: 0, rating: 4.6, reviews: 74, createdAt: '2026-06-08', fit: 'Boxy fit', gender: 'Unisex',
    image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80',
    description: 'Jaket denim boxy dengan wash biru klasik dan patch woven OSTRACISM.',
    specs: ['Denim 13oz', 'Kancing metal', 'Patch woven', 'Dua kantong dada'],
    colors: ['Navy', 'Hitam'], sizes: ['M', 'L', 'XL', 'XXL'], stock: { 'Navy-M': 5, 'Navy-L': 9, 'Navy-XL': 6, 'Navy-XXL': 2, 'Hitam-M': 4, 'Hitam-L': 7, 'Hitam-XL': 4 }
  },
  {
    id: 'os-varsity-maroon', name: 'Street Varsity Maroon', brand: 'OSTRACISM', category: 'Varsity', price: 699000, discount: 15, rating: 4.9, reviews: 112, createdAt: '2026-05-29', fit: 'Relaxed fit', gender: 'Unisex',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    description: 'Varsity maroon dengan kombinasi lengan kontras dan bordir emblem depan.',
    specs: ['Body wool blend', 'Lengan synthetic leather', 'Bordir emblem', 'Snap button premium'],
    colors: ['Maroon', 'Hitam'], sizes: ['S', 'M', 'L', 'XL'], stock: { 'Maroon-S': 4, 'Maroon-M': 8, 'Maroon-L': 8, 'Maroon-XL': 4, 'Hitam-M': 5, 'Hitam-L': 6, 'Hitam-XL': 3 }
  },
  {
    id: 'os-windbreaker-navy', name: 'Afterdark Windbreaker', brand: 'OSTRACISM', category: 'Windbreaker', price: 459000, discount: 10, rating: 4.7, reviews: 88, createdAt: '2026-06-30', fit: 'Regular fit', gender: 'Unisex',
    image: 'https://images.unsplash.com/photo-1506629905607-d9f297d0698b?auto=format&fit=crop&w=900&q=80',
    description: 'Windbreaker ringan dengan tudung lipat untuk riding, hujan tipis, dan aktivitas outdoor.',
    specs: ['Parasut ripstop', 'Hoodie lipat', 'Ventilasi belakang', 'Hem adjustable'],
    colors: ['Navy', 'Olive'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], stock: { 'Navy-S': 6, 'Navy-M': 9, 'Navy-L': 10, 'Navy-XL': 7, 'Olive-M': 5, 'Olive-L': 6, 'Olive-XL': 3, 'Olive-XXL': 2 }
  },
  {
    id: 'os-coach-black', name: 'Backstreet Coach Jacket', brand: 'OSTRACISM', category: 'Windbreaker', price: 419000, discount: 0, rating: 4.5, reviews: 52, createdAt: '2026-05-22', fit: 'Relaxed fit', gender: 'Unisex',
    image: 'https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=900&q=80',
    description: 'Coach jacket hitam minimalis dengan print kecil di dada dan drawcord bawah.',
    specs: ['Nylon taslan', 'Snap button', 'Drawcord hem', 'Print high density'],
    colors: ['Hitam', 'Abu'], sizes: ['S', 'M', 'L', 'XL'], stock: { 'Hitam-S': 5, 'Hitam-M': 9, 'Hitam-L': 9, 'Hitam-XL': 5, 'Abu-M': 4, 'Abu-L': 5, 'Abu-XL': 2 }
  }
];

const els = {
  productGrid: document.getElementById('product-grid'), emptyState: document.getElementById('empty-state'), resultCount: document.getElementById('result-count'), activeFilterCopy: document.getElementById('active-filter-copy'),
  searchInput: document.getElementById('search-input'), heroSearchForm: document.getElementById('hero-search-form'), heroSearchInput: document.getElementById('hero-search-input'), categoryFilter: document.getElementById('category-filter'), sizeFilter: document.getElementById('size-filter'), colorFilter: document.getElementById('color-filter'), priceFilter: document.getElementById('price-filter'), sortSelect: document.getElementById('sort-select'), resetFilters: document.getElementById('reset-filters'),
  cartList: document.getElementById('cart-list'), wishlistList: document.getElementById('wishlist-list'), cartCount: document.getElementById('cart-count'), wishlistCount: document.getElementById('wishlist-count'), subtotal: document.getElementById('subtotal-copy'), discount: document.getElementById('discount-copy'), shipping: document.getElementById('shipping-copy'), grandTotal: document.getElementById('grand-total-copy'), voucherInput: document.getElementById('voucher-input'), courierSelect: document.getElementById('courier-select'), checkoutForm: document.getElementById('checkout-form'), orderCreated: document.getElementById('order-created'), ordersGrid: document.getElementById('orders-grid'), clearOrders: document.getElementById('clear-orders'),
  productModal: document.getElementById('product-modal'), modalClose: document.getElementById('modal-close'), modalImage: document.getElementById('modal-image'), modalBrand: document.getElementById('modal-brand'), modalTitle: document.getElementById('modal-title'), modalDescription: document.getElementById('modal-description'), modalRating: document.getElementById('modal-rating'), modalPrice: document.getElementById('modal-price'), modalColor: document.getElementById('modal-color'), modalSize: document.getElementById('modal-size'), modalStock: document.getElementById('modal-stock'), modalSpecs: document.getElementById('modal-specs'), modalAddCart: document.getElementById('modal-add-cart'), modalWishlist: document.getElementById('modal-wishlist'),
  loginModal: document.getElementById('login-modal'), loginBtn: document.getElementById('login-btn'), loginClose: document.getElementById('login-close'), loginForm: document.getElementById('login-form'), loginName: document.getElementById('login-name'), loginEmail: document.getElementById('login-email'), loginPassword: document.getElementById('login-password'), logoutBtn: document.getElementById('logout-btn'), menuToggle: document.getElementById('menu-toggle'), siteNav: document.getElementById('site-nav'), toastWrap: document.getElementById('toast-wrap'), cartJump: document.getElementById('cart-jump'), wishlistJump: document.getElementById('wishlist-jump')
};

const money = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 });
const STORE_KEYS = { products: 'ostracismProducts', cart: 'ostracismCart', wishlist: 'ostracismWishlist', orders: 'ostracismOrders', users: 'ostracismUsers', customer: 'ostracismCustomer', admin: 'ostracismAdmin' };
let activeProduct = null;
let authAction = 'login';
function clone(value) { return JSON.parse(JSON.stringify(value)); }
let products = loadProducts();
let cart = read(STORE_KEYS.cart, []);
let wishlist = read(STORE_KEYS.wishlist, []);
let orders = read(STORE_KEYS.orders, []);
let users = read(STORE_KEYS.users, []);

function read(key, fallback) { try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); } catch { return fallback; } }
function write(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function loadProducts() {
  const stored = read(STORE_KEYS.products, null);
  if (stored && stored.some((item) => String(item.id).startsWith('os-'))) return stored;
  write(STORE_KEYS.products, DEFAULT_PRODUCTS);
  return clone(DEFAULT_PRODUCTS);
}
function salePrice(product) { return Math.round(product.price * (1 - (product.discount || 0) / 100)); }
function stockFor(product, color, size) { return Number(product.stock?.[`${color}-${size}`] || 0); }
function totalStock(product) { return Object.values(product.stock || {}).reduce((sum, value) => sum + Number(value), 0); }
function toast(message) { if (!els.toastWrap) return; const node = document.createElement('div'); node.className = 'toast'; node.textContent = message; els.toastWrap.appendChild(node); setTimeout(() => node.remove(), 3200); }
function colorValue(color) { return { Putih: '#f8fafc', Hitam: '#111827', Navy: '#1e3a8a', Tan: '#b78b5d', Abu: '#94a3b8', Maroon: '#7f1d1d', Olive: '#556b2f' }[color] || '#d7dde8'; }
function currentCustomer() { return read(STORE_KEYS.customer, null); }

function renderProducts() {
  if (!els.productGrid) return;
  const filtered = getFilteredProducts();
  els.productGrid.innerHTML = filtered.map(productCard).join('');
  els.emptyState.hidden = filtered.length > 0;
  els.resultCount.textContent = `${filtered.length} produk`;
  els.activeFilterCopy.textContent = filterCopy();
}

function getFilteredProducts() {
  const query = (els.searchInput?.value || '').trim().toLowerCase();
  const category = els.categoryFilter?.value || 'all';
  const size = els.sizeFilter?.value || 'all';
  const color = els.colorFilter?.value || 'all';
  const price = els.priceFilter?.value || 'all';
  const sort = els.sortSelect?.value || 'featured';
  let result = products.filter((product) => {
    const haystack = `${product.name} ${product.brand} ${product.category} ${product.colors.join(' ')} ${product.id}`.toLowerCase();
    const matchQuery = !query || haystack.includes(query);
    const matchCategory = category === 'all' || product.category === category;
    const matchSize = size === 'all' || product.sizes.includes(size);
    const matchColor = color === 'all' || product.colors.includes(color);
    const currentPrice = salePrice(product);
    const matchPrice = price === 'all' || (() => { const [min, max] = price.split('-').map(Number); return currentPrice >= min && currentPrice <= max; })();
    return matchQuery && matchCategory && matchSize && matchColor && matchPrice;
  });
  result.sort((a, b) => {
    if (sort === 'lowest') return salePrice(a) - salePrice(b);
    if (sort === 'highest') return salePrice(b) - salePrice(a);
    if (sort === 'rating') return b.rating - a.rating;
    if (sort === 'discount') return (b.discount || 0) - (a.discount || 0);
    if (sort === 'newest') return new Date(b.createdAt) - new Date(a.createdAt);
    return b.rating * 100 + totalStock(b) - (a.rating * 100 + totalStock(a));
  });
  return result;
}

function filterCopy() {
  const parts = [];
  if (els.categoryFilter?.value !== 'all') parts.push(els.categoryFilter.value);
  if (els.sizeFilter?.value !== 'all') parts.push(`Ukuran ${els.sizeFilter.value}`);
  if (els.colorFilter?.value !== 'all') parts.push(els.colorFilter.value);
  if (els.priceFilter?.value !== 'all') parts.push('Rentang harga aktif');
  return parts.length ? parts.join(' · ') : 'Semua jaket OSTRACISM';
}

function productCard(product) {
  const finalPrice = salePrice(product);
  const isWish = wishlist.includes(product.id);
  return `<article class="product-card">
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <div class="product-badges">${product.discount ? `<span class="badge">-${product.discount}%</span>` : ''}<span class="badge soft">${product.fit}</span></div>
    </div>
    <div class="product-body">
      <div class="product-title-row"><div><h3>${product.name}</h3><span class="product-brand">${product.brand} · ${product.category}</span></div><button class="small-button" data-wishlist="${product.id}" type="button">${isWish ? 'Tersimpan' : 'Wishlist'}</button></div>
      <p>${product.description}</p>
      <div class="rating-row"><span>Rating ${product.rating}</span><span>${product.reviews} ulasan</span></div>
      <div class="price-row"><strong>${money.format(finalPrice)}</strong>${product.discount ? `<del>${money.format(product.price)}</del>` : ''}</div>
      <div class="swatches">${product.colors.map((color) => `<span class="swatch" style="background:${colorValue(color)}" title="${color}"></span>`).join('')}<span>${product.sizes[0]}-${product.sizes[product.sizes.length - 1]}</span><span>${totalStock(product)} stok</span></div>
      <div class="product-actions"><button class="primary-button" data-detail="${product.id}" type="button">Lihat Detail</button><button class="secondary-button" data-quick="${product.id}" type="button">Quick Add</button></div>
    </div>
  </article>`;
}

function openProduct(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  activeProduct = product;
  els.modalImage.src = product.image;
  els.modalImage.alt = product.name;
  els.modalBrand.textContent = `${product.brand} · ${product.category} · ${product.gender}`;
  els.modalTitle.textContent = product.name;
  els.modalDescription.textContent = product.description;
  els.modalRating.textContent = `Rating ${product.rating} dari ${product.reviews} ulasan · ${product.fit}`;
  els.modalPrice.innerHTML = `<strong>${money.format(salePrice(product))}</strong>${product.discount ? `<del>${money.format(product.price)}</del>` : ''}`;
  els.modalColor.innerHTML = product.colors.map((color) => `<option value="${color}">${color}</option>`).join('');
  els.modalSize.innerHTML = product.sizes.map((size) => `<option value="${size}">${size}</option>`).join('');
  els.modalSpecs.innerHTML = product.specs.map((spec) => `<span>${spec}</span>`).join('');
  updateModalStock();
  els.productModal.classList.add('open');
  els.productModal.setAttribute('aria-hidden', 'false');
}

function closeProduct() { els.productModal?.classList.remove('open'); els.productModal?.setAttribute('aria-hidden', 'true'); }
function updateModalStock() { if (!activeProduct) return; const stock = stockFor(activeProduct, els.modalColor.value, els.modalSize.value); els.modalStock.textContent = stock > 0 ? `Stok varian tersedia: ${stock}` : 'Stok varian ini habis'; els.modalAddCart.disabled = stock <= 0; }
function quickAdd(id) { const product = products.find((item) => item.id === id); if (!product) return; const color = product.colors[0]; const size = product.sizes.find((item) => stockFor(product, color, item) > 0) || product.sizes[0]; addCart(product.id, color, size); }
function addCart(productId, color, size) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  const stock = stockFor(product, color, size);
  const existing = cart.find((item) => item.productId === productId && item.color === color && item.size === size);
  const nextQty = (existing?.qty || 0) + 1;
  if (nextQty > stock) { toast('Stok varian tidak mencukupi.'); return; }
  if (existing) existing.qty = nextQty; else cart.push({ productId, color, size, qty: 1, price: salePrice(product) });
  write(STORE_KEYS.cart, cart);
  renderCart();
  toast(`${product.name} masuk cart.`);
}
function toggleWishlist(productId) { wishlist = wishlist.includes(productId) ? wishlist.filter((id) => id !== productId) : [...wishlist, productId]; write(STORE_KEYS.wishlist, wishlist); renderProducts(); renderWishlist(); toast('Wishlist diperbarui.'); }

function renderCart() {
  if (!els.cartList) return;
  els.cartList.innerHTML = cart.length ? cart.map((item, index) => {
    const product = products.find((entry) => entry.id === item.productId);
    if (!product) return '';
    return `<article class="cart-item"><img src="${product.image}" alt="${product.name}"><div><h3>${product.name}</h3><p>${item.color} · Ukuran ${item.size} · ${money.format(item.price)}</p><div class="quantity-row"><button data-qty="${index}|-1" type="button">-</button><strong>${item.qty}</strong><button data-qty="${index}|1" type="button">+</button></div></div><div><strong>${money.format(item.price * item.qty)}</strong><br><button class="small-button" data-remove="${index}" type="button">Hapus</button></div></article>`;
  }).join('') : '<div class="empty-state"><h3>Cart masih kosong</h3><p>Tambahkan produk dari katalog untuk mulai checkout.</p></div>';
  els.cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  renderTotals();
}
function renderWishlist() {
  if (!els.wishlistList) return;
  const items = wishlist.map((id) => products.find((product) => product.id === id)).filter(Boolean);
  els.wishlistList.innerHTML = items.length ? items.map((product) => `<div class="wishlist-item"><span>${product.name}<br><small>${money.format(salePrice(product))}</small></span><button class="secondary-button" data-detail="${product.id}" type="button">Detail</button></div>`).join('') : '<p>Belum ada produk tersimpan.</p>';
  els.wishlistCount.textContent = wishlist.length;
}
function cartSummary() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const courier = (els.courierSelect?.value || 'Reguler|18000').split('|');
  let shipping = Number(courier[1] || 0);
  const voucher = (els.voucherInput?.value || '').trim().toUpperCase();
  let discount = voucher === 'OS10' ? Math.round(subtotal * 0.1) : 0;
  if (voucher === 'FREESHIP') shipping = 0;
  discount = Math.min(discount, subtotal);
  return { subtotal, shipping, discount, total: Math.max(subtotal + shipping - discount, 0), voucher };
}
function renderTotals() { const summary = cartSummary(); if (els.subtotal) { els.subtotal.textContent = money.format(summary.subtotal); els.discount.textContent = money.format(summary.discount); els.shipping.textContent = money.format(summary.shipping); els.grandTotal.textContent = money.format(summary.total); } }
function renderOrders() {
  if (!els.ordersGrid) return;
  els.ordersGrid.innerHTML = orders.length ? orders.map((order) => `<article class="order-card"><strong>${order.number}</strong><span class="status-pill">${order.status}</span><span>${order.customer} · ${order.payment} · ${money.format(order.total)}</span><span>Resi: ${order.tracking || 'Belum tersedia'}</span><small>${order.items.length} item · ${new Date(order.createdAt).toLocaleString('id-ID')}</small></article>`).join('') : '<div class="empty-state"><h3>Belum ada pesanan</h3><p>Pesanan yang dibuat dari checkout akan tampil di sini.</p></div>';
}

function renderAuth() {
  const customer = currentCustomer();
  if (customer && els.loginBtn) els.loginBtn.textContent = `Hi, ${customer.name.split(' ')[0]}`;
  if (!customer && els.loginBtn) els.loginBtn.textContent = 'Login';
  if (els.logoutBtn) els.logoutBtn.hidden = !customer;
  if (customer) {
    const name = document.getElementById('recipient-name');
    const email = document.getElementById('recipient-email');
    if (name && !name.value) name.value = customer.name;
    if (email && !email.value) email.value = customer.email;
  }
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const name = (els.loginName?.value || '').trim();
  const email = (els.loginEmail?.value || '').trim().toLowerCase();
  const password = els.loginPassword?.value || '';
  if (password.length < 6) { toast('Password minimal 6 karakter.'); return; }
  if (authAction === 'register') {
    if (!name) { toast('Nama wajib diisi untuk register.'); return; }
    if (users.some((user) => user.email === email)) { toast('Email sudah terdaftar, silakan login.'); return; }
    const user = { name, email, password, createdAt: new Date().toISOString() };
    users.push(user); write(STORE_KEYS.users, users); write(STORE_KEYS.customer, { name, email });
    toast('Register berhasil. Kamu sudah login.');
  } else {
    const user = users.find((item) => item.email === email && item.password === password);
    if (!user) { toast('Akun tidak ditemukan atau password salah. Coba register dulu.'); return; }
    write(STORE_KEYS.customer, { name: user.name, email: user.email });
    toast('Login berhasil.');
  }
  els.loginModal.classList.remove('open');
  els.loginForm.reset();
  renderAuth();
}

function bindStorefront() {
  ['input', 'change'].forEach((eventName) => {
    [els.searchInput, els.categoryFilter, els.sizeFilter, els.colorFilter, els.priceFilter, els.sortSelect].forEach((node) => node?.addEventListener(eventName, renderProducts));
  });
  els.resetFilters?.addEventListener('click', () => { els.searchInput.value = ''; els.categoryFilter.value = 'all'; els.sizeFilter.value = 'all'; els.colorFilter.value = 'all'; els.priceFilter.value = 'all'; els.sortSelect.value = 'featured'; renderProducts(); });
  els.heroSearchForm?.addEventListener('submit', (event) => { event.preventDefault(); els.searchInput.value = els.heroSearchInput.value; location.hash = '#catalog'; renderProducts(); });
  document.addEventListener('click', (event) => {
    const detail = event.target.closest('[data-detail]'); if (detail) openProduct(detail.dataset.detail);
    const quick = event.target.closest('[data-quick]'); if (quick) quickAdd(quick.dataset.quick);
    const wish = event.target.closest('[data-wishlist]'); if (wish) toggleWishlist(wish.dataset.wishlist);
    const remove = event.target.closest('[data-remove]'); if (remove) { cart.splice(Number(remove.dataset.remove), 1); write(STORE_KEYS.cart, cart); renderCart(); }
    const qty = event.target.closest('[data-qty]'); if (qty) { const [indexText, deltaText] = qty.dataset.qty.split('|'); const index = Number(indexText); const delta = Number(deltaText); const item = cart[index]; if (!item) return; const product = products.find((entry) => entry.id === item.productId); const next = item.qty + delta; if (next < 1) return; if (next > stockFor(product, item.color, item.size)) { toast('Stok varian tidak mencukupi.'); return; } item.qty = next; write(STORE_KEYS.cart, cart); renderCart(); }
  });
  els.modalClose?.addEventListener('click', closeProduct);
  els.productModal?.addEventListener('click', (event) => { if (event.target === els.productModal) closeProduct(); });
  els.modalColor?.addEventListener('change', updateModalStock); els.modalSize?.addEventListener('change', updateModalStock);
  els.modalAddCart?.addEventListener('click', () => { if (!activeProduct) return; addCart(activeProduct.id, els.modalColor.value, els.modalSize.value); closeProduct(); });
  els.modalWishlist?.addEventListener('click', () => { if (activeProduct) toggleWishlist(activeProduct.id); });
  els.voucherInput?.addEventListener('input', renderTotals); els.courierSelect?.addEventListener('change', renderTotals);
  els.checkoutForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!cart.length) { toast('Cart masih kosong.'); return; }
    const customer = currentCustomer();
    if (!customer) { els.loginModal.classList.add('open'); toast('Login atau register dulu sebelum checkout.'); return; }
    const summary = cartSummary();
    const order = { number: `OS-${Date.now().toString().slice(-7)}`, customer: document.getElementById('recipient-name').value, email: document.getElementById('recipient-email').value, phone: document.getElementById('recipient-phone').value, address: document.getElementById('recipient-address').value, payment: document.getElementById('payment-select').value, courier: els.courierSelect.value.split('|')[0], total: summary.total, status: 'Menunggu pembayaran', tracking: '', items: [...cart], createdAt: new Date().toISOString() };
    orders.unshift(order); write(STORE_KEYS.orders, orders); cart = []; write(STORE_KEYS.cart, cart); renderCart(); renderOrders(); els.orderCreated.hidden = false; els.orderCreated.textContent = `Pesanan ${order.number} berhasil dibuat. Status: ${order.status}.`; els.checkoutForm.reset(); renderAuth(); toast('Pesanan berhasil dibuat.');
  });
  els.clearOrders?.addEventListener('click', () => { orders = []; write(STORE_KEYS.orders, orders); renderOrders(); });
  els.loginBtn?.addEventListener('click', () => { renderAuth(); els.loginModal.classList.add('open'); });
  els.loginClose?.addEventListener('click', () => els.loginModal.classList.remove('open'));
  els.loginForm?.addEventListener('click', (event) => { const button = event.target.closest('[data-auth-action]'); if (button) authAction = button.dataset.authAction; });
  els.loginForm?.addEventListener('submit', handleAuthSubmit);
  els.logoutBtn?.addEventListener('click', () => { localStorage.removeItem(STORE_KEYS.customer); els.loginModal.classList.remove('open'); renderAuth(); toast('Logout berhasil.'); });
  els.menuToggle?.addEventListener('click', () => { const open = els.siteNav.classList.toggle('open'); els.menuToggle.setAttribute('aria-expanded', open); });
  els.cartJump?.addEventListener('click', () => { location.hash = '#checkout'; });
  els.wishlistJump?.addEventListener('click', () => { location.hash = '#checkout'; });
  renderProducts(); renderCart(); renderWishlist(); renderOrders(); renderAuth();
}

function bindAdmin() {
  const loginPanel = document.getElementById('admin-login-panel');
  const dashboard = document.getElementById('admin-dashboard');
  const loginForm = document.getElementById('admin-login-form');
  const logout = document.getElementById('admin-logout');
  function showDashboard() { loginPanel.hidden = true; dashboard.hidden = false; renderAdmin(); }
  loginForm?.addEventListener('submit', (event) => { event.preventDefault(); const user = document.getElementById('admin-username').value; const pass = document.getElementById('admin-password').value; if (user === 'admin' && pass === 'tm12345') { sessionStorage.setItem(STORE_KEYS.admin, 'true'); showDashboard(); toast('Admin login berhasil.'); } else toast('Username atau password salah.'); });
  logout?.addEventListener('click', () => { sessionStorage.removeItem(STORE_KEYS.admin); loginPanel.hidden = false; dashboard.hidden = true; });
  document.getElementById('product-admin-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('admin-product-name').value.trim();
    const colors = document.getElementById('admin-product-colors').value.split(',').map((item) => item.trim()).filter(Boolean);
    const sizes = document.getElementById('admin-product-sizes').value.split(',').map((item) => item.trim().toUpperCase()).filter(Boolean);
    const stockEach = Number(document.getElementById('admin-product-stock').value || 0);
    const stock = {}; colors.forEach((color) => sizes.forEach((size) => { stock[`${color}-${size}`] = stockEach; }));
    products.unshift({ id: `os-${Date.now()}`, name, brand: document.getElementById('admin-product-brand').value.trim() || 'OSTRACISM', category: document.getElementById('admin-product-category').value, price: Number(document.getElementById('admin-product-price').value), discount: Number(document.getElementById('admin-product-discount').value || 0), rating: 0, reviews: 0, createdAt: new Date().toISOString(), fit: 'Regular fit', gender: 'Unisex', image: document.getElementById('admin-product-image').value.trim(), description: document.getElementById('admin-product-description').value.trim(), specs: ['Produk jaket ditambahkan admin', 'Stok per varian aktif'], colors, sizes, stock });
    write(STORE_KEYS.products, products); event.target.reset(); renderAdmin(); toast('Produk berhasil ditambahkan.');
  });
  document.getElementById('reset-products-admin')?.addEventListener('click', () => { products = clone(DEFAULT_PRODUCTS); write(STORE_KEYS.products, products); renderAdmin(); toast('Produk demo dikembalikan.'); });
  document.getElementById('export-report')?.addEventListener('click', () => {
    const rows = ['order_number,customer,total,status,created_at', ...orders.map((order) => `${order.number},${order.customer},${order.total},${order.status},${order.createdAt}`)];
    const blob = new Blob([rows.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'troublemaker-report.csv'; a.click(); URL.revokeObjectURL(url);
  });
  document.addEventListener('click', (event) => {
    const statusBtn = event.target.closest('[data-order-status]');
    if (!statusBtn) return;
    const [number, status] = statusBtn.dataset.orderStatus.split('|');
    const order = orders.find((item) => item.number === number);
    if (!order) return;
    order.status = status;
    if (status === 'Dikirim' && !order.tracking) order.tracking = `OSX${Date.now().toString().slice(-8)}`;
    write(STORE_KEYS.orders, orders); renderAdmin(); toast(`Status ${number} diperbarui.`);
  });
  if (sessionStorage.getItem(STORE_KEYS.admin) === 'true') showDashboard();
}

function renderAdmin() {
  orders = read(STORE_KEYS.orders, []); products = loadProducts(); users = read(STORE_KEYS.users, []);
  const metrics = document.getElementById('admin-metrics');
  if (metrics) {
    const revenue = orders.reduce((sum, order) => sum + Number(order.total || 0), 0);
    const lowStock = products.filter((product) => totalStock(product) < 12).length;
    metrics.innerHTML = `<div class="metric-card"><span>Total omzet</span><strong>${money.format(revenue)}</strong></div><div class="metric-card"><span>Pesanan</span><strong>${orders.length}</strong></div><div class="metric-card"><span>User</span><strong>${users.length}</strong></div><div class="metric-card"><span>Stok menipis</span><strong>${lowStock}</strong></div>`;
  }
  const productTable = document.getElementById('admin-products-table');
  if (productTable) productTable.innerHTML = products.map((product) => `<tr><td>${product.name}<br><small>${product.brand}</small></td><td>${product.category}</td><td>${money.format(salePrice(product))}</td><td>${totalStock(product)}</td><td>${totalStock(product) ? 'Aktif' : 'Stok habis'}</td></tr>`).join('');
  const orderTable = document.getElementById('admin-orders-table');
  if (orderTable) orderTable.innerHTML = orders.length ? orders.map((order) => `<tr><td>${order.number}</td><td>${order.customer}</td><td>${money.format(order.total)}</td><td>${order.status}</td><td><button class="small-button" data-order-status="${order.number}|Diproses">Proses</button> <button class="small-button" data-order-status="${order.number}|Dikirim">Kirim</button> <button class="small-button" data-order-status="${order.number}|Selesai">Selesai</button></td></tr>`).join('') : '<tr><td colspan="5">Belum ada pesanan.</td></tr>';
  const report = document.getElementById('report-box');
  if (report) {
    const aov = orders.length ? orders.reduce((sum, order) => sum + order.total, 0) / orders.length : 0;
    const best = products.slice().sort((a, b) => b.reviews - a.reviews)[0];
    report.innerHTML = `<span>Average order value: <strong>${money.format(aov)}</strong></span><span>Produk dengan engagement tertinggi: <strong>${best?.name || '-'}</strong></span><span>Total akun customer: <strong>${users.length}</strong></span>`;
  }
}

if (document.body.classList.contains('admin-page')) bindAdmin(); else bindStorefront();
