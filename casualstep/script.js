const DEFAULT_PRODUCTS = [
  {
    id: 'cs-urban-white', name: 'Urban Court White', brand: 'Northlane', category: 'Sneakers', price: 429000, discount: 12, rating: 4.8, reviews: 128, createdAt: '2026-06-28', fit: 'Normal fit', gender: 'Unisex',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80',
    description: 'Sneakers putih minimalis untuk kuliah, kerja santai, dan weekend outfit.',
    specs: ['Upper synthetic leather', 'Outsole rubber anti-slip', 'Insole foam removable', 'Berat 720g per pasang'],
    colors: ['Putih', 'Hitam'], sizes: [38, 39, 40, 41, 42, 43], stock: { 'Putih-38': 8, 'Putih-39': 10, 'Putih-40': 12, 'Putih-41': 7, 'Putih-42': 6, 'Putih-43': 4, 'Hitam-39': 5, 'Hitam-40': 8, 'Hitam-41': 7, 'Hitam-42': 3 }
  },
  {
    id: 'cs-canvas-black', name: 'Daily Canvas Black', brand: 'Stepwell', category: 'Canvas', price: 289000, discount: 8, rating: 4.6, reviews: 86, createdAt: '2026-06-18', fit: 'Narrow fit', gender: 'Unisex',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80',
    description: 'Sepatu canvas ringan dengan siluet klasik dan warna netral.',
    specs: ['Upper canvas 12oz', 'Outsole vulcanized rubber', 'Insole EVA', 'Cocok untuk kaki ramping'],
    colors: ['Hitam', 'Navy'], sizes: [36, 37, 38, 39, 40, 41, 42], stock: { 'Hitam-36': 6, 'Hitam-37': 8, 'Hitam-38': 10, 'Hitam-39': 11, 'Hitam-40': 8, 'Hitam-41': 4, 'Navy-38': 5, 'Navy-39': 6, 'Navy-40': 6, 'Navy-41': 2 }
  },
  {
    id: 'cs-slip-tan', name: 'Easy Slip Tan', brand: 'Avela', category: 'Slip-on', price: 349000, discount: 0, rating: 4.7, reviews: 64, createdAt: '2026-06-08', fit: 'Wide fit', gender: 'Pria',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80',
    description: 'Slip-on empuk untuk aktivitas cepat tanpa mengorbankan tampilan rapi.',
    specs: ['Upper suede sintetis', 'Elastic side gore', 'Outsole TPR fleksibel', 'Wide fit untuk kaki lebar'],
    colors: ['Tan', 'Abu'], sizes: [39, 40, 41, 42, 43, 44], stock: { 'Tan-39': 6, 'Tan-40': 9, 'Tan-41': 10, 'Tan-42': 8, 'Tan-43': 5, 'Abu-40': 5, 'Abu-41': 6, 'Abu-42': 4, 'Abu-43': 3, 'Abu-44': 2 }
  },
  {
    id: 'cs-loafer-brown', name: 'Workday Loafer', brand: 'Bravado', category: 'Loafers', price: 579000, discount: 15, rating: 4.9, reviews: 92, createdAt: '2026-05-29', fit: 'Normal fit', gender: 'Pria',
    image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=80',
    description: 'Loafers casual rapi untuk office casual, meeting santai, dan acara semi-formal.',
    specs: ['Upper microfiber leather', 'Lining textile', 'Outsole rubber stitched', 'Tinggi sol 2.5 cm'],
    colors: ['Tan', 'Hitam'], sizes: [39, 40, 41, 42, 43], stock: { 'Tan-39': 3, 'Tan-40': 7, 'Tan-41': 7, 'Tan-42': 4, 'Hitam-40': 6, 'Hitam-41': 8, 'Hitam-42': 4, 'Hitam-43': 2 }
  },
  {
    id: 'cs-runner-grey', name: 'Cloud Runner Grey', brand: 'Kinetik', category: 'Sneakers', price: 699000, discount: 10, rating: 4.7, reviews: 141, createdAt: '2026-06-30', fit: 'Normal fit', gender: 'Unisex',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80',
    description: 'Sneakers ringan dengan bantalan nyaman untuk commute dan jalan jauh.',
    specs: ['Upper engineered mesh', 'Midsole phylon', 'Outsole rubber pods', 'Breathable lining'],
    colors: ['Abu', 'Putih'], sizes: [37, 38, 39, 40, 41, 42, 43, 44], stock: { 'Abu-37': 4, 'Abu-38': 8, 'Abu-39': 9, 'Abu-40': 12, 'Abu-41': 9, 'Abu-42': 6, 'Putih-39': 5, 'Putih-40': 8, 'Putih-41': 7, 'Putih-42': 3, 'Putih-43': 2 }
  },
  {
    id: 'cs-sandal-navy', name: 'Weekend Strap Navy', brand: 'Solace', category: 'Sandal Casual', price: 249000, discount: 0, rating: 4.5, reviews: 52, createdAt: '2026-05-22', fit: 'Wide fit', gender: 'Unisex',
    image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=80',
    description: 'Sandal casual dengan strap kokoh untuk liburan, errands, dan aktivitas santai.',
    specs: ['Upper webbing strap', 'Footbed EVA molded', 'Outsole rubber grip', 'Cepat kering'],
    colors: ['Navy', 'Hitam'], sizes: [38, 39, 40, 41, 42, 43, 44], stock: { 'Navy-38': 5, 'Navy-39': 6, 'Navy-40': 9, 'Navy-41': 8, 'Navy-42': 6, 'Hitam-39': 5, 'Hitam-40': 7, 'Hitam-41': 5, 'Hitam-42': 4, 'Hitam-43': 2 }
  }
];

