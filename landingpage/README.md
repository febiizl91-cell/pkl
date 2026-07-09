# TroubleMaker

Implementasi static web app toko online jaket streetwear dengan katalog, filter ukuran, detail produk, login/register, wishlist, cart, checkout, riwayat pesanan, dan admin dashboard demo.

## Jalankan Lokal

```bash
cd landingpage
python3 -m http.server 3001
```

Buka `http://127.0.0.1:3001` untuk pengujian lokal saja. Untuk publikasi, deploy di hosting yang mengaktifkan HTTPS dan redirect HTTP ke HTTPS.

## Keamanan Deploy

- File `_headers` menyiapkan CSP, HSTS, `X-Content-Type-Options`, `X-Frame-Options`, Referrer Policy, dan Permissions Policy untuk hosting statis yang mendukungnya.
- Pastikan domain produksi memakai HTTPS valid dan redirect semua request HTTP ke HTTPS dari pengaturan hosting.
- Halaman admin demo diberi `noindex` dan dikeluarkan dari sitemap.
- URL gambar produk dibatasi ke `assets/...`, upload gambar lokal, atau URL `https://`; URL `http://` dan skema berbahaya ditolak oleh JavaScript.

## Admin Demo

- Username: `admin`
- Password: `tm12345`

Data produk, akun customer, cart, wishlist, dan pesanan disimpan di `localStorage` browser untuk kebutuhan demo statis. Jangan gunakan mode ini untuk transaksi produksi tanpa backend, database, hashing password server-side, dan autentikasi admin sungguhan.

## Catatan Produk Asli

Katalog default sengaja kosong karena website hanya boleh menampilkan jaket Troublemaker resmi. Tambahkan nama produk, harga, stok, dan URL/path foto produk asli melalui dashboard admin. Jika belum ada foto resmi, storefront akan menampilkan empty state dan tidak memakai gambar dummy.

## Halaman Utama

- `index.html`: storefront, katalog, cart, wishlist, checkout, dashboard customer.
- `login.html`: halaman login customer.
- `register.html`: halaman register customer.
- `admin.html`: dashboard admin demo untuk mengelola katalog dan pesanan.

## Mengelola Gambar Produk

Admin bisa menambahkan produk resmi dengan dua cara:

- Upload foto jaket asli langsung dari komputer melalui field `Upload foto resmi`.
- Simpan foto asli di `assets/products/`, lalu masukkan path seperti `assets/products/jaket-troublemaker-black.webp` pada field URL foto resmi.

Produk dapat diedit dan dihapus dari dashboard admin. Storefront dan hero otomatis memakai foto produk resmi yang sudah dimasukkan.
