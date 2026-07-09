const OFFICIAL_SEED_VERSION = 'tm-eleven-products-2026-07-08';
const HERO_TITLE_IMAGE = 'assets/hero-orang.jpeg';
const DEFAULT_PRODUCTS = [
  {
    id: 'tm-hitam-original-jacket',
    name: 'Troublemaker Black Original Jacket',
    brand: 'Troublemaker',
    category: 'Coach Jacket',
    price: 275000,
    discount: 0,
    rating: 5,
    reviews: 1,
    createdAt: '2026-07-07T00:00:00.000Z',
    image: 'assets/products/tm-hitam.jpeg',
    description: 'Jaket Troublemaker original warna hitam dengan detail patch resmi dan tampilan streetwear clean.',
    specs: ['Produk resmi Troublemaker', 'Warna hitam', 'Full zipper', 'Patch Troublemaker original', 'Foto produk asli'],
    colors: ['Hitam'],
    sizes: ['M', 'L', 'XL'],
    stock: { 'Hitam-M': 8, 'Hitam-L': 8, 'Hitam-XL': 6 }
  },
  {
    id: 'tm-putih-original-jacket',
    name: 'Troublemaker Light Grey Original Jacket',
    brand: 'Troublemaker',
    category: 'Coach Jacket',
    price: 285000,
    discount: 0,
    rating: 5,
    reviews: 1,
    createdAt: '2026-07-07T00:01:00.000Z',
    image: 'assets/products/tm-putih.jpeg',
    description: 'Jaket Troublemaker original warna light grey dengan patch Troublemaker dan detail zipper kontras.',
    specs: ['Produk resmi Troublemaker', 'Warna light grey', 'Full zipper', 'Patch Troublemaker original', 'Foto produk asli'],
    colors: ['Putih'],
    sizes: ['M', 'L', 'XL'],
    stock: { 'Putih-M': 7, 'Putih-L': 8, 'Putih-XL': 5 }
  },
  {
    id: 'tm-pink-original-jacket',
    name: 'Troublemaker Pink Original Jacket',
    brand: 'Troublemaker',
    category: 'Coach Jacket',
    price: 285000,
    discount: 0,
    rating: 5,
    reviews: 1,
    createdAt: '2026-07-07T00:02:00.000Z',
    image: 'assets/products/tm-pink.jpeg',
    description: 'Jaket Troublemaker original warna pink dengan detail kantong depan, zipper hitam, dan patch resmi.',
    specs: ['Produk resmi Troublemaker', 'Warna pink', 'Full zipper', 'Patch Troublemaker original', 'Foto produk asli'],
    colors: ['Pink'],
    sizes: ['M', 'L', 'XL'],
    stock: { 'Pink-M': 6, 'Pink-L': 7, 'Pink-XL': 5 }
  },
  {
    id: 'tm-merah-original-jacket',
    name: 'Troublemaker Maroon Original Jacket',
    brand: 'Troublemaker',
    category: 'Coach Jacket',
    price: 285000,
    discount: 0,
    rating: 5,
    reviews: 1,
    createdAt: '2026-07-07T00:03:00.000Z',
    image: 'assets/products/tm-merah.jpeg',
    description: 'Jaket Troublemaker original warna maroon dengan patch resmi, zipper hitam, dan karakter streetwear tegas.',
    specs: ['Produk resmi Troublemaker', 'Warna maroon', 'Full zipper', 'Patch Troublemaker original', 'Foto produk asli'],
    colors: ['Maroon'],
    sizes: ['M', 'L', 'XL'],
    stock: { 'Maroon-M': 7, 'Maroon-L': 7, 'Maroon-XL': 5 }
  },
  {
    id: 'tm-biru-original-jacket',
    name: 'Troublemaker Navy Original Jacket',
    brand: 'Troublemaker',
    category: 'Coach Jacket',
    price: 285000,
    discount: 0,
    rating: 5,
    reviews: 1,
    createdAt: '2026-07-07T00:04:00.000Z',
    image: 'assets/products/tm-biru.jpeg',
    description: 'Jaket Troublemaker original warna navy dengan detail patch resmi, zipper hitam, dan gaya streetwear clean.',
    specs: ['Produk resmi Troublemaker', 'Warna navy', 'Full zipper', 'Patch Troublemaker original', 'Foto produk asli'],
    colors: ['Navy'],
    sizes: ['M', 'L', 'XL'],
    stock: { 'Navy-M': 7, 'Navy-L': 7, 'Navy-XL': 5 }
  },
  {
    id: 'tm-olive-original-jacket',
    name: 'Troublemaker Olive Original Jacket',
    brand: 'Troublemaker',
    category: 'Coach Jacket',
    price: 285000,
    discount: 0,
    rating: 5,
    reviews: 1,
    createdAt: '2026-07-07T00:05:00.000Z',
    image: 'assets/products/tm-olive.jpeg',
    description: 'Jaket Troublemaker original warna olive dengan detail patch resmi, zipper hitam, dan tampilan streetwear clean.',
    specs: ['Produk resmi Troublemaker', 'Warna olive', 'Full zipper', 'Patch Troublemaker original', 'Foto produk asli'],
    colors: ['Olive'],
    sizes: ['M', 'L', 'XL'],
    stock: { 'Olive-M': 7, 'Olive-L': 7, 'Olive-XL': 5 }
  },
  {
    id: 'stone-island-hooded-jacket',
    name: 'Stone Island Hooded Jacket',
    brand: 'Stone Island',
    category: 'Windbreaker',
    price: 1499000,
    discount: 0,
    rating: 5,
    reviews: 1,
    createdAt: '2026-07-07T00:06:00.000Z',
    image: 'assets/products/stone-island-jacket-1.jpeg',
    description: 'Jaket Stone Island navy dengan hoodie, full zipper, material ringan, dan patch kompas ikonik di bagian lengan.',
    specs: ['Jaket hooded Stone Island', 'Warna navy', 'Full zipper', 'Patch kompas di lengan', 'Material ringan untuk layering harian'],
    colors: ['Navy'],
    sizes: ['M', 'L', 'XL'],
    stock: { 'Navy-M': 5, 'Navy-L': 6, 'Navy-XL': 4 }
  },
  {
    id: 'stone-island-sand-hooded-jacket',
    name: 'Stone Island Sand Hooded Jacket',
    brand: 'Stone Island',
    category: 'Windbreaker',
    price: 1499000,
    discount: 0,
    rating: 5,
    reviews: 1,
    createdAt: '2026-07-07T00:07:00.000Z',
    image: 'assets/products/stone-island-sand-jacket.jpeg',
    description: 'Jaket Stone Island warna sand dengan hoodie, full zipper, dan patch kompas ikonik untuk tampilan streetwear premium.',
    specs: ['Jaket hooded Stone Island', 'Warna sand', 'Full zipper', 'Patch kompas di lengan', 'Material ringan untuk aktivitas harian'],
    colors: ['Cream'],
    sizes: ['M', 'L', 'XL'],
    stock: { 'Cream-M': 5, 'Cream-L': 6, 'Cream-XL': 4 }
  },
  {
    id: 'stone-island-olive-hooded-jacket',
    name: 'Stone Island Olive Hooded Jacket',
    brand: 'Stone Island',
    category: 'Windbreaker',
    price: 1499000,
    discount: 0,
    rating: 5,
    reviews: 1,
    createdAt: '2026-07-07T00:08:00.000Z',
    image: 'assets/products/stone-island-olive-jacket.jpeg',
    description: 'Jaket Stone Island warna olive dengan hoodie, full zipper, dan patch kompas di lengan untuk look outdoor streetwear.',
    specs: ['Jaket hooded Stone Island', 'Warna olive', 'Full zipper', 'Patch kompas di lengan', 'Cocok untuk gaya outdoor streetwear'],
    colors: ['Olive'],
    sizes: ['M', 'L', 'XL'],
    stock: { 'Olive-M': 5, 'Olive-L': 6, 'Olive-XL': 4 }
  },
  {
    id: 'stone-island-navy-hooded-windbreaker',
    name: 'Stone Island Navy Hooded Windbreaker',
    brand: 'Stone Island',
    category: 'Windbreaker',
    price: 1499000,
    discount: 0,
    rating: 5,
    reviews: 1,
    createdAt: '2026-07-08T00:00:00.000Z',
    image: 'assets/products/stone-island-navy-hooded-jacket.jpg',
    description: 'Jaket Stone Island warna navy dengan hoodie, full zipper, dua kantong flap depan, dan patch kompas ikonik di lengan.',
    specs: ['Jaket hooded Stone Island', 'Warna navy', 'Full zipper', 'Dua kantong flap depan', 'Patch kompas di lengan'],
    colors: ['Navy'],
    sizes: ['M', 'L', 'XL'],
    stock: { 'Navy-M': 5, 'Navy-L': 6, 'Navy-XL': 4 }
  },
  {
    id: 'stone-island-cream-hooded-windbreaker',
    name: 'Stone Island Cream Hooded Windbreaker',
    brand: 'Stone Island',
    category: 'Windbreaker',
    price: 1499000,
    discount: 0,
    rating: 5,
    reviews: 1,
    createdAt: '2026-07-08T00:01:00.000Z',
    image: 'assets/products/stone-island-cream-hooded-jacket.jpg',
    description: 'Jaket Stone Island warna cream dengan hoodie, zipper kontras, kantong depan, dan patch kompas untuk gaya streetwear premium.',
    specs: ['Jaket hooded Stone Island', 'Warna cream', 'Full zipper kontras', 'Kantong depan', 'Patch kompas di lengan'],
    colors: ['Cream'],
    sizes: ['M', 'L', 'XL'],
    stock: { 'Cream-M': 5, 'Cream-L': 6, 'Cream-XL': 4 }
  }
];
const LEGACY_DEMO_IDS = new Set([
  'tm-bomber-black',
  'tm-hoodie-ash',
  'tm-denim-blue',
  'tm-varsity-maroon',
  'tm-windbreaker-navy',
  'tm-coach-black'
]);