const els = {
  productGrid: document.getElementById('product-grid'), emptyState: document.getElementById('empty-state'), resultCount: document.getElementById('result-count'), activeFilterCopy: document.getElementById('active-filter-copy'),
  searchInput: document.getElementById('search-input'), heroSearchForm: document.getElementById('hero-search-form'), heroSearchInput: document.getElementById('hero-search-input'), categoryFilter: document.getElementById('category-filter'), sizeFilter: document.getElementById('size-filter'), colorFilter: document.getElementById('color-filter'), priceFilter: document.getElementById('price-filter'), sortSelect: document.getElementById('sort-select'), resetFilters: document.getElementById('reset-filters'),
  cartList: document.getElementById('cart-list'), wishlistList: document.getElementById('wishlist-list'), cartCount: document.getElementById('cart-count'), wishlistCount: document.getElementById('wishlist-count'), subtotal: document.getElementById('subtotal-copy'), discount: document.getElementById('discount-copy'), shipping: document.getElementById('shipping-copy'), grandTotal: document.getElementById('grand-total-copy'), voucherInput: document.getElementById('voucher-input'), courierSelect: document.getElementById('courier-select'), checkoutForm: document.getElementById('checkout-form'), orderCreated: document.getElementById('order-created'), ordersGrid: document.getElementById('orders-grid'), clearOrders: document.getElementById('clear-orders'),
  productModal: document.getElementById('product-modal'), modalClose: document.getElementById('modal-close'), modalImage: document.getElementById('modal-image'), modalBrand: document.getElementById('modal-brand'), modalTitle: document.getElementById('modal-title'), modalDescription: document.getElementById('modal-description'), modalRating: document.getElementById('modal-rating'), modalPrice: document.getElementById('modal-price'), modalColor: document.getElementById('modal-color'), modalSize: document.getElementById('modal-size'), modalStock: document.getElementById('modal-stock'), modalSpecs: document.getElementById('modal-specs'), modalAddCart: document.getElementById('modal-add-cart'), modalWishlist: document.getElementById('modal-wishlist'),
  loginModal: document.getElementById('login-modal'), loginBtn: document.getElementById('login-btn'), loginClose: document.getElementById('login-close'), loginForm: document.getElementById('login-form'), loginEmail: document.getElementById('login-email'), menuToggle: document.getElementById('menu-toggle'), siteNav: document.getElementById('site-nav'), toastWrap: document.getElementById('toast-wrap'), cartJump: document.getElementById('cart-jump'), wishlistJump: document.getElementById('wishlist-jump')
};

