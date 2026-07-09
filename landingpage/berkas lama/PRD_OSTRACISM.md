# PRD Website Toko Online Ostracism

## 1. Ringkasan Produk

Ostracism adalah website toko online untuk menjual jaket streetwear seperti bomber, hoodie, denim jacket, varsity, coach jacket, dan windbreaker. Website ini dibuat agar pelanggan dapat melihat katalog produk, mencari jaket berdasarkan kategori/ukuran/warna/harga, menyimpan wishlist, memasukkan produk ke cart, melakukan checkout, serta melihat riwayat dan status pesanan.

Website juga memiliki halaman admin untuk mengelola produk jaket, melihat pesanan, mengubah status pesanan, dan melihat laporan sederhana.

## 2. Latar Belakang

Brand Ostracism membutuhkan platform toko online yang rapi, mudah digunakan, dan cocok untuk produk streetwear. Website harus membantu pelanggan menemukan jaket yang sesuai ukuran dan gaya mereka, sekaligus memudahkan admin dalam mengelola katalog serta pesanan.

Untuk kebutuhan tugas PKL/sekolah, website ini dibuat sebagai sistem toko online berbasis web statis dengan penyimpanan lokal menggunakan `localStorage`. Pada pengembangan berikutnya, sistem dapat ditingkatkan dengan database dan backend.

## 3. Tujuan Produk

- Menyediakan katalog Ostracism yang informatif dan mudah dicari.
- Memudahkan pelanggan memilih produk berdasarkan kategori, ukuran, warna, harga, dan rating.
- Menyediakan fitur login/register sederhana untuk customer.
- Memungkinkan pelanggan menyimpan produk favorit ke wishlist.
- Memungkinkan pelanggan menambahkan produk ke cart dan melakukan checkout.
- Menampilkan riwayat dan status pesanan pelanggan.
- Menyediakan dashboard admin untuk mengelola produk dan pesanan.
- Membuat tampilan website modern, responsif, dan sesuai karakter streetwear.

## 4. Target Pengguna

### 4.1 Customer

Customer adalah pengguna yang ingin membeli Ostracism secara online.

Kebutuhan customer:

- Melihat daftar produk jaket.
- Mencari produk dengan cepat.
- Melihat detail produk.
- Memilih ukuran dan warna.
- Menyimpan wishlist.
- Menambahkan produk ke cart.
- Checkout dengan data pengiriman.
- Melihat status pesanan.

### 4.2 Admin

Admin adalah pengguna yang mengelola operasional toko.

Kebutuhan admin:

- Login ke dashboard admin.
- Menambahkan produk baru.
- Melihat daftar produk.
- Mengelola stok produk.
- Melihat daftar pesanan.
- Mengubah status pesanan.
- Melihat laporan penjualan sederhana.

## 5. Ruang Lingkup Produk

### 5.1 Termasuk Dalam Scope

- Landing page brand Ostracism.
- Katalog produk jaket.
- Filter produk.
- Pencarian produk.
- Detail produk.
- Wishlist.
- Cart.
- Checkout.
- Login/register customer.
- Riwayat pesanan.
- Dashboard admin.
- Manajemen produk dasar.
- Manajemen status pesanan.
- Tampilan responsif untuk desktop dan mobile.
- Penyimpanan data menggunakan `localStorage`.

### 5.2 Di Luar Scope Saat Ini

- Payment gateway asli.
- Database server seperti MySQL/Firebase.
- Backend API.
- Upload gambar produk langsung dari komputer.
- Notifikasi email/WhatsApp otomatis.
- Sistem ongkir real-time.
- Multi-admin dengan role permission.
- Keamanan autentikasi tingkat produksi.

## 6. Fitur Utama

### 6.1 Landing Page

Landing page menjadi halaman pertama yang dilihat pengguna.

Konten yang ditampilkan:

- Nama brand Ostracism.
- Hero image jaket streetwear.
- Deskripsi singkat toko.
- Search bar produk.
- Ringkasan keunggulan toko.
- Navigasi ke Produk, Size Chart, Checkout, Pesanan, Admin, Wishlist, Cart, dan Login.

Acceptance criteria:

- Brand Ostracism terlihat jelas di header dan hero.
- Tombol navigasi mengarah ke section yang benar.
- Search bar dapat mengisi pencarian katalog.
- Tampilan tetap rapi di layar HP dan desktop.

### 6.2 Katalog Produk

Katalog menampilkan semua produk jaket yang dijual.

Data produk minimal:

- Foto produk.
- Nama produk.
- Brand.
- Kategori.
- Harga.
- Diskon.
- Rating.
- Jumlah ulasan.
- Warna.
- Ukuran.
- Stok.
- Deskripsi singkat.

Kategori produk:

- Bomber.
- Hoodie.
- Denim Jacket.
- Varsity.
- Windbreaker.

Acceptance criteria:

- Produk tampil dalam bentuk grid/card.
- Setiap card menampilkan foto, nama, harga, rating, warna, stok, dan tombol aksi.
- Produk dapat dibuka ke detail produk.
- Produk dapat ditambahkan ke wishlist.
- Produk dapat ditambahkan cepat ke cart.

### 6.3 Pencarian dan Filter Produk

Customer dapat mencari dan memfilter produk.

Filter yang tersedia:

- Keyword pencarian.
- Kategori.
- Ukuran.
- Warna.
- Rentang harga.
- Urutan produk.

Pilihan urutan:

- Rekomendasi.
- Terbaru.
- Harga terendah.
- Harga tertinggi.
- Rating tertinggi.
- Diskon terbesar.

Acceptance criteria:

- Hasil produk berubah sesuai filter.
- Jika produk tidak ditemukan, tampil empty state.
- Tombol reset filter mengembalikan semua filter ke default.

### 6.4 Detail Produk

Detail produk menampilkan informasi lengkap produk.

Konten detail:

- Foto produk lebih besar.
- Nama produk.
- Brand.
- Kategori.
- Gender.
- Deskripsi.
- Rating.
- Harga normal dan harga diskon.
- Pilihan warna.
- Pilihan ukuran.
- Status stok varian.
- Spesifikasi produk.
- Tombol tambah ke cart.
- Tombol wishlist.

Acceptance criteria:

- Modal detail terbuka saat tombol detail diklik.
- Stok berubah sesuai pilihan warna dan ukuran.
- Tombol tambah cart nonaktif jika stok varian habis.
- Produk berhasil masuk cart jika stok tersedia.

### 6.5 Size Chart

Size chart membantu pelanggan memilih ukuran jaket.

Data ukuran:

- S.
- M.
- L.
- XL.
- XXL.

Informasi ukuran:

- Lebar dada.
- Panjang badan.
- Panjang lengan.

Acceptance criteria:

- Tabel size chart mudah dibaca.
- Data ukuran menggunakan satuan cm.
- Section tetap responsif di layar kecil.

### 6.6 Login dan Register Customer

Customer dapat membuat akun dan login.

Data register:

- Nama.
- Email.
- Password.

Data login:

- Email.
- Password.

Ketentuan:

- Password minimal 6 karakter.
- Email tidak boleh terdaftar dua kali.
- Setelah register berhasil, customer langsung login.
- Tombol header berubah menjadi sapaan customer.
- Customer dapat logout.

Acceptance criteria:

- Register menyimpan akun ke `localStorage`.
- Login hanya berhasil jika email dan password sesuai.
- Checkout hanya dapat dilakukan setelah login.
- Logout menghapus sesi customer aktif.

### 6.7 Wishlist

Wishlist digunakan untuk menyimpan produk favorit.

Fitur:

- Tambah produk ke wishlist.
- Hapus produk dari wishlist dengan klik ulang tombol wishlist.
- Menampilkan jumlah wishlist di header.
- Menampilkan daftar wishlist di area checkout.
- Membuka detail produk dari wishlist.