const els = {
  productGrid: document.getElementById('product-grid'),
  emptyState: document.getElementById('empty-state'),
  resultCount: document.getElementById('result-count'),
  activeFilterCopy: document.getElementById('active-filter-copy'),
  searchInput: document.getElementById('search-input'),
  brandFilter: document.getElementById('brand-filter'),
  categoryFilter: document.getElementById('category-filter'),
  sizeFilter: document.getElementById('size-filter'),
  sortSelect: document.getElementById('sort-select'),
  resetFilters: document.getElementById('reset-filters'),
  cartList: document.getElementById('cart-list'),
  wishlistList: document.getElementById('wishlist-list'),
  cartCount: document.getElementById('cart-count'),
  wishlistCount: document.getElementById('wishlist-count'),
  subtotal: document.getElementById('subtotal-copy'),
  discount: document.getElementById('discount-copy'),
  shipping: document.getElementById('shipping-copy'),
  grandTotal: document.getElementById('grand-total-copy'),
  grandTotalBreakdown: document.getElementById('grand-total-breakdown'),
  serviceFee: document.getElementById('service-fee-copy'),
  checkoutItems: document.getElementById('checkout-items'),
  summaryItemCount: document.getElementById('summary-item-count'),
  summaryStatus: document.getElementById('summary-status'),
  summaryCourier: document.getElementById('summary-courier'),
  summaryPayment: document.getElementById('summary-payment'),
  summaryVoucher: document.getElementById('summary-voucher'),
  voucherInput: document.getElementById('voucher-input'),
  courierSelect: document.getElementById('courier-select'),
  paymentSelect: document.getElementById('payment-select'),
  checkoutForm: document.getElementById('checkout-form'),
  orderCreated: document.getElementById('order-created'),
  ordersGrid: document.getElementById('orders-grid'),
  accountDashboard: document.getElementById('account-dashboard'),
  dashboardName: document.getElementById('dashboard-name'),
  dashboardEmail: document.getElementById('dashboard-email'),
  dashboardLogout: document.getElementById('dashboard-logout'),
  productModal: document.getElementById('product-modal'),
  modalClose: document.getElementById('modal-close'),
  modalImage: document.getElementById('modal-image'),
  modalBrand: document.getElementById('modal-brand'),
  modalTitle: document.getElementById('modal-title'),
  modalDescription: document.getElementById('modal-description'),
  modalRating: document.getElementById('modal-rating'),
  modalPrice: document.getElementById('modal-price'),
  modalColor: document.getElementById('modal-color'),
  modalSize: document.getElementById('modal-size'),
  modalStock: document.getElementById('modal-stock'),
  modalSpecs: document.getElementById('modal-specs'),
  modalAddCart: document.getElementById('modal-add-cart'),
  modalWishlist: document.getElementById('modal-wishlist'),
  loginModal: document.getElementById('login-modal'),
  loginBtn: document.getElementById('login-btn'),
  footerLogin: document.getElementById('footer-login'),
  loginClose: document.getElementById('login-close'),
  loginForm: document.getElementById('login-form'),
  loginName: document.getElementById('login-name'),
  loginEmail: document.getElementById('login-email'),
  loginPassword: document.getElementById('login-password'),
  logoutBtn: document.getElementById('logout-btn'),
  menuToggle: document.getElementById('menu-toggle'),
  siteNav: document.getElementById('site-nav'),
  toastWrap: document.getElementById('toast-wrap'),
  cartJump: document.getElementById('cart-jump'),
  heroProductImage: document.getElementById('hero-product-image'),
  heroProductEmpty: document.getElementById('hero-product-empty')
};

