const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
const detailButtons = document.querySelectorAll('.btn-detail');
const promoButtons = document.querySelectorAll('.btn-promo');
const outletButtons = document.querySelectorAll('.btn-outlet');

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  siteNav?.classList.toggle('open');
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

detailButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.product-card');
    if (!card) return;
    const name = card.querySelector('h3')?.textContent || 'Produk';
    const description = card.dataset.description || '';
    const price = card.dataset.price || '';
    alert(`${name}\n\n${description}\n\nHarga: Rp ${Number(price).toLocaleString('id-ID')}`);
  });
});

promoButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.promo-card');
    if (!card) return;
    const title = card.dataset.title || 'Promo';
    const message = card.dataset.message || '';
    const valid = card.dataset.valid || '';
    alert(`${title}\n\n${message}\n\nBerlaku sampai ${valid}`);
  });
});

outletButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.outlet-card');
    if (!card) return;
    const name = card.dataset.name || 'Outlet';
    const address = card.dataset.address || '';
    const hours = card.dataset.hours || '';
    const status = card.dataset.status || '';
    alert(`${name}\n\n${address}\n${hours}\nStatus: ${status}`);
  });
});
