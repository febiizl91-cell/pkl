# Product Requirements Document (PRD)
## Website Kopi Kenangan

---

## 1. Informasi Dokumen

| Item | Detail |
|------|--------|
| **Nama Produk** | Website Kopi Kenangan |
| **Versi** | 1.0 |
| **Tanggal** | 1 Juli 2026 |
| **Product Manager** | Product Team |
| **Status** | Draft |
| **Platform** | Web Responsive |
| **Color Scheme** | Coklat Krem, Putih, Hitam |

### Stakeholder
- Marketing
- Business Development
- UI/UX Designer
- Frontend Developer
- Backend Developer
- QA Engineer
- Customer Experience
- Operations
- Management

---

## 2. Executive Summary

Website Kopi Kenangan merupakan website resmi perusahaan yang berfungsi sebagai media informasi, branding, promosi, pencarian outlet, dan pintu masuk menuju layanan pemesanan online. Website ini dirancang untuk memberikan pengalaman digital yang cepat, modern, dan responsif bagi pelanggan dengan identitas visual yang elegan menggunakan palet warna coklat krem.

---

## 3. Problem Statement

Saat ini pelanggan membutuhkan akses yang cepat terhadap informasi mengenai menu, promo, lokasi outlet, serta layanan pemesanan. Informasi tersebut sering tersebar di berbagai platform sehingga kurang efisien.

Website resmi diperlukan sebagai pusat informasi yang terpercaya untuk:
- Meningkatkan brand awareness
- Memudahkan pelanggan menemukan outlet
- Meningkatkan transaksi digital
- Meningkatkan jumlah unduhan aplikasi
- Memperkuat citra premium Kopi Kenangan

---

## 4. Product Vision

Menjadi website resmi Kopi Kenangan yang memberikan pengalaman digital terbaik melalui akses informasi yang cepat, tampilan modern dengan identitas visual premium, serta integrasi yang mudah dengan layanan pemesanan online.

---

## 5. Business Goals (6 Bulan)

- Meningkatkan traffic website sebesar **20%**
- Meningkatkan download aplikasi sebesar **15%**
- Meningkatkan transaksi online sebesar **10%**
- Meningkatkan penggunaan fitur pencarian outlet sebesar **25%**
- Meningkatkan engagement pelanggan melalui promo dan membership

---

## 6. User Goals

Pengunjung website dapat:
- Melihat menu terbaru dan lengkap
- Mengetahui promo yang sedang berlangsung
- Menemukan outlet terdekat dengan mudah
- Mengetahui informasi perusahaan
- Melakukan pemesanan online dengan cepat
- Menghubungi customer service
- Bergabung menjadi member
- Membaca artikel dan berita terbaru

---

## 7. Target User

### Primary User
- Mahasiswa (18-25 tahun)
- Karyawan (25-40 tahun)
- Freelancer (20-35 tahun)
- Pecinta kopi urban
- Usia 18–40 tahun

### Secondary User
- Wisatawan
- Pelanggan baru
- Mitra bisnis
- Investor
- Media

---

## 8. User Personas

### Persona 1: Andi
- **Umur:** 24 Tahun
- **Pekerjaan:** Software Engineer
- **Goals:**
  - Membeli kopi dengan cepat
  - Melihat promo terbaru
  - Mencari outlet terdekat
- **Pain Points:**
  - Sulit mencari promo terbaru
  - Tidak tahu outlet yang masih buka
  - Informasi menu tidak lengkap

### Persona 2: Sarah
- **Umur:** 29 Tahun
- **Pekerjaan:** Marketing Executive
- **Goals:**
  - Pesan kopi sebelum bekerja
  - Melihat menu baru
  - Loyalty rewards
- **Pain Points:**
  - Sulit menemukan informasi produk
  - Ingin proses pemesanan lebih cepat

---

## 9. Scope Produk

### In Scope
- Landing Page dengan hero banner
- About Us (sejarah, visi, misi)
- Menu (6 kategori)
- Promo & Campaign
- Outlet Locator
- News & Blog
- Membership
- Authentication (Login/Register)
- Contact & FAQ
- Order Online System

### Out of Scope
- Dashboard Admin
- POS System
- Inventory Management
- HR Management
- Supplier Management
- Accounting System

---

## 10. Core Features

### Home Page
- Hero Banner dengan visual premium (coklat krem)
- Promo Slider
- Best Seller Products
- Menu Favorit
- CTA Download App
- Outlet Terdekat
- Testimoni Pelanggan
- Newsletter Subscription
- Footer dengan links

### Menu
**Kategori:**
- Coffee
- Non Coffee
- Tea
- Food
- Snack
- Merchandise

**Fitur:**
- Search Menu
- Filter Kategori
- Detail Produk (harga, kalori, customization)
- Level Gula & Es
- Rekomendasi Produk

### Promo
- Promo Aktif Display
- Detail Promo
- Masa Berlaku
- Syarat & Ketentuan
- Filter Promo

### Outlet Locator
- Cari Outlet by name
- Filter by Kota/Region
- Jam Operasional
- Nomor Telepon
- Google Maps Integration
- Status Buka/Tutup

### Membership
- Login/Register
- Riwayat Pembelian
- Voucher & Rewards
- Poin System
- QR Member Card

### Order Online
- Pilih Outlet
- Pilih Produk & Customization
- Shopping Cart
- Checkout
- Pembayaran (Multiple Gateway)
- Tracking Pesanan