const money = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 });
const STORE_KEYS = {
  products: 'troubleMakerProducts',
  cart: 'troubleMakerCart',
  wishlist: 'troubleMakerWishlist',
  orders: 'troubleMakerOrders',
  users: 'troubleMakerUsers',
  customer: 'troubleMakerCustomer',
  admin: 'troubleMakerAdmin',
  seedVersion: 'troubleMakerSeedVersion'
};

let activeProduct = null;
let authAction = 'login';
let products = loadProducts();
let cart = read(STORE_KEYS.cart, []);
let wishlist = read(STORE_KEYS.wishlist, []);
let orders = read(STORE_KEYS.orders, []);
let users = read(STORE_KEYS.users, []);

function read(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
  catch { return fallback; }
}
function write(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function clone(value) { return JSON.parse(JSON.stringify(value)); }

function loadProducts() {
  const stored = read(STORE_KEYS.products, null);
  if (!Array.isArray(stored)) {
    write(STORE_KEYS.products, clone(DEFAULT_PRODUCTS));
    write(STORE_KEYS.seedVersion, OFFICIAL_SEED_VERSION);
    return clone(DEFAULT_PRODUCTS);
  }

  let cleaned = stored.filter((product) => !LEGACY_DEMO_IDS.has(product.id));
  const existingIds = new Set(cleaned.map((product) => product.id));
  const missingDefaultProducts = clone(DEFAULT_PRODUCTS).filter((product) => !existingIds.has(product.id));

  if (missingDefaultProducts.length) cleaned = [...missingDefaultProducts, ...cleaned];
  write(STORE_KEYS.seedVersion, OFFICIAL_SEED_VERSION);
  if (missingDefaultProducts.length || cleaned.length !== stored.length) write(STORE_KEYS.products, cleaned);
  return cleaned;
}

function salePrice(product) { return Math.round(Number(product.price || 0) * (1 - Number(product.discount || 0) / 100)); }
function stockFor(product, color, size) { return Number(product.stock?.[`${color}-${size}`] || 0); }
function totalStock(product) { return Object.values(product.stock || {}).reduce((sum, value) => sum + Number(value), 0); }
function currentCustomer() { return read(STORE_KEYS.customer, null); }
function toast(message) {
  if (!els.toastWrap) return;
  const node = document.createElement('div');
  node.className = 'toast';
  node.textContent = message;
  els.toastWrap.appendChild(node);
  setTimeout(() => node.remove(), 3200);
}
function colorValue(color) {
  return { Hitam: '#101014', Navy: '#172554', Maroon: '#7f1d1d', Olive: '#4d5b37', Abu: '#8d949e', Putih: '#d8d8d2', Pink: '#f4a9bc', Cream: '#e6dac8' }[color] || '#d7dde8';
}
function hasOfficialImage(product) { return Boolean(product.image && !String(product.image).includes('images.unsplash.com')); }

function renderProducts() {
  if (!els.productGrid) return;
  products = loadProducts();
  syncHeroProduct();
  const filtered = getFilteredProducts();
  els.productGrid.innerHTML = filtered.map(productCard).join('');
  els.emptyState.hidden = filtered.length > 0;
  els.resultCount.textContent = `${filtered.length} produk`;
  els.activeFilterCopy.textContent = filterCopy(filtered.length);
}

function getFilteredProducts() {
  const query = (els.searchInput?.value || '').trim().toLowerCase();
  const brand = els.brandFilter?.value || 'all';
  const category = els.categoryFilter?.value || 'all';
  const size = els.sizeFilter?.value || 'all';
  const sort = els.sortSelect?.value || 'featured';
  const result = products.filter((product) => {
    const colors = Array.isArray(product.colors) ? product.colors : [];
    const sizes = Array.isArray(product.sizes) ? product.sizes : [];
    const haystack = `${product.name || ''} ${product.brand || ''} ${product.category || ''} ${colors.join(' ')} ${product.id || ''}`.toLowerCase();
    return (!query || haystack.includes(query)) &&
      (brand === 'all' || product.brand === brand) &&
      (category === 'all' || product.category === category) &&
      (size === 'all' || sizes.includes(size));
  });
  result.sort((a, b) => {
    if (sort === 'lowest') return salePrice(a) - salePrice(b);
    if (sort === 'highest') return salePrice(b) - salePrice(a);
    if (sort === 'newest') return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
    return totalStock(b) - totalStock(a);
  });
  return result;
}

function filterCopy(count) {
  if (!products.length) return 'Menunggu katalog resmi';
  const parts = [];
  if (els.brandFilter?.value !== 'all') parts.push(els.brandFilter.value);
  if (els.categoryFilter?.value !== 'all') parts.push(els.categoryFilter.value);
  if (els.sizeFilter?.value !== 'all') parts.push(`Ukuran ${els.sizeFilter.value}`);
  return parts.length ? parts.join(' / ') : `${count} produk resmi tersedia`;
}

function syncHeroProduct() {
  if (!els.heroProductImage || !els.heroProductEmpty) return;
  els.heroProductImage.src = HERO_TITLE_IMAGE;
  els.heroProductImage.alt = 'Model memakai jaket Troublemaker hitam dengan hood dan kacamata';
  els.heroProductImage.hidden = false;
  els.heroProductEmpty.hidden = true;
}

function productCard(product) {
  const finalPrice = salePrice(product);
  const isWish = wishlist.includes(product.id);
  const image = hasOfficialImage(product) ? `<img src="${product.image}" alt="${product.name}" loading="lazy">` : `<div class="official-image-missing"><span>Official image required</span></div>`;
  return `<article class="product-card reveal">
    <div class="product-image">
      ${image}
      <div class="product-badges">${product.discount ? `<span class="badge">-${product.discount}%</span>` : ''}<span class="badge soft">Official</span></div>
    </div>
    <div class="product-body">
      <div class="product-title-row">
        <div><h3>${product.name}</h3><span class="product-brand">${product.brand || 'Troublemaker'} / ${product.category || 'Jacket'}</span></div>
        <button class="small-button icon-only" data-wishlist="${product.id}" type="button" aria-label="Wishlist ${product.name}">${isWish ? 'Saved' : 'Wish'}</button>
      </div>
      <p>${product.description || 'Produk resmi Troublemaker.'}</p>
      <div class="price-row"><strong>${money.format(finalPrice)}</strong>${product.discount ? `<del>${money.format(product.price)}</del>` : ''}</div>
      <div class="swatches">${(product.colors || []).map((color) => `<span class="swatch" style="background:${colorValue(color)}" title="${color}"></span>`).join('')}<span>${(product.sizes || []).join(', ')}</span><span>${totalStock(product)} stok</span></div>
      <div class="product-actions"><button class="primary-button" data-detail="${product.id}" type="button">Detail</button><button class="secondary-button" data-quick="${product.id}" type="button">Tambah</button></div>
    </div>
  </article>`;
}

function openProduct(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  activeProduct = product;
  if (hasOfficialImage(product)) {
    els.modalImage.hidden = false;
    els.modalImage.src = product.image;
    els.modalImage.alt = product.name;
  } else {
    els.modalImage.hidden = true;
  }
  els.modalBrand.textContent = `${product.brand || 'Troublemaker'} / ${product.category || 'Jacket'}`;
  els.modalTitle.textContent = product.name;
  els.modalDescription.textContent = product.description || 'Produk resmi Troublemaker.';
  els.modalRating.textContent = product.rating ? `Rating ${product.rating} / ${product.reviews || 0} ulasan` : 'Official product';
  els.modalPrice.innerHTML = `<strong>${money.format(salePrice(product))}</strong>${product.discount ? `<del>${money.format(product.price)}</del>` : ''}`;
  els.modalColor.innerHTML = (product.colors || []).map((color) => `<option value="${color}">${color}</option>`).join('');
  els.modalSize.innerHTML = (product.sizes || []).map((size) => `<option value="${size}">${size}</option>`).join('');
  els.modalSpecs.innerHTML = (product.specs || ['Official Troublemaker product']).map((spec) => `<span>${spec}</span>`).join('');
  updateModalStock();
  els.productModal.classList.add('open');
  els.productModal.setAttribute('aria-hidden', 'false');
}
function closeProduct() { els.productModal?.classList.remove('open'); els.productModal?.setAttribute('aria-hidden', 'true'); }
function updateModalStock() {
  if (!activeProduct) return;
  const stock = stockFor(activeProduct, els.modalColor.value, els.modalSize.value);
  els.modalStock.textContent = stock > 0 ? `Stok varian tersedia: ${stock}` : 'Stok varian ini habis';
  els.modalAddCart.disabled = stock <= 0;
}
function quickAdd(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  const color = (product.colors || [])[0];
  const size = (product.sizes || []).find((item) => stockFor(product, color, item) > 0) || (product.sizes || [])[0];
  if (!color || !size) { toast('Varian produk belum lengkap.'); return; }
  addCart(product.id, color, size);
}
function addCart(productId, color, size) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;
  const stock = stockFor(product, color, size);
  const existing = cart.find((item) => item.productId === productId && item.color === color && item.size === size);
  const nextQty = (existing?.qty || 0) + 1;
  if (nextQty > stock) { toast('Stok varian tidak mencukupi.'); return; }
  if (existing) existing.qty = nextQty;
  else cart.push({ productId, color, size, qty: 1, price: salePrice(product) });
  write(STORE_KEYS.cart, cart);
  renderCart();
  toast(`${product.name} masuk keranjang.`);
}
function toggleWishlist(productId) {
  wishlist = wishlist.includes(productId) ? wishlist.filter((id) => id !== productId) : [...wishlist, productId];
  write(STORE_KEYS.wishlist, wishlist);
  renderProducts();
  renderWishlist();
  toast('Wishlist diperbarui.');
}