Acceptance criteria:

- Jumlah wishlist berubah secara real-time.
- Data wishlist tetap tersimpan setelah halaman di-refresh.
- Produk wishlist tidak duplikat.

### 6.8 Cart

Cart digunakan untuk menyimpan produk yang akan dibeli.

Fitur:

- Tambah produk ke cart.
- Menampilkan nama produk, warna, ukuran, harga, jumlah, dan subtotal item.
- Menambah jumlah item.
- Mengurangi jumlah item.
- Menghapus item.
- Validasi jumlah tidak melebihi stok.
- Menampilkan jumlah item cart di header.

Acceptance criteria:

- Produk masuk cart sesuai warna dan ukuran yang dipilih.
- Quantity tidak boleh kurang dari 1.
- Quantity tidak boleh lebih dari stok.
- Total cart berubah otomatis saat quantity berubah.

### 6.9 Checkout

Checkout digunakan untuk membuat pesanan.

Data checkout:

- Nama penerima.
- Nomor HP.
- Email.
- Alamat lengkap.
- Kurir.
- Metode pembayaran.
- Voucher.

Pilihan kurir:

- Reguler.
- Express.
- Same Day.

Metode pembayaran:

- QRIS.
- Virtual Account.
- E-Wallet.
- Transfer Manual.

Voucher:

- `OS10` untuk diskon 10%.
- `FREESHIP` untuk gratis ongkir.

Acceptance criteria:

- Checkout tidak dapat dilakukan jika cart kosong.
- Checkout tidak dapat dilakukan jika customer belum login.
- Total pesanan menghitung subtotal, diskon, ongkir, dan grand total.
- Setelah checkout berhasil, cart dikosongkan.
- Pesanan baru muncul di riwayat pesanan.

### 6.10 Riwayat Pesanan

Riwayat pesanan menampilkan pesanan yang sudah dibuat.

Data pesanan:

- Nomor pesanan.
- Nama customer.
- Metode pembayaran.
- Total.
- Status pesanan.
- Nomor resi jika tersedia.
- Tanggal pesanan.
- Jumlah item.

Status pesanan:

- Menunggu pembayaran.
- Diproses.
- Dikirim.
- Selesai.

Acceptance criteria:

- Pesanan baru muncul setelah checkout.
- Status pesanan dapat berubah dari admin.
- Tombol bersihkan riwayat dapat menghapus riwayat pesanan.

## 7. Fitur Admin

### 7.1 Login Admin

Admin harus login sebelum masuk dashboard.

Credential demo:

- Username: `admin`
- Password: `tm12345`

Acceptance criteria:

- Admin tidak dapat melihat dashboard sebelum login.
- Login berhasil jika username dan password sesuai.
- Admin dapat logout.

### 7.2 Dashboard Admin

Dashboard menampilkan ringkasan operasional toko.

Metrik:

- Total omzet.
- Jumlah pesanan.
- Jumlah user/customer.
- Jumlah produk dengan stok menipis.

Acceptance criteria:

- Metrik berubah sesuai data di `localStorage`.
- Dashboard tampil setelah admin login.

### 7.3 Manajemen Produk

Admin dapat menambahkan produk jaket baru.

Input produk:

- Nama produk.
- Brand.
- Kategori.
- Harga.
- Diskon.
- Warna.
- Ukuran.
- Stok per varian.
- URL foto.
- Deskripsi.

Acceptance criteria:

- Produk baru masuk ke daftar produk admin.
- Produk baru tersimpan di `localStorage`.
- Produk baru dapat muncul di katalog customer.
- Admin dapat reset produk demo.

### 7.4 Manajemen Pesanan

Admin dapat melihat dan mengubah status pesanan.

Aksi status:

- Proses.
- Kirim.
- Selesai.

Acceptance criteria:

- Status pesanan berubah saat tombol aksi diklik.
- Jika status berubah menjadi Dikirim, sistem membuat nomor resi demo.
- Perubahan status tersimpan di `localStorage`.

### 7.5 Laporan

Admin dapat melihat laporan sederhana.

Data laporan:

- Average order value.
- Produk dengan engagement tertinggi.
- Total akun customer.
- Export CSV pesanan.

Acceptance criteria:

- Laporan menampilkan data berdasarkan pesanan dan produk.
- Tombol export menghasilkan file CSV.

## 8. Struktur Data

### 8.1 User

```json
{
  "name": "Nama Customer",
  "email": "customer@email.com",
  "password": "password123",
  "createdAt": "2026-07-07T00:00:00.000Z"
}
```

### 8.2 Product

```json
{
  "id": "os-bomber-black",
  "name": "Riot Bomber Black",
  "brand": "Ostracism",
  "category": "Bomber",
  "price": 549000,
  "discount": 12,
  "rating": 4.8,
  "reviews": 128,
  "fit": "Regular fit",
  "gender": "Unisex",
  "image": "https://...",
  "description": "Deskripsi produk",
  "specs": ["Material", "Fitur", "Detail"],
  "colors": ["Hitam", "Olive"],
  "sizes": ["S", "M", "L", "XL"],
  "stock": {
    "Hitam-S": 8,
    "Hitam-M": 10
  }
}
```

### 8.3 Cart Item

```json
{
  "productId": "os-bomber-black",
  "color": "Hitam",
  "size": "M",
  "qty": 1,
  "price": 483120
}
```

### 8.4 Order

```json
{
  "number": "OS-1234567",
  "customer": "Nama Customer",
  "email": "customer@email.com",
  "phone": "08123456789",
  "address": "Alamat lengkap",
  "payment": "QRIS",
  "courier": "Reguler",
  "total": 501120,
  "status": "Menunggu pembayaran",
  "tracking": "",
  "items": [],
  "createdAt": "2026-07-07T00:00:00.000Z"
}
```

## 9. Penyimpanan Data

Untuk versi saat ini, data disimpan di browser menggunakan `localStorage`.

Key yang digunakan:

- `ostracismProducts`
- `ostracismCart`
- `ostracismWishlist`
- `ostracismOrders`
- `ostracismUsers`
- `ostracismCustomer`

Catatan:

- Data hanya tersimpan di browser yang sama.
- Jika cache/localStorage browser dihapus, data akan hilang.
- Untuk produksi, data harus dipindahkan ke database.

## 10. Alur Pengguna

### 10.1 Alur Belanja Customer

1. Customer membuka website Ostracism.
2. Customer melihat katalog produk.
3. Customer mencari atau memfilter produk.
4. Customer membuka detail produk.
5. Customer memilih warna dan ukuran.
6. Customer menambahkan produk ke cart.
7. Customer login atau register.
8. Customer mengisi form checkout.
9. Customer membuat pesanan.
10. Customer melihat status pesanan.

### 10.2 Alur Wishlist

1. Customer melihat katalog produk.
2. Customer menekan tombol wishlist.
3. Produk masuk daftar wishlist.
4. Customer membuka detail produk dari wishlist.
5. Customer dapat memindahkan produk ke cart melalui detail produk.

### 10.3 Alur Admin

1. Admin membuka halaman admin.
2. Admin login dengan credential demo.
3. Admin melihat ringkasan dashboard.
4. Admin menambah produk jika diperlukan.
5. Admin melihat pesanan masuk.
6. Admin mengubah status pesanan.
7. Admin melihat laporan atau export CSV.

## 11. Kebutuhan UI/UX

- Tampilan menggunakan gaya streetwear modern.
- Warna dominan gelap/netral dengan aksen merah maroon atau oranye.
- Layout katalog menggunakan card produk.
- Navigasi mudah diakses.
- Tombol utama terlihat jelas.
- Form checkout mudah dipahami.
- Modal detail produk dan login harus ringkas.
- Tampilan responsif untuk HP, tablet, dan desktop.
- Empty state harus muncul saat data kosong.
- Toast/notifikasi muncul setelah aksi penting.