const money = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 });
let activeProduct = null;
function clone(value) { return JSON.parse(JSON.stringify(value)); }
let products = loadProducts();
let cart = read('casualStepCart', []);
let wishlist = read('casualStepWishlist', []);
let orders = read('casualStepOrders', []);

function read(key, fallback) { try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); } catch { return fallback; } }
function write(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function loadProducts() { const stored = read('casualStepProducts', null); if (stored) return stored; write('casualStepProducts', DEFAULT_PRODUCTS); return clone(DEFAULT_PRODUCTS); }
function salePrice(product) { return Math.round(product.price * (1 - (product.discount || 0) / 100)); }
function stockFor(product, color, size) { return Number(product.stock?.[`${color}-${size}`] || 0); }
function totalStock(product) { return Object.values(product.stock || {}).reduce((sum, value) => sum + Number(value), 0); }
function toast(message) { if (!els.toastWrap) return; const node = document.createElement('div'); node.className = 'toast'; node.textContent = message; els.toastWrap.appendChild(node); setTimeout(() => node.remove(), 3200); }
function colorValue(color) { return { Putih: '#f8fafc', Hitam: '#111827', Navy: '#1e3a8a', Tan: '#b78b5d', Abu: '#94a3b8' }[color] || '#d7dde8'; }

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
    const matchSize = size === 'all' || product.sizes.includes(Number(size));
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
  return parts.length ? parts.join(' · ') : 'Semua produk casual';
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
  const existing = cart.find((item) => item.productId === productId && item.color === color && Number(item.size) === Number(size));
  const nextQty = (existing?.qty || 0) + 1;
  if (nextQty > stock) { toast('Stok varian tidak mencukupi.'); return; }
  if (existing) existing.qty = nextQty; else cart.push({ productId, color, size: Number(size), qty: 1, price: salePrice(product) });
  write('casualStepCart', cart);
  renderCart();
  toast(`${product.name} masuk cart.`);
}
function toggleWishlist(productId) { wishlist = wishlist.includes(productId) ? wishlist.filter((id) => id !== productId) : [...wishlist, productId]; write('casualStepWishlist', wishlist); renderProducts(); renderWishlist(); toast('Wishlist diperbarui.'); }