function renderCart() {
  if (!els.cartList) return;
  els.cartList.innerHTML = cart.length ? cart.map((item, index) => {
    const product = products.find((entry) => entry.id === item.productId);
    if (!product) return '';
    const image = hasOfficialImage(product) ? `<img src="${product.image}" alt="${product.name}">` : '<div class="cart-image-fallback">TM</div>';
    return `<article class="cart-item">
      <div class="cart-item-media">${image}</div>
      <div class="cart-item-info">
        <span class="cart-item-brand">${product.brand || 'Troublemaker'}</span>
        <h3>${product.name}</h3>
        <div class="cart-meta"><span>🎨 ${item.color}</span><span>📏 ${item.size}</span><span>💰 ${money.format(item.price)}</span></div>
        <div class="quantity-row" aria-label="Jumlah ${product.name}"><button data-qty="${index}|-1" type="button">−</button><strong>${item.qty}</strong><button data-qty="${index}|1" type="button">+</button></div>
      </div>
      <div class="cart-item-total"><span>Total item</span><strong>${money.format(item.price * item.qty)}</strong><button class="small-button" data-remove="${index}" type="button">Hapus</button></div>
    </article>`;
  }).join('') : '<div class="empty-state"><h3>Keranjang kosong</h3><p>Pilih produk resmi dari katalog untuk mulai checkout.</p></div>';
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
  const serviceFee = 0;
  let discount = voucher === 'TM10' ? Math.round(subtotal * 0.1) : 0;
  if (voucher === 'FREESHIP') shipping = 0;
  discount = Math.min(discount, subtotal);
  return { subtotal, shipping, discount, serviceFee, total: Math.max(subtotal + shipping + serviceFee - discount, 0), voucher };
}
function renderCheckoutItems() {
  if (!els.checkoutItems) return;
  els.checkoutItems.innerHTML = cart.length ? cart.map((item) => {
    const product = products.find((entry) => entry.id === item.productId);
    const name = product?.name || 'Produk tidak tersedia';
    const unitPrice = Number(item.price || 0);
    const image = product && hasOfficialImage(product) ? `<img src="${product.image}" alt="${name}">` : '<div class="checkout-image-fallback">TM</div>';
    return `<article class="checkout-summary-item">
      ${image}
      <div>
        <h4>${name}</h4>
        <p>${item.color} / ${item.size}</p>
        <span>${money.format(unitPrice)} x ${item.qty}</span>
      </div>
      <strong>${money.format(unitPrice * Number(item.qty || 0))}</strong>
    </article>`;
  }).join('') : '<p class="checkout-items-empty">Belum ada produk di keranjang.</p>';
}
function renderAddressPreview() {
  const get = (id) => document.getElementById(id)?.value.trim() || '';
  const label = get('recipient-label') || 'Rumah';
  const name = get('recipient-name') || 'Lengkapi nama penerima';
  const phone = get('recipient-phone') || 'Nomor telepon belum diisi';
  const parts = [
    get('recipient-address'),
    get('recipient-district'),
    get('recipient-city'),
    get('recipient-province'),
    get('recipient-postal') ? 'Kode Pos ' + get('recipient-postal') : ''
  ].filter(Boolean);
  const note = get('recipient-note');
  const full = parts.length ? parts.join(', ') + (note ? ' | Catatan: ' + note : '') : 'Alamat lengkap akan tampil di sini setelah kamu mengisi detail pengiriman.';
  const labelNode = document.getElementById('address-preview-label');
  const nameNode = document.getElementById('address-preview-name');
  const phoneNode = document.getElementById('address-preview-phone');
  const fullNode = document.getElementById('address-preview-full');
  if (labelNode) labelNode.textContent = label;
  if (nameNode) nameNode.textContent = name;
  if (phoneNode) phoneNode.textContent = phone;
  if (fullNode) fullNode.textContent = full;
}