## 12. Kebutuhan Non-Fungsional

### 12.1 Responsif

Website harus dapat digunakan pada:

- Mobile.
- Tablet.
- Desktop.

### 12.2 Performa

- Halaman harus ringan karena berbasis HTML, CSS, dan JavaScript.
- Gambar produk menggunakan URL eksternal dan lazy loading.
- Filter produk harus berjalan cepat untuk data demo.

### 12.3 Keamanan

Untuk versi demo:

- Login disimpan di `localStorage`.
- Password belum dienkripsi.

Untuk versi produksi:

- Password harus di-hash.
- Autentikasi harus menggunakan backend.
- Admin credential tidak boleh ditulis langsung di JavaScript.
- Checkout harus divalidasi di server.

### 12.4 Kompatibilitas

Website ditargetkan berjalan di browser modern:

- Google Chrome.
- Microsoft Edge.
- Mozilla Firefox.
- Safari.

## 13. Prioritas Pengembangan

### 13.1 Prioritas Tinggi

- Katalog produk.
- Detail produk.
- Filter dan pencarian.
- Login/register.
- Cart.
- Checkout.
- Riwayat pesanan.
- Admin login.
- Admin manajemen produk dan pesanan.

### 13.2 Prioritas Sedang

- Wishlist.
- Voucher.
- Export CSV.
- Dashboard metrik.
- Size chart.

### 13.3 Prioritas Rendah

- Review produk asli.
- Payment gateway.
- Sistem ongkir real-time.
- Notifikasi WhatsApp/email.
- Upload gambar dari admin.

## 14. Acceptance Criteria Umum

Website dianggap selesai jika:

- Semua menu navbar mengarah ke halaman/section yang sesuai.
- Produk jaket tampil di katalog.
- Filter produk berfungsi.
- Detail produk dapat dibuka.
- Customer dapat register, login, dan logout.
- Produk dapat masuk wishlist.
- Produk dapat masuk cart.
- Quantity cart dapat diubah.
- Checkout berhasil membuat pesanan.
- Pesanan tampil di section pesanan.
- Admin dapat login.
- Admin dapat menambah produk.
- Admin dapat melihat pesanan.
- Admin dapat mengubah status pesanan.
- Tampilan rapi di desktop dan mobile.

## 15. Risiko dan Solusi

| Risiko | Dampak | Solusi |
| --- | --- | --- |
| Data hilang jika localStorage dihapus | Pesanan dan produk demo hilang | Gunakan database pada versi lanjutan |
| Password tersimpan di browser | Tidak aman untuk produksi | Gunakan backend dan hashing password |
| Gambar dari URL eksternal gagal dimuat | Produk terlihat kosong | Siapkan fallback image |
| Admin credential terlihat di JavaScript | Tidak aman | Pindahkan autentikasi ke server |
| Stok tidak real-time antar device | Data bisa tidak sinkron | Gunakan database terpusat |

## 16. Rencana Pengembangan Lanjutan

- Integrasi database MySQL atau Firebase.
- Backend API untuk produk, user, cart, dan order.
- Payment gateway seperti Midtrans/Xendit.
- Upload gambar produk dari admin.
- Sistem role admin.
- Halaman profil customer.
- Invoice pesanan.
- Notifikasi WhatsApp/email.
- Review dan rating dari pembeli asli.
- Manajemen promo yang lebih lengkap.

## 17. Kesimpulan

Website toko online Ostracism dirancang sebagai sistem e-commerce sederhana yang mencakup fitur utama belanja online: katalog, detail produk, login/register, wishlist, cart, checkout, riwayat pesanan, dan admin dashboard. Versi saat ini cocok untuk demo PKL atau tugas sekolah, sedangkan versi lanjutan dapat dikembangkan menjadi aplikasi produksi dengan backend dan database.