function renderCart() {
  if (!els.cartList) return;
  els.cartList.innerHTML = cart.length ? cart.map((item, index) => {
    const product = products.find((entry) => entry.id === item.productId);
    if (!product) return '';
    return `<article class="cart-item"><img src="${product.image}" alt="${product.name}"><div><h3>${product.name}</h3><p>${item.color} · EU ${item.size} · ${money.format(item.price)}</p><div class="quantity-row"><button data-qty="${index}|-1" type="button">-</button><strong>${item.qty}</strong><button data-qty="${index}|1" type="button">+</button></div></div><div><strong>${money.format(item.price * item.qty)}</strong><br><button class="small-button" data-remove="${index}" type="button">Hapus</button></div></article>`;
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
  let discount = voucher === 'CASUAL10' ? Math.round(subtotal * 0.1) : 0;
  if (voucher === 'FREESHIP') shipping = 0;
  discount = Math.min(discount, subtotal);
  return { subtotal, shipping, discount, total: Math.max(subtotal + shipping - discount, 0), voucher };
}
function renderTotals() { const summary = cartSummary(); if (els.subtotal) { els.subtotal.textContent = money.format(summary.subtotal); els.discount.textContent = money.format(summary.discount); els.shipping.textContent = money.format(summary.shipping); els.grandTotal.textContent = money.format(summary.total); } }
function renderOrders() {
  if (!els.ordersGrid) return;
  els.ordersGrid.innerHTML = orders.length ? orders.map((order) => `<article class="order-card"><strong>${order.number}</strong><span class="status-pill">${order.status}</span><span>${order.customer} · ${order.payment} · ${money.format(order.total)}</span><span>Resi: ${order.tracking || 'Belum tersedia'}</span><small>${order.items.length} item · ${new Date(order.createdAt).toLocaleString('id-ID')}</small></article>`).join('') : '<div class="empty-state"><h3>Belum ada pesanan</h3><p>Pesanan yang dibuat dari checkout akan tampil di sini.</p></div>';
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
    const remove = event.target.closest('[data-remove]'); if (remove) { cart.splice(Number(remove.dataset.remove), 1); write('casualStepCart', cart); renderCart(); }
    const qty = event.target.closest('[data-qty]'); if (qty) { const [index, delta] = qty.dataset.qty.split('|').map(Number); const item = cart[index]; if (!item) return; const product = products.find((entry) => entry.id === item.productId); const next = item.qty + delta; if (next < 1) return; if (next > stockFor(product, item.color, item.size)) { toast('Stok varian tidak mencukupi.'); return; } item.qty = next; write('casualStepCart', cart); renderCart(); }
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
    const summary = cartSummary();
    const order = { number: `CS-${Date.now().toString().slice(-7)}`, customer: document.getElementById('recipient-name').value, email: document.getElementById('recipient-email').value, phone: document.getElementById('recipient-phone').value, address: document.getElementById('recipient-address').value, payment: document.getElementById('payment-select').value, courier: els.courierSelect.value.split('|')[0], total: summary.total, status: 'Menunggu pembayaran', tracking: '', items: [...cart], createdAt: new Date().toISOString() };
    orders.unshift(order); write('casualStepOrders', orders); cart = []; write('casualStepCart', cart); renderCart(); renderOrders(); els.orderCreated.hidden = false; els.orderCreated.textContent = `Pesanan ${order.number} berhasil dibuat. Status: ${order.status}.`; els.checkoutForm.reset(); toast('Pesanan berhasil dibuat.');
  });
  els.clearOrders?.addEventListener('click', () => { orders = []; write('casualStepOrders', orders); renderOrders(); });
  els.loginBtn?.addEventListener('click', () => els.loginModal.classList.add('open'));
  els.loginClose?.addEventListener('click', () => els.loginModal.classList.remove('open'));
  els.loginForm?.addEventListener('submit', (event) => { event.preventDefault(); sessionStorage.setItem('casualStepCustomer', els.loginEmail.value); els.loginModal.classList.remove('open'); els.loginBtn.textContent = `Hi, ${els.loginEmail.value.split('@')[0]}`; toast('Login berhasil.'); });
  els.menuToggle?.addEventListener('click', () => { const open = els.siteNav.classList.toggle('open'); els.menuToggle.setAttribute('aria-expanded', open); });
  els.cartJump?.addEventListener('click', () => { location.hash = '#checkout'; });
  els.wishlistJump?.addEventListener('click', () => { location.hash = '#checkout'; });
  const customer = sessionStorage.getItem('casualStepCustomer'); if (customer && els.loginBtn) els.loginBtn.textContent = `Hi, ${customer.split('@')[0]}`;
  renderProducts(); renderCart(); renderWishlist(); renderOrders();
}