function renderTotals() {
  const summary = cartSummary();
  if (!els.subtotal) return;
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const courierName = (els.courierSelect?.value || 'Reguler|18000').split('|')[0];
  const paymentName = els.paymentSelect?.value || 'QRIS';
  const voucherCopy = summary.voucher || 'Tidak ada';
  els.subtotal.textContent = money.format(summary.subtotal);
  els.discount.textContent = money.format(summary.discount);
  els.shipping.textContent = money.format(summary.shipping);
  if (els.serviceFee) els.serviceFee.textContent = money.format(summary.serviceFee);
  els.grandTotal.textContent = money.format(summary.total);
  if (els.grandTotalBreakdown) els.grandTotalBreakdown.textContent = money.format(summary.total);
  renderCheckoutItems();
  if (els.summaryItemCount) els.summaryItemCount.textContent = itemCount + ' item';
  if (els.summaryStatus) els.summaryStatus.textContent = itemCount ? 'Siap dicek' : 'Keranjang kosong';
  if (els.summaryCourier) els.summaryCourier.textContent = courierName;
  if (els.summaryPayment) els.summaryPayment.textContent = paymentName;
  if (els.summaryVoucher) els.summaryVoucher.textContent = voucherCopy;
}
function visibleOrders() {
  const customer = currentCustomer();
  if (!customer) return [];
  return orders.filter((order) => order.email === customer.email);
}
function orderItemDetail(item) {
  const product = products.find((entry) => entry.id === item.productId);
  const name = product?.name || 'Produk tidak tersedia';
  const brand = product?.brand || 'Troublemaker';
  const image = product && hasOfficialImage(product) ? `<img src="${product.image}" alt="${name}">` : '<div class="order-image-fallback">TM</div>';
  return `<div class="order-item">
    ${image}
    <div>
      <span>${brand}</span>
      <strong>${name}</strong>
      <small>${item.color} / ${item.size} / Qty ${item.qty}</small>
    </div>
    <strong>${money.format(Number(item.price || 0) * Number(item.qty || 0))}</strong>
  </div>`;
}
function orderSummary(order) {
  const subtotal = Number(order.subtotal ?? (order.items || []).reduce((sum, item) => sum + Number(item.price || 0) * Number(item.qty || 0), 0));
  const shipping = Number(order.shipping ?? 0);
  const discount = Number(order.discount ?? 0);
  const total = Number(order.total ?? Math.max(subtotal + shipping - discount, 0));
  return { subtotal, shipping, discount, total };
}
function renderOrders() {
  if (!els.ordersGrid) return;
  const list = visibleOrders();
  els.ordersGrid.innerHTML = list.length ? list.map((order) => {
    const summary = orderSummary(order);
    const date = new Date(order.createdAt).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' });
    return `<article class="order-card detailed-order-card">
      <div class="order-card-header">
        <div>
          <span class="order-label">Invoice</span>
          <strong>${order.number}</strong>
          <small>${date}</small>
        </div>
        <span class="status-pill">${order.status}</span>
      </div>
      <div class="order-progress" aria-label="Status pesanan"><span class="active"></span><span></span><span></span></div>
      <div class="order-detail-grid">
        <div><span>👤 Pelanggan</span><strong>${order.customer || '-'}</strong><small>${order.phone || '-'}</small></div>
        <div><span>📍 Alamat</span><strong>${order.address || '-'}</strong><small>${order.email || '-'}</small></div>
        <div><span>🚚 Pengiriman</span><strong>${order.courier || 'Reguler'}</strong><small>Resi: ${order.tracking || 'Belum tersedia'}</small></div>
        <div><span>💳 Pembayaran</span><strong>${order.payment || '-'}</strong><small>${order.voucher ? `Voucher: ${order.voucher}` : 'Tanpa voucher'}</small></div>
      </div>
      <div class="order-items">${(order.items || []).map(orderItemDetail).join('')}</div>
      <div class="order-summary-mini">
        <div><span>Subtotal</span><strong>${money.format(summary.subtotal)}</strong></div>
        <div><span>Ongkir</span><strong>${money.format(summary.shipping)}</strong></div>
        <div><span>Diskon</span><strong>${money.format(summary.discount)}</strong></div>
        <div class="grand"><span>Total</span><strong>${money.format(summary.total)}</strong></div>
      </div>
    </article>`;
  }).join('') : '<div class="empty-state"><h3>Belum ada pesanan</h3><p>Pesanan yang dibuat setelah login akan tampil lengkap di riwayat checkout kamu.</p></div>';
}