### Contact & Support
- Contact Form
- Live Chat (Future)
- Email Support
- Customer Service Number
- FAQ Section
- Social Media Links

---

## 11. User Journey

```
Landing Page
    ↓
Browse Menu → Search/Filter
    ↓
View Promo
    ↓
Select Product
    ↓
Login/Register (Optional)
    ↓
Add to Cart
    ↓
Checkout
    ↓
Payment
    ↓
Order Confirmation
    ↓
Order Tracking
    ↓
Order Complete
```

---

## 12. Sitemap

```
Home
├── About Us
├── Menu
│   ├── Coffee
│   ├── Non Coffee
│   ├── Tea
│   ├── Food
│   ├── Snack
│   └── Merchandise
├── Promo
├── Outlet Locator
├── Membership
├── News
├── FAQ
├── Contact
└── Order Online
```

---

## 13. Functional Requirements

| Feature | Requirement |
|---------|-------------|
| **Home** | Display banner, promos, bestsellers, nearby outlets |
| **Menu** | Search, filter by category, view details, customization |
| **Promo** | Show active promos only, filter by category |
| **Outlet** | Search by name/city, show maps, operating hours |
| **Membership** | Register, login, view points, redeem rewards |
| **Order** | Select outlet, add items, payment, tracking |
| **Contact** | Form submission, FAQ, live support links |

---

## 14. Design Specifications

### Color Palette
- **Primary:** Coklat Krem (#8B6F47)
- **Secondary:** Coklat Gelap (#5D4037)
- **Accent:** Gold (#D4AF37)
- **Background:** Putih (#FFFFFF)
- **Text:** Hitam (#1A1A1A)

### Typography
- **Heading:** Bold, Modern Sans-serif
- **Body:** Regular Sans-serif, readable size
- **Accent:** Secondary color for highlights

### Responsive Breakpoints
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

---

## 15. Technical Requirements

### Performance
- Page load time < 2 detik
- Lighthouse Score > 90 (Performance & Best Practices)
- Mobile-friendly & optimized

### Security
- HTTPS mandatory
- Data encryption (SSL/TLS)
- Input validation & sanitization
- Protection against common attacks (OWASP)

### SEO
- Meta tags optimization
- Mobile-first indexing
- Sitemap.xml
- Schema.org markup

### Analytics
- Google Analytics 4 integration
- Event tracking for key actions
- Conversion tracking
- User behavior analysis

---

## 16. API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/menu` | GET | Get all menu items |
| `/api/promo` | GET | Get active promos |
| `/api/outlet` | GET | Get outlet locations |
| `/api/login` | POST | User authentication |
| `/api/register` | POST | User registration |
| `/api/order` | POST | Create order |
| `/api/payment` | POST | Process payment |
| `/api/tracking` | GET | Track order status |

---

## 17. Analytics Events

- View Home
- View Menu
- Search Menu
- Filter Menu
- View Promo
- View Outlet
- Click Order
- Add to Cart
- Checkout
- Payment Success
- Download App
- View Product Detail

---

## 18. KPI Metrics

### Business KPI
- Conversion Rate
- Online Order Value
- App Download Rate
- Promo Redemption Rate
- Membership Registration Rate

### Product KPI
- Bounce Rate < 50%
- CTR (CTA) > 10%
- Repeat Visitor > 30%
- Search Success Rate > 90%
- Page Load Time < 2s

---

## 19. Success Metrics (6 Bulan)

- Traffic website +20%
- App download +15%
- Online order +10%
- Membership +20%
- Outlet search usage +25%

---

## 20. Risks & Mitigation

| Risk | Mitigation |
|------|-----------|
| Server overload during promo | Auto-scaling infrastructure & CDN |
| Payment gateway failure | Multiple payment providers |
| Inaccurate outlet data | Regular data sync with backend |
| Network issues | Backup servers & monitoring |
| Security breach | Regular security audits & updates |

---

## 21. Dependencies

- Google Maps API
- Payment Gateway (Midtrans/Xendit)
- Email Service Provider
- Cloud Hosting (AWS/GCP/Azure)
- Google Analytics 4
- CDN Service

---

## 22. Timeline

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| Design | 2 weeks | Wireframe, Mockup, Design System |
| Development | 6 weeks | Frontend & Backend Development |
| QA & Testing | 2 weeks | Bug fixes, Performance testing |
| Launch | 1 week | Deployment & Go-live |

---

## 23. Future Roadmap (Phase 2)

- AI-powered menu recommendations
- Live chat support
- Dark mode
- Multi-language support
- Personalized promotions
- Subscription service
- Store pickup tracking
- Digital gift vouchers
- Corporate ordering system
- Social commerce integration

---

## 24. Acceptance Criteria

- ✓ Semua halaman accessible tanpa error (HTTP 200)
- ✓ Website responsif di desktop, tablet, mobile
- ✓ Menu dapat dicari dan difilter (hasil < 2 detik)
- ✓ Promo hanya menampilkan yang aktif
- ✓ Search outlet by name/city berfungsi
- ✓ Form kontak melakukan validasi & submit success
- ✓ HTTPS & standar keamanan dasar terpenuhi
- ✓ Lighthouse Score minimal 90
- ✓ Event analitik tercatat di GA4
- ✓ Design consistency dengan color palette coklat krem

---

## 25. Sign-off

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Product Manager | [PM Name] | ___ | |
| Stakeholder Lead | [Lead Name] | ___ | |
| Tech Lead | [Tech Name] | ___ | |

---

**Version History**
- v1.0 - Initial Draft (1 Juli 2026)