function bindAdmin() {
  const loginPanel = document.getElementById('admin-login-panel');
  const dashboard = document.getElementById('admin-dashboard');
  const loginForm = document.getElementById('admin-login-form');
  const logout = document.getElementById('admin-logout');
  function showDashboard() { loginPanel.hidden = true; dashboard.hidden = false; renderAdmin(); }
  loginForm?.addEventListener('submit', (event) => { event.preventDefault(); const user = document.getElementById('admin-username').value; const pass = document.getElementById('admin-password').value; if (user === 'admin' && pass === 'step123') { sessionStorage.setItem('casualStepAdmin', 'true'); showDashboard(); toast('Admin login berhasil.'); } else toast('Username atau password salah.'); });
  logout?.addEventListener('click', () => { sessionStorage.removeItem('casualStepAdmin'); loginPanel.hidden = false; dashboard.hidden = true; });
  document.getElementById('product-admin-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('admin-product-name').value.trim();
    const colors = document.getElementById('admin-product-colors').value.split(',').map((item) => item.trim()).filter(Boolean);
    const sizes = document.getElementById('admin-product-sizes').value.split(',').map((item) => Number(item.trim())).filter(Boolean);
    const stockEach = Number(document.getElementById('admin-product-stock').value || 0);
    const stock = {}; colors.forEach((color) => sizes.forEach((size) => { stock[`${color}-${size}`] = stockEach; }));
    products.unshift({ id: `cs-${Date.now()}`, name, brand: document.getElementById('admin-product-brand').value.trim(), category: document.getElementById('admin-product-category').value, price: Number(document.getElementById('admin-product-price').value), discount: Number(document.getElementById('admin-product-discount').value || 0), rating: 0, reviews: 0, createdAt: new Date().toISOString(), fit: 'Normal fit', gender: 'Unisex', image: document.getElementById('admin-product-image').value.trim(), description: document.getElementById('admin-product-description').value.trim(), specs: ['Produk ditambahkan admin', 'Stok per varian aktif'], colors, sizes, stock });
    write('casualStepProducts', products); event.target.reset(); renderAdmin(); toast('Produk berhasil ditambahkan.');
  });
  document.getElementById('reset-products-admin')?.addEventListener('click', () => { products = clone(DEFAULT_PRODUCTS); write('casualStepProducts', products); renderAdmin(); toast('Produk demo dikembalikan.'); });
  document.getElementById('export-report')?.addEventListener('click', () => {
    const rows = ['order_number,customer,total,status,created_at', ...orders.map((order) => `${order.number},${order.customer},${order.total},${order.status},${order.createdAt}`)];
    const blob = new Blob([rows.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'casualstep-report.csv'; a.click(); URL.revokeObjectURL(url);
  });
  document.addEventListener('click', (event) => {
    const statusBtn = event.target.closest('[data-order-status]');
    if (!statusBtn) return;
    const [number, status] = statusBtn.dataset.orderStatus.split('|');
    const order = orders.find((item) => item.number === number);
    if (!order) return;
    order.status = status;
    if (status === 'Dikirim' && !order.tracking) order.tracking = `REG${Date.now().toString().slice(-8)}`;
    write('casualStepOrders', orders); renderAdmin(); toast(`Status ${number} diperbarui.`);
  });
  if (sessionStorage.getItem('casualStepAdmin') === 'true') showDashboard();
}

function renderAdmin() {
  orders = read('casualStepOrders', []); products = loadProducts();
  const metrics = document.getElementById('admin-metrics');
  if (metrics) {
    const revenue = orders.reduce((sum, order) => sum + Number(order.total || 0), 0);
    const lowStock = products.filter((product) => totalStock(product) < 12).length;
    metrics.innerHTML = `<div class="metric-card"><span>Total omzet</span><strong>${money.format(revenue)}</strong></div><div class="metric-card"><span>Pesanan</span><strong>${orders.length}</strong></div><div class="metric-card"><span>Stok menipis</span><strong>${lowStock}</strong></div>`;
  }
  const productTable = document.getElementById('admin-products-table');
  if (productTable) productTable.innerHTML = products.map((product) => `<tr><td>${product.name}<br><small>${product.brand}</small></td><td>${product.category}</td><td>${money.format(salePrice(product))}</td><td>${totalStock(product)}</td><td>${totalStock(product) ? 'Aktif' : 'Stok habis'}</td></tr>`).join('');
  const orderTable = document.getElementById('admin-orders-table');
  if (orderTable) orderTable.innerHTML = orders.length ? orders.map((order) => `<tr><td>${order.number}</td><td>${order.customer}</td><td>${money.format(order.total)}</td><td>${order.status}</td><td><button class="small-button" data-order-status="${order.number}|Diproses">Proses</button> <button class="small-button" data-order-status="${order.number}|Dikirim">Kirim</button> <button class="small-button" data-order-status="${order.number}|Selesai">Selesai</button></td></tr>`).join('') : '<tr><td colspan="5">Belum ada pesanan.</td></tr>';
  const report = document.getElementById('report-box');
  if (report) {
    const aov = orders.length ? orders.reduce((sum, order) => sum + order.total, 0) / orders.length : 0;
    const best = products.slice().sort((a, b) => b.reviews - a.reviews)[0];
    report.innerHTML = `<span>Average order value: <strong>${money.format(aov)}</strong></span><span>Produk dengan engagement tertinggi: <strong>${best?.name || '-'}</strong></span><span>Return rate demo: <strong>0%</strong></span>`;
  }
}

if (document.body.classList.contains('admin-page')) bindAdmin(); else bindStorefront();