function renderAuth() {
  const customer = currentCustomer();
  if (els.loginBtn) {
    els.loginBtn.textContent = customer ? `Hi, ${customer.name.split(' ')[0]}` : 'Login';
    if (els.loginBtn.tagName === 'A') els.loginBtn.href = customer ? 'index.html#account-dashboard' : 'login.html';
  }
  if (els.footerLogin) {
    els.footerLogin.textContent = customer ? 'Dashboard' : 'Login';
    if (els.footerLogin.tagName === 'A') els.footerLogin.href = customer ? 'index.html#account-dashboard' : 'login.html';
  }
  if (els.logoutBtn) els.logoutBtn.hidden = !customer;
  if (els.accountDashboard) els.accountDashboard.hidden = !customer;
  if (customer) {
    if (els.dashboardName) els.dashboardName.textContent = customer.name;
    if (els.dashboardEmail) els.dashboardEmail.textContent = customer.email;
    const name = document.getElementById('recipient-name');
    const email = document.getElementById('recipient-email');
    if (name && !name.value) name.value = customer.name;
    if (email && !email.value) email.value = customer.email;
  }
  renderAddressPreview();
  renderOrders();
}

function logoutCustomer() {
  localStorage.removeItem(STORE_KEYS.customer);
  els.loginModal?.classList.remove('open');
  renderAuth();
  toast('Logout berhasil.');
}
function handleAuthSubmit(event) {
  event.preventDefault();
  const name = (els.loginName?.value || '').trim();
  const email = (els.loginEmail?.value || '').trim().toLowerCase();
  const password = els.loginPassword?.value || '';
  if (password.length < 6) { toast('Password minimal 6 karakter.'); return; }
  if (authAction === 'register') {
    if (!name) { toast('Nama wajib diisi untuk register.'); return; }
    if (users.some((user) => user.email === email)) { toast('Email sudah terdaftar.'); return; }
    const user = { name, email, password, createdAt: new Date().toISOString() };
    users.push(user);
    write(STORE_KEYS.users, users);
    write(STORE_KEYS.customer, { name, email });
    toast('Register berhasil.');
  } else {
    const user = users.find((item) => item.email === email && item.password === password);
    if (!user) { toast('Akun tidak ditemukan atau password salah.'); return; }
    write(STORE_KEYS.customer, { name: user.name, email: user.email });
    toast('Login berhasil.');
  }
  els.loginModal.classList.remove('open');
  els.loginForm.reset();
  renderAuth();
  location.hash = '#account-dashboard';
}

function bindStorefront() {
  ['input', 'change'].forEach((eventName) => {
    [els.searchInput, els.brandFilter, els.categoryFilter, els.sizeFilter, els.sortSelect].forEach((node) => node?.addEventListener(eventName, renderProducts));
  });
  els.resetFilters?.addEventListener('click', () => {
    els.searchInput.value = '';
    els.brandFilter.value = 'all';
    els.categoryFilter.value = 'all';
    els.sizeFilter.value = 'all';
    els.sortSelect.value = 'featured';
    renderProducts();
  });
  document.addEventListener('click', (event) => {
    const detail = event.target.closest('[data-detail]'); if (detail) openProduct(detail.dataset.detail);
    const quick = event.target.closest('[data-quick]'); if (quick) quickAdd(quick.dataset.quick);
    const wish = event.target.closest('[data-wishlist]'); if (wish) toggleWishlist(wish.dataset.wishlist);
    const remove = event.target.closest('[data-remove]'); if (remove) { cart.splice(Number(remove.dataset.remove), 1); write(STORE_KEYS.cart, cart); renderCart(); }
    const qty = event.target.closest('[data-qty]');
    if (qty) {
      const [indexText, deltaText] = qty.dataset.qty.split('|');
      const index = Number(indexText);
      const delta = Number(deltaText);
      const item = cart[index];
      if (!item) return;
      const product = products.find((entry) => entry.id === item.productId);
      const next = item.qty + delta;
      if (next < 1) return;
      if (next > stockFor(product, item.color, item.size)) { toast('Stok varian tidak mencukupi.'); return; }
      item.qty = next;
      write(STORE_KEYS.cart, cart);
      renderCart();
    }
  });
  els.modalClose?.addEventListener('click', closeProduct);
  els.productModal?.addEventListener('click', (event) => { if (event.target === els.productModal) closeProduct(); });
  els.modalColor?.addEventListener('change', updateModalStock);
  els.modalSize?.addEventListener('change', updateModalStock);
  els.modalAddCart?.addEventListener('click', () => { if (!activeProduct) return; addCart(activeProduct.id, els.modalColor.value, els.modalSize.value); closeProduct(); });
  els.modalWishlist?.addEventListener('click', () => { if (activeProduct) toggleWishlist(activeProduct.id); });
  els.voucherInput?.addEventListener('input', renderTotals);
  els.courierSelect?.addEventListener('change', renderTotals);
  els.paymentSelect?.addEventListener('change', renderTotals);
  ['recipient-name', 'recipient-phone', 'recipient-label', 'recipient-postal', 'recipient-province', 'recipient-city', 'recipient-district', 'recipient-address', 'recipient-note'].forEach((id) => {
    const node = document.getElementById(id);
    node?.addEventListener('input', renderAddressPreview);
    node?.addEventListener('change', renderAddressPreview);
  });
  document.querySelector('[data-focus-address]')?.addEventListener('click', () => {
    document.getElementById('recipient-address')?.focus();
  });
  els.checkoutForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!cart.length) { toast('Keranjang masih kosong.'); return; }
    const customer = currentCustomer();
    if (!customer) { toast('Login atau register dulu sebelum checkout.'); setTimeout(() => { window.location.href = 'login.html'; }, 450); return; }
    const summary = cartSummary();
    const addressParts = [
      document.getElementById('recipient-address').value,
      document.getElementById('recipient-district').value,
      document.getElementById('recipient-city').value,
      document.getElementById('recipient-province').value,
      'Kode Pos ' + document.getElementById('recipient-postal').value
    ].filter(Boolean);
    const addressNote = document.getElementById('recipient-note').value.trim();
    const order = {
      number: `TM-${Date.now().toString().slice(-7)}`,
      customer: document.getElementById('recipient-name').value,
      email: document.getElementById('recipient-email').value,
      phone: document.getElementById('recipient-phone').value,
      address: '[' + document.getElementById('recipient-label').value + '] ' + addressParts.join(', ') + (addressNote ? ' | Catatan: ' + addressNote : ''),
      addressLabel: document.getElementById('recipient-label').value,
      postalCode: document.getElementById('recipient-postal').value,
      payment: document.getElementById('payment-select').value,
      courier: els.courierSelect.value.split('|')[0],
      subtotal: summary.subtotal,
      shipping: summary.shipping,
      discount: summary.discount,
      serviceFee: summary.serviceFee,
      voucher: summary.voucher,
      total: summary.total,
      status: 'Menunggu pembayaran',
      tracking: '',
      items: [...cart],
      createdAt: new Date().toISOString()
    };
    orders.unshift(order);
    write(STORE_KEYS.orders, orders);
    cart = [];
    write(STORE_KEYS.cart, cart);
    renderCart();
    renderOrders();
    els.orderCreated.hidden = false;
    els.orderCreated.textContent = `Pesanan ${order.number} berhasil dibuat.`;
    els.checkoutForm.reset();
    renderAddressPreview();
    renderAuth();
    toast('Pesanan berhasil dibuat.');
    location.hash = '#account-dashboard';
  });
  const openAuth = () => {
    if (currentCustomer()) location.hash = '#account-dashboard';
    else els.loginModal.classList.add('open');
  };
  if (els.loginBtn?.tagName !== 'A') els.loginBtn?.addEventListener('click', openAuth);
  if (els.footerLogin?.tagName !== 'A') els.footerLogin?.addEventListener('click', openAuth);
  els.loginClose?.addEventListener('click', () => els.loginModal.classList.remove('open'));
  els.loginForm?.addEventListener('click', (event) => { const button = event.target.closest('[data-auth-action]'); if (button) authAction = button.dataset.authAction; });
  els.loginForm?.addEventListener('submit', handleAuthSubmit);
  els.logoutBtn?.addEventListener('click', logoutCustomer);
  els.dashboardLogout?.addEventListener('click', logoutCustomer);
  els.menuToggle?.addEventListener('click', () => { const open = els.siteNav.classList.toggle('open'); els.menuToggle.setAttribute('aria-expanded', open); });
  els.cartJump?.addEventListener('click', () => { location.hash = '#keranjang'; });
  renderProducts();
  renderCart();
  renderWishlist();
  renderAuth();
}

function bindAdmin() {
  const loginPanel = document.getElementById('admin-login-panel');
  const dashboard = document.getElementById('admin-dashboard');
  const loginForm = document.getElementById('admin-login-form');
  const logout = document.getElementById('admin-logout');
  const productForm = document.getElementById('product-admin-form');
  const productId = document.getElementById('admin-product-id');
  const currentImage = document.getElementById('admin-current-image');
  const productFile = document.getElementById('admin-product-file');
  const imageUrl = document.getElementById('admin-product-image');
  const imagePreview = document.getElementById('admin-image-preview');
  const submitButton = document.getElementById('admin-product-submit');
  const cancelEdit = document.getElementById('admin-product-cancel');

  function showDashboard() { loginPanel.hidden = true; dashboard.hidden = false; renderAdmin(); }
  function resetProductForm() {
    productForm?.reset();
    if (productId) productId.value = '';
    if (currentImage) currentImage.value = '';
    if (submitButton) submitButton.textContent = 'Tambah Produk';
    if (cancelEdit) cancelEdit.hidden = true;
    updateImagePreview('');
    const brand = document.getElementById('admin-product-brand');
    if (brand) brand.value = 'Troublemaker';
  }
  function updateImagePreview(src) {
    if (!imagePreview) return;
    imagePreview.innerHTML = src ? `<img src="${src}" alt="Preview foto produk resmi">` : 'Preview foto resmi';
  }
  function resolveAdminImage() {
    return currentImage?.value || imageUrl?.value.trim() || '';
  }

  loginForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = document.getElementById('admin-username').value;
    const pass = document.getElementById('admin-password').value;
    if (user === 'admin' && pass === 'tm12345') { sessionStorage.setItem(STORE_KEYS.admin, 'true'); showDashboard(); toast('Admin login berhasil.'); }
    else toast('Username atau password salah.');
  });
  logout?.addEventListener('click', () => { sessionStorage.removeItem(STORE_KEYS.admin); loginPanel.hidden = false; dashboard.hidden = true; });

  productFile?.addEventListener('change', () => {
    const file = productFile.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { toast('File harus berupa gambar produk resmi.'); productFile.value = ''; return; }
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      currentImage.value = String(reader.result || '');
      if (imageUrl) imageUrl.value = '';
      updateImagePreview(currentImage.value);
      toast('Foto resmi siap dipakai.');
    });
    reader.readAsDataURL(file);
  });
  imageUrl?.addEventListener('input', () => {
    if (imageUrl.value.trim()) {
      if (currentImage) currentImage.value = imageUrl.value.trim();
      updateImagePreview(imageUrl.value.trim());
    } else if (!productFile?.files?.length) {
      if (currentImage) currentImage.value = '';
      updateImagePreview('');
    }
  });
  cancelEdit?.addEventListener('click', resetProductForm);

  productForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('admin-product-name').value.trim();
    const colors = document.getElementById('admin-product-colors').value.split(',').map((item) => item.trim()).filter(Boolean);
    const sizes = document.getElementById('admin-product-sizes').value.split(',').map((item) => item.trim().toUpperCase()).filter(Boolean);
    const stockEach = Number(document.getElementById('admin-product-stock').value || 0);
    const image = resolveAdminImage();
    if (!image) { toast('Tambahkan foto jaket Troublemaker asli lewat upload atau URL resmi.'); return; }
    const stock = {}; colors.forEach((color) => sizes.forEach((size) => { stock[`${color}-${size}`] = stockEach; }));
    const payload = {
      id: productId?.value || `official-${Date.now()}`,
      name,
      brand: document.getElementById('admin-product-brand').value.trim() || 'Troublemaker',
      category: document.getElementById('admin-product-category').value,
      price: Number(document.getElementById('admin-product-price').value),
      discount: Number(document.getElementById('admin-product-discount').value || 0),
      rating: 0,
      reviews: 0,
      createdAt: productId?.value ? (products.find((item) => item.id === productId.value)?.createdAt || new Date().toISOString()) : new Date().toISOString(),
      image,
      description: document.getElementById('admin-product-description').value.trim(),
      specs: ['Produk resmi Troublemaker', 'Foto resmi dikelola admin'],
      colors,
      sizes,
      stock
    };
    const index = products.findIndex((item) => item.id === payload.id);
    if (index >= 0) products[index] = payload;
    else products.unshift(payload);
    write(STORE_KEYS.products, products);
    resetProductForm();
    renderAdmin();
    toast(index >= 0 ? 'Produk resmi berhasil diperbarui.' : 'Produk resmi berhasil ditambahkan.');
  });
  document.getElementById('reset-products-admin')?.addEventListener('click', () => { products = clone(DEFAULT_PRODUCTS); write(STORE_KEYS.products, products); write(STORE_KEYS.seedVersion, OFFICIAL_SEED_VERSION); resetProductForm(); renderAdmin(); toast('Katalog default berhasil dikembalikan.'); });
  document.getElementById('export-report')?.addEventListener('click', () => {
    const rows = ['order_number,customer,total,status,created_at', ...orders.map((order) => `${order.number},${order.customer},${order.total},${order.status},${order.createdAt}`)];
    const blob = new Blob([rows.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'troublemaker-report.csv'; a.click(); URL.revokeObjectURL(url);
  });
  document.addEventListener('click', (event) => {
    const editBtn = event.target.closest('[data-product-edit]');
    if (editBtn) {
      const product = products.find((item) => item.id === editBtn.dataset.productEdit);
      if (!product) return;
      productId.value = product.id;
      currentImage.value = product.image || '';
      document.getElementById('admin-product-name').value = product.name || '';
      document.getElementById('admin-product-brand').value = product.brand || 'Troublemaker';
      document.getElementById('admin-product-category').value = product.category || 'Bomber';
      document.getElementById('admin-product-price').value = product.price || 0;
      document.getElementById('admin-product-discount').value = product.discount || 0;
      document.getElementById('admin-product-colors').value = (product.colors || []).join(', ');
      document.getElementById('admin-product-sizes').value = (product.sizes || []).join(', ');
      document.getElementById('admin-product-stock').value = Math.max(...Object.values(product.stock || { stock: 0 }).map(Number), 0);
      document.getElementById('admin-product-image').value = String(product.image || '').startsWith('data:') ? '' : product.image || '';
      document.getElementById('admin-product-description').value = product.description || '';
      updateImagePreview(product.image || '');
      submitButton.textContent = 'Simpan Perubahan';
      cancelEdit.hidden = false;
      productForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    const deleteBtn = event.target.closest('[data-product-delete]');
    if (deleteBtn) {
      const product = products.find((item) => item.id === deleteBtn.dataset.productDelete);
      if (!product) return;
      if (!confirm(`Hapus ${product.name} dari katalog?`)) return;
      products = products.filter((item) => item.id !== product.id);
      cart = cart.filter((item) => item.productId !== product.id);
      wishlist = wishlist.filter((id) => id !== product.id);
      write(STORE_KEYS.products, products);
      write(STORE_KEYS.cart, cart);
      write(STORE_KEYS.wishlist, wishlist);
      resetProductForm();
      renderAdmin();
      toast('Produk resmi dihapus dari katalog.');
      return;
    }
    const statusBtn = event.target.closest('[data-order-status]');
    if (!statusBtn) return;
    const [number, status] = statusBtn.dataset.orderStatus.split('|');
    const order = orders.find((item) => item.number === number);
    if (!order) return;
    order.status = status;
    if (status === 'Dikirim' && !order.tracking) order.tracking = `TMX${Date.now().toString().slice(-8)}`;
    write(STORE_KEYS.orders, orders);
    renderAdmin();
    toast(`Status ${number} diperbarui.`);
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
  if (productTable) productTable.innerHTML = products.length ? products.map((product) => `<tr><td>${hasOfficialImage(product) ? `<img class="admin-product-thumb" src="${product.image}" alt="${product.name}">` : '<span class="admin-no-image">Foto wajib</span>'}</td><td>${product.name}<br><small>${product.brand}</small></td><td>${product.category}</td><td>${money.format(salePrice(product))}</td><td>${totalStock(product)}</td><td>${hasOfficialImage(product) ? 'Aktif' : 'Perlu foto resmi'}</td><td><button class="small-button" data-product-edit="${product.id}" type="button">Edit</button> <button class="small-button danger-button" data-product-delete="${product.id}" type="button">Hapus</button></td></tr>`).join('') : '<tr><td colspan="7">Belum ada produk resmi. Upload foto jaket Troublemaker asli melalui form di atas.</td></tr>';
  const orderTable = document.getElementById('admin-orders-table');
  if (orderTable) orderTable.innerHTML = orders.length ? orders.map((order) => `<tr><td>${order.number}</td><td>${order.customer}</td><td>${money.format(order.total)}</td><td>${order.status}</td><td><button class="small-button" data-order-status="${order.number}|Diproses">Proses</button> <button class="small-button" data-order-status="${order.number}|Dikirim">Kirim</button> <button class="small-button" data-order-status="${order.number}|Selesai">Selesai</button></td></tr>`).join('') : '<tr><td colspan="5">Belum ada pesanan.</td></tr>';
  const report = document.getElementById('report-box');
  if (report) {
    const aov = orders.length ? orders.reduce((sum, order) => sum + order.total, 0) / orders.length : 0;
    report.innerHTML = `<span>Average order value: <strong>${money.format(aov)}</strong></span><span>Total produk resmi: <strong>${products.length}</strong></span><span>Total akun customer: <strong>${users.length}</strong></span>`;
  }
}


function bindAuthPages() {
  users = read(STORE_KEYS.users, []);
  const loginForm = document.getElementById('standalone-login-form');
  const registerForm = document.getElementById('standalone-register-form');
  loginForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('standalone-login-email').value.trim().toLowerCase();
    const password = document.getElementById('standalone-login-password').value;
    if (password.length < 6) { toast('Password minimal 6 karakter.'); return; }
    const user = users.find((item) => item.email === email && item.password === password);
    if (!user) { toast('Akun tidak ditemukan atau password salah.'); return; }
    write(STORE_KEYS.customer, { name: user.name, email: user.email });
    toast('Login berhasil.');
    setTimeout(() => { window.location.href = 'index.html#account-dashboard'; }, 450);
  });
  registerForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('standalone-register-name').value.trim();
    const email = document.getElementById('standalone-register-email').value.trim().toLowerCase();
    const password = document.getElementById('standalone-register-password').value;
    if (password.length < 6) { toast('Password minimal 6 karakter.'); return; }
    if (users.some((user) => user.email === email)) { toast('Email sudah terdaftar.'); return; }
    const user = { name, email, password, createdAt: new Date().toISOString() };
    users.push(user);
    write(STORE_KEYS.users, users);
    write(STORE_KEYS.customer, { name, email });
    toast('Register berhasil.');
    setTimeout(() => { window.location.href = 'index.html#account-dashboard'; }, 450);
  });
}

if (document.body.classList.contains('admin-page')) bindAdmin(); else if (document.body.classList.contains('auth-page')) bindAuthPages(); else bindStorefront();
