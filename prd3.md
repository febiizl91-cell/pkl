# WEBSITE KOPI KENANGAN - Dokumentasi Detail

---

## I. OVERVIEW & BRANDING

### Identitas Visual
- **Brand Name:** KOPI KENANGAN
- **Tagline:** "Kenangan Setiap Tegukan"
- **Target:** Urban, Modern, Premium Coffee Experience
- **Platform:** Web Responsive (Desktop, Tablet, Mobile)

### Color Palette Profesional
```
Primary Color:
  - Coklat Krem       #8B6F47  (Logo, Header, CTA Buttons)
  - Coklat Gelap      #5D4037  (Text, Borders)
  
Secondary Color:
  - Gold/Emas         #D4AF37  (Accent, Highlights)
  - Cream Terang      #F5E6D3  (Background, Cards)
  
Neutral:
  - Putih             #FFFFFF  (Background utama)
  - Hitam             #1A1A1A  (Text utama)
  - Abu-abu           #6B6B6B  (Secondary text)
```

### Typography
- **Logo:** Bold Sans-serif, 32px+, #8B6F47
- **Heading (H1):** Bold, 36-48px, #1A1A1A
- **Heading (H2):** Bold, 24-32px, #1A1A1A
- **Body Text:** Regular, 14-16px, #1A1A1A
- **Button Text:** Bold, 14px, centered

---

## II. STRUKTUR HALAMAN

### A. LANDING PAGE (Home)

#### Hero Section
```
┌─────────────────────────────────────┐
│         KOPI KENANGAN HEADER        │
│  Logo | Menu | Promo | Outlet | ... │
└─────────────────────────────────────┘

┌────────────────────────────────────────┐
│                                        │
│    HERO BANNER (Carousel)              │
│    - High quality coffee image         │
│    - Tagline: "Kenangan Setiap Tegukan"│
│    - CTA: "Pesan Sekarang" (Gold)     │
│                                        │
└────────────────────────────────────────┘
```

**Komponen:**
- **Navigation Bar (Sticky)**
  - Logo Kopi Kenangan (klik → Home)
  - Menu links: Home, About, Menu, Promo, Outlet, News, Membership
  - Search icon
  - Cart icon
  - User profile/Login

- **Hero Slider**
  - 3-5 banner images (coklat/emas gradient background)
  - Auto-slide every 5 detik
  - Navigation dots
  - CTA Buttons: "Pesan Sekarang" (Gold #D4AF37), "Lihat Menu"

#### Featured Section 1: Promo Terbaru
```
┌─────────────────────────────────────┐
│      PROMO SPESIAL MINGGU INI       │
├─────────────────────────────────────┤
│ ┌─────────┐  ┌─────────┐ ┌─────────┐│
│ │ Promo 1 │  │ Promo 2 │ │ Promo 3 ││
│ │Diskon30%│  │  BOGO   │ │Buy 2Get1││
│ └─────────┘  └─────────┘ └─────────┘│
│ < PREV           •••••           NEXT> │
└─────────────────────────────────────┘
```

**Detail:**
- Horizontal scroll carousel
- Card design: White background dengan shadow
- Badge: "HOT DEAL", "LIMITED TIME"
- Promo details: Image, discount %, code
- CTA: "Gunakan Promo"

#### Featured Section 2: Best Seller
```
┌──────────────────────────────────────┐
│      PRODUK TERPOPULER              │
├──────────────────────────────────────┤
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ │
│ │Kopi 1│ │Kopi 2│ │Kopi 3│ │Kopi 4│ │
│ │★★★★★ │ │★★★★★ │ │★★★★★ │ │★★★★★ │ │
│ │Rp... │ │Rp... │ │Rp... │ │Rp... │ │
│ └──────┘ └──────┘ └──────┘ └──────┘ │
└──────────────────────────────────────┘
```

**Grid 4 kolom (responsive)**
- Product card dengan:
  - Image
  - Name
  - Rating (⭐ 1-5)
  - Price
  - "Add to Cart" button

#### Featured Section 3: Menu Favorit
- Menampilkan 6 menu pilihan
- Cards dengan hover effect
- Quick add to cart button

#### Featured Section 4: Call-to-Action Download App
```
┌────────────────────────────────────────┐
│  Download Aplikasi Kopi Kenangan!      │
│  Dapatkan diskon 10% untuk order       │
│                                        │
│  [App Store] [Google Play]             │
└────────────────────────────────────────┘
```

#### Featured Section 5: Outlet Terdekat
- Map integration (Google Maps)
- "Cari outlet terdekat" button
- List 3-5 outlet dengan:
  - Nama
  - Alamat (link ke Google Maps)
  - Jam operasional
  - Status buka/tutup

#### Featured Section 6: Testimoni Pelanggan
```
┌────────────────────────────────────────┐
│     APA KATA PELANGGAN KAMI            │
├────────────────────────────────────────┤
│ "Kopi terbaik! Highly recommended"     │
│ - Andi, Jakarta                        │
│                                        │
│ "Fast delivery, delicious coffee!"     │
│ - Sarah, Bandung                       │
└────────────────────────────────────────┘
```

**Komponen:**
- Testimonial cards
- Star rating
- Customer name & location
- Carousel/slider

#### Footer
```
┌────────────────────────────────────────┐
│ Logo | About | Menu | Promo | Contact  │
│                                        │
│ Social Media Icons                     │
│ Newsletter Subscription                │
│                                        │
│ © 2026 Kopi Kenangan. All rights...    │
└────────────────────────────────────────┘
```

---

### B. HALAMAN MENU

#### Layout
```
HEADER: "Our Menu" (Coklat Krem)

LEFT SIDEBAR:
├── Categories
│   ├── ☕ Coffee (50+ items)
│   ├── 🍵 Tea (25+ items)
│   ├── 🥤 Non Coffee (30+ items)
│   ├── 🍽️ Food (40+ items)
│   ├── 🍪 Snack (35+ items)
│   └── 🛍️ Merchandise (15+ items)
│
├── Filters
│   ├── Price Range (slider)
│   ├── Rating (⭐)
│   └── Calorie Range (optional)
│
└── Search Box

CENTER: Product Grid (3 kolom desktop, 2 tablet, 1 mobile)
RIGHT: 
  ├── Selected items count
  └── Cart preview
```

#### Product Card Detail
```
┌──────────────────┐
│   Product Image  │
│   (High Quality) │
├──────────────────┤
│ Product Name     │
│ ⭐ 4.8 (250)     │
│ Rp 25.000        │
│                  │
│ Hot | Iced | etc │
│ Sugar Level: -   │
│ Ice Level: -     │
│                  │
│ [+] [  1  ] [-]  │
│ [Add to Cart]    │
└──────────────────┘
```

**Features:**
- Image carousel per produk
- Star rating dengan review count
- Price display
- Customization options (quick select)
- Quantity selector
- Add to cart button

#### Product Detail Modal
Ketika klik product, buka modal dengan:
- Full product image gallery
- Detailed description
- Ingredient info
- Allergen information
- Size options (Small, Medium, Large)
- Sugar level: (-30%, -20%, Normal, +20%, +30%)
- Ice level: Light, Medium, Heavy
- Customization options
- Add-ons selector (toppings)
- Price calculation real-time
- Add to Cart / Continue Shopping

---

### C. HALAMAN PROMO

#### Layout
```
┌─────────────────────────────────────┐
│      PROMO SPESIAL KAMI             │
├─────────────────────────────────────┤
│ Filter: [All] [Active] [Upcoming]   │
│ Sort: [Date] [Discount] [Popular]   │
└─────────────────────────────────────┘

┌──────────────────────────────────────┐
│ ┌─────────────────────────────────┐  │
│ │ Promo 1: Diskon 30%             │  │
│ │ Valid: 1-31 July 2026           │  │
│ │ Syarat: Min purchase Rp100k     │  │
│ │ Code: KOPI30                    │  │
│ │ [Dapatkan Kode]                 │  │
│ └─────────────────────────────────┘  │
│                                      │
│ ┌─────────────────────────────────┐  │
│ │ Promo 2: Buy 2 Get 1            │  │
│ │ Valid: 15 July - 15 August      │  │
│ │ Untuk kategori Iced Coffee      │  │
│ │ [Lihat Produk]                  │  │
│ └─────────────────────────────────┘  │
└──────────────────────────────────────┘
```

**Promo Card Contents:**
- Badge: "HOT", "ENDING SOON", "NEW"
- Promo title & description
- Discount percentage/offer
- Valid date range
- Terms & conditions (expandable)
- Promo code (if applicable)
- Call-to-action button

---

### D. HALAMAN OUTLET LOCATOR

#### Layout
```
┌────────────────────────────────────────┐
│     TEMUKAN OUTLET KOPI KENANGAN      │
├────────────────────────────────────────┤
│ Search: [____________]                 │
│ Filter: City [v]  Status [v]          │
└────────────────────────────────────────┘

┌─────────────────────┐  ┌──────────────┐
│   GOOGLE MAPS       │  │ OUTLET LIST  │
│   (Large Map)       │  │              │
│   - Markers untuk   │  │ ✓ Outlet 1   │
│     setiap outlet   │  │   - Address  │
│                     │  │   - Phone    │
│                     │  │   - Hours    │
│                     │  │              │
│                     │  │ ✗ Outlet 2   │
│                     │  │   (Tutup)    │
│                     │  │              │
└─────────────────────┘  │ › Outlet 3   │
                         │              │
                         └──────────────┘
```

**Features:**
- Google Maps integration (full viewport)
- Outlet markers dengan custom icons
- Search by outlet name
- Filter by city/region
- Filter by status (buka/tutup)
- Outlet list sidebar
- Click outlet → detail popup:
  - Nama lengkap
  - Alamat (clickable link ke Maps)
  - Nomor telepon (clickable)
  - Jam operasional
  - Fasilitas (WiFi, AC, Parking, etc)
  - Rating & reviews
  - Direction button

---

### E. HALAMAN MEMBERSHIP

#### Login Page
```
┌────────────────────────────────┐
│  KOPI KENANGAN MEMBER LOGIN    │
├────────────────────────────────┤
│                                │
│ Email:    [________________]    │
│ Password: [________________]    │
│                                │
│ [ ] Remember me                │
│ [   LOGIN   ]                  │
│                                │
│ Belum punya akun? [Daftar]     │
│ Lupa password? [Reset]         │
│                                │
└────────────────────────────────┘
```

#### Register Page
```
┌────────────────────────────────┐
│ DAFTAR KOPI KENANGAN MEMBER    │
├────────────────────────────────┤
│ Nama Lengkap: [________________]│
│ Email: [__________________]     │
│ Nomor HP: [________________]    │
│ Password: [________________]    │
│ Confirm Password: [____________]│
│                                │
│ [✓] Saya setuju dengan T&C    │
│ [   DAFTAR   ]                 │
│                                │
│ Sudah punya akun? [Login]      │
└────────────────────────────────┘
```

#### Member Dashboard
```
HEADER: Selamat datang, [Nama]!

┌──────────────────────────────────────┐
│ PROFILE TAB | REWARDS | HISTORY      │
├──────────────────────────────────────┤
│                                      │
│ PROFILE SECTION:                     │
│ - Avatar & nama                      │
│ - Email & phone                      │
│ - Membership level (Bronze/Silver)   │
│ - Edit profile button                │
│                                      │
│ QUICK STATS:                         │
│ ┌──────────┐ ┌──────────┐            │
│ │ Poin: 1250│ │Voucher: 5│           │
│ └──────────┘ └──────────┘            │
│                                      │
│ RECENT TRANSACTIONS:                 │
│ - Iced Americano x2 - Rp 50.000     │
│ - Blueberry Muffin - Rp 25.000      │
│                                      │
└──────────────────────────────────────┘
```

#### Rewards & Vouchers Section
```
AVAILABLE VOUCHERS:
┌─────────────────────────────────┐
│ [×1] Diskon 10% (Exp: 30 Juli)  │
│ [×3] Free Iced Coffee (Exp: 15 Aug)│
│ [×1] Buy 2 Get 1 (Exp: 20 Sept) │
└─────────────────────────────────┘

REWARDS CATALOG:
├── 50 Poin → Diskon Rp 5.000
├── 100 Poin → Diskon Rp 10.000
├── 250 Poin → Free Coffee
└── 500 Poin → Free Lunch

LOYALTY LEVELS:
Bronze ← (Your Level)
Silver (1000 poin)
Gold (5000 poin)
Platinum (10000 poin)
```

---

### F. HALAMAN NEWS & BLOG

#### Layout
```
┌────────────────────────────────────┐
│      BERITA KOPI KENANGAN         │
├────────────────────────────────────┤
│ Filter: [All] [News] [Event] [Blog]│
│ Search: [________________]          │
└────────────────────────────────────┘

Featured Article:
┌────────────────────────────────────┐
│   Large Image                      │
│   "Launching New Menu Musiman"     │
│   Published: 28 June 2026          │
│   [Read More]                      │
└────────────────────────────────────┘

ARTICLE GRID (3 kolom):
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Article │ │ Article │ │ Article │
│         │ │         │ │         │
│ [Read]  │ │ [Read]  │ │ [Read]  │
└─────────┘ └─────────┘ └─────────┘
```

**Article Card:**
- Feature image
- Category badge
- Title
- Excerpt/description
- Author name
- Published date
- Read time
- "Read More" button

#### Single Article Page
```
┌─────────────────────────────────┐
│ ARTICLE TITLE                   │
│ By Author | 28 June 2026 | 5min │
├─────────────────────────────────┤
│                                 │
│ [Feature Image]                 │
│                                 │
│ Article content dengan          │
│ paragraf, images, quotes, dsb   │
│                                 │
│ Related Articles:               │
│ ├── Article 1                   │
│ ├── Article 2                   │
│ └── Article 3                   │
│                                 │
└─────────────────────────────────┘
```

---

### G. HALAMAN CONTACT & FAQ

#### Contact Section
```
┌────────────────────────────────┐
│    HUBUNGI KAMI                │
├────────────────────────────────┤
│                                │
│ CONTACT FORM:                  │
│ Nama: [________________]        │
│ Email: [________________]       │
│ Subject: [________________]     │
│ Message: [________________]     │
│          [________________]     │
│          [________________]     │
│ [   KIRIM PESAN   ]             │
│                                │
│ INFORMASI KONTAK:              │
│ 📧 cs@kopikenangan.com         │
│ ☎️ +62-21-XXXX-XXXX            │
│ 💬 WhatsApp: +62-8XX-XXXX      │
│ 🏢 Alamat: Jl. Coffee, Jakarta │
│                                │
└────────────────────────────────┘
```

#### FAQ Section
```
┌────────────────────────────────┐
│    FREQUENTLY ASKED QUESTIONS   │
├────────────────────────────────┤
│                                │
│ Q: Bagaimana cara order?       │
│ ▼ Jawaban...                   │
│                                │
│ Q: Berapa biaya delivery?      │
│ ▼ Jawaban...                   │
│                                │
│ Q: Bagaimana kebijakan refund? │
│ ▼ Jawaban...                   │
│                                │
└────────────────────────────────┘
```

**Features:**
- Accordion/expandable Q&A
- Search FAQ
- Category filter
- Contact form validation

---

### H. HALAMAN ORDER ONLINE

#### Step 1: Select Outlet
```
┌────────────────────────────────────┐
│ STEP 1: PILIH OUTLET              │
├────────────────────────────────────┤
│ Cari outlet: [________________]     │
│                                    │
│ ┌──────────────────────────────┐  │
│ │ Outlet Jakarta Pusat         │  │
│ │ Jl. Coffee No.1              │  │
│ │ ⭐ 4.9 (500+ reviews)        │  │
│ │ Buka 06:00 - 21:00          │  │
│ │ [PILIH] [DETAIL]             │  │
│ └──────────────────────────────┘  │
└────────────────────────────────────┘
```

#### Step 2: Select Products
```
┌────────────────────────────────────┐
│ STEP 2: PILIH PRODUK              │
├────────────────────────────────────┤
│ Filter: [Categories] [Price]       │
│ Search: [________________]          │
│                                    │
│ Espresso Blend (Classic)           │
│ Rp 25.000                          │
│ Size: Small ● Medium ○ Large ○     │
│ Sugar: [---] ○ [Normal] ● [+++]○  │
│ Ice: ○ ○ ● (Medium) ○              │
│ Qty: [+] [1] [-]                   │
│ [ADD TO CART] Rp 25.000            │
│                                    │
│ ─────────────────────────────────  │
│                                    │
│ Blueberry Muffin                   │
│ Rp 30.000                          │
│ Qty: [+] [1] [-]                   │
│ [ADD TO CART] Rp 30.000            │
│                                    │
└────────────────────────────────────┘
```

#### Step 3: Review Cart
```
┌────────────────────────────────────┐
│ STEP 3: REVIEW PESANAN            │
├────────────────────────────────────┤
│                                    │
│ ITEMS:                             │
│ • Iced Americano x2    Rp 50.000   │
│ • Blueberry Muffin x1  Rp 30.000   │
│                                    │
│ SUBTOTAL:              Rp 80.000   │
│ Delivery Fee:          Rp 10.000   │
│                                    │
│ PROMO CODE (optional):             │
│ [KOPI30        ] [APPLY]           │
│                                    │
│ TOTAL:                 Rp 90.000   │
│                                    │
│ [EDIT] [PROCEED TO PAYMENT]       │
│                                    │
└────────────────────────────────────┘
```

#### Step 4: Payment
```
┌────────────────────────────────────┐
│ STEP 4: PEMBAYARAN                │
├────────────────────────────────────┤
│                                    │
│ METODE PEMBAYARAN:                 │
│ ○ Transfer Bank                    │
│ ○ e-Wallet (GCash/OVO/Dana)        │
│ ● Debit/Kredit Card                │
│ ○ Cash on Delivery                 │
│                                    │
│ KARTU KREDIT:                      │
│ Nomor: [________________]           │
│ Nama: [________________]            │
│ Exp: [__/__]  CVV: [___]           │
│                                    │
│ [  BAYAR SEKARANG  ]               │
│                                    │
└────────────────────────────────────┘
```

#### Step 5: Order Confirmation
```
┌────────────────────────────────────┐
│ ✓ PESANAN BERHASIL               │
├────────────────────────────────────┤
│                                    │
│ Order ID: #12345                   │
│ Status: Processing                 │
│                                    │
│ PESANAN:                           │
│ • Iced Americano x2    Rp 50.000   │
│ • Blueberry Muffin x1  Rp 30.000   │
│                                    │
│ TOTAL: Rp 90.000                   │
│                                    │
│ Outlet: Jakarta Pusat              │
│ Estimasi Siap: 15 menit            │
│                                    │
│ [TRACK ORDER] [HOME]               │
│                                    │
└────────────────────────────────────┘
```

#### Order Tracking Page
```
┌────────────────────────────────────┐
│ PELACAKAN PESANAN #12345          │
├────────────────────────────────────┤
│                                    │
│ ✓ Pesanan Dikonfirmasi             │
│   15 menit lalu                    │
│                                    │
│ ○→ Sedang Disiapkan (⏳ 8 min)    │
│   Barista sedang membuat pesanan   │
│                                    │
│ ○ Siap Diambil                    │
│                                    │
│ ○ Pesanan Selesai                 │
│                                    │
│ OUTLET: Jakarta Pusat              │
│ ALAMAT: Jl. Coffee No.1            │
│ ☎️ +62-21-XXXX-XXXX               │
│                                    │
│ [HUBUNGI OUTLET] [KEMBALI]        │
│                                    │
└────────────────────────────────────┘
```

---

## III. TECHNICAL ARCHITECTURE

### Frontend Stack
```
├── Framework: React/Next.js
├── State Management: Redux/Context API
├── Styling: Tailwind CSS
├── Components Library: Material-UI / Custom
├── API Client: Axios
├── Payment Gateway: Stripe/Midtrans SDK
├── Maps: Google Maps API
├── Analytics: Google Analytics 4
└── Build Tool: Webpack/Vite
```

### Backend Stack
```
├── Framework: Node.js (Express) / Python (Django)
├── Database: PostgreSQL / MongoDB
├── Cache: Redis
├── File Storage: AWS S3
├── Payment Processing: Midtrans/Xendit
├── Email Service: SendGrid/Mailgun
├── SMS Service: Twilio
└── Hosting: AWS/GCP/Azure
```

### Database Schema
```
USERS TABLE:
  id (PK)
  email (UNIQUE)
  password_hash
  full_name
  phone_number
  address
  profile_picture
  membership_level
  points_balance
  created_at
  updated_at

PRODUCTS TABLE:
  id (PK)
  name
  description
  category_id (FK)
  price
  image_url
  calories
  ingredients
  allergens
  active
  created_at

ORDERS TABLE:
  id (PK)
  user_id (FK)
  outlet_id (FK)
  order_date
  total_amount
  status (pending/processing/ready/completed)
  delivery_type (pickup/delivery)
  created_at

ORDER_ITEMS TABLE:
  id (PK)
  order_id (FK)
  product_id (FK)
  quantity
  size
  sugar_level
  ice_level
  customizations
  price

OUTLETS TABLE:
  id (PK)
  name
  address
  latitude
  longitude
  phone
  opening_hours (JSON)
  status (open/closed)

PROMOS TABLE:
  id (PK)
  name
  description
  discount_type (percentage/fixed)
  discount_value
  valid_from
  valid_to
  promo_code
  min_purchase
  max_usage
  active
```

### API Endpoints
```
HOME:
  GET /api/v1/home/featured
  GET /api/v1/home/promotions
  GET /api/v1/home/bestsellers

MENU:
  GET /api/v1/products
  GET /api/v1/products/:id
  GET /api/v1/categories
  GET /api/v1/products/search?q=

PROMO:
  GET /api/v1/promotions
  GET /api/v1/promotions/:id
  POST /api/v1/promotions/validate

OUTLET:
  GET /api/v1/outlets
  GET /api/v1/outlets/:id
  GET /api/v1/outlets/search?q=
  GET /api/v1/outlets/nearby?lat=&lng=

MEMBERSHIP:
  POST /api/v1/auth/register
  POST /api/v1/auth/login
  POST /api/v1/auth/logout
  GET /api/v1/user/profile
  PUT /api/v1/user/profile
  GET /api/v1/user/rewards
  POST /api/v1/user/redeem-reward

ORDER:
  POST /api/v1/orders
  GET /api/v1/orders/:id
  GET /api/v1/orders
  PUT /api/v1/orders/:id/cancel

PAYMENT:
  POST /api/v1/payments
  POST /api/v1/payments/validate
  GET /api/v1/payments/:id

CONTACT:
  POST /api/v1/contact/submit
  GET /api/v1/faq
```

---

## IV. RESPONSIVE DESIGN GUIDELINES

### Desktop (1024px+)
- 3-4 column layouts
- Side navigation
- Full-width hero
- Optimal reading width (800-1000px content)

### Tablet (768px - 1023px)
- 2 column layouts
- Collapsible menu
- Adjusted typography
- Touch-friendly buttons (min 44px)

### Mobile (< 768px)
- 1 column layout
- Bottom navigation
- Hamburger menu
- Full-width content
- Large touch targets

---

## V. PERFORMANCE OPTIMIZATION

### Load Time Targets
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.5s

### Optimization Strategies
1. **Image Optimization**
   - WebP format dengan fallback
   - Lazy loading untuk below-fold images
   - Responsive images dengan srcset
   - Compression (TinyPNG/ImageOptim)

2. **Code Splitting**
   - Lazy load routes dengan React.lazy()
   - Separate chunks untuk vendor dependencies
   - Dynamic imports untuk heavy components

3. **Caching**
   - Browser caching (30 days untuk static assets)
   - Service Worker untuk offline support
   - Redis untuk API responses

4. **CDN**
   - Cloudflare/AWS CloudFront
   - Geographic distribution
   - Gzip/Brotli compression

---

## VI. SECURITY MEASURES

### HTTPS & Encryption
- SSL/TLS certificate (minimum TLS 1.2)
- HSTS headers
- Secure cookies (httpOnly, sameSite)

### Authentication & Authorization
- JWT tokens dengan expiration
- Password hashing (bcrypt)
- Multi-factor authentication (optional)
- Role-based access control

### Input Validation
- Server-side validation mandatory
- XSS protection (sanitize inputs)
- CSRF tokens
- SQL injection prevention (parameterized queries)

### Data Protection
- End-to-end encryption untuk sensitive data
- PCI-DSS compliance untuk payment
- Regular security audits
- Penetration testing quarterly

---

## VII. ANALYTICS & TRACKING

### Key Events
```
HOME_PAGE_VIEW
  - timestamp
  - user_id
  - session_id
  - device_type

PRODUCT_VIEW
  - product_id
  - category
  - timestamp

SEARCH_ACTION
  - search_query
  - results_count
  - timestamp

ADD_TO_CART
  - product_id
  - quantity
  - price

CHECKOUT_START
  - items_count
  - total_amount

PAYMENT_ATTEMPT
  - payment_method
  - amount
  - status

ORDER_COMPLETED
  - order_id
  - total_amount
  - items_count
  - delivery_type
```

### Dashboard Metrics
- Daily active users (DAU)
- Monthly active users (MAU)
- Conversion rate (visitor → buyer)
- Average order value (AOV)
- Customer lifetime value (CLV)
- Cart abandonment rate
- Search success rate
- Page load time trends

---

## VIII. SEO OPTIMIZATION

### Meta Tags
```html
<title>Kopi Kenangan - Kopi Berkualitas Premium</title>
<meta name="description" content="Nikmati kopi berkualitas premium Kopi Kenangan...">
<meta name="keywords" content="kopi, coffee, cafe, jakarta">
<meta property="og:image" content="...">
```

### Structured Data
```json
{
  "@context": "https://schema.org/",
  "@type": "Restaurant",
  "name": "Kopi Kenangan",
  "description": "...",
  "address": {...},
  "telephone": "...",
  "servesCuisine": "Coffee"
}
```

### SEO Checklist
- ✓ Unique title & meta description
- ✓ H1 per page (single)
- ✓ Internal linking strategy
- ✓ Mobile-friendly
- ✓ Fast loading (Core Web Vitals)
- ✓ Sitemap.xml & robots.txt
- ✓ Structured markup
- ✓ Alt text untuk semua images

---

## IX. TESTING STRATEGY

### Unit Testing
- Jest untuk JavaScript
- Minimum 80% code coverage
- Test utilities, helpers, components

### Integration Testing
- Cypress untuk E2E testing
- Test critical user journeys
- Payment flow testing (sandbox)

### Performance Testing
- Lighthouse scores > 90
- Load testing (1000 concurrent users)
- Database query optimization

### Security Testing
- Penetration testing quarterly
- OWASP Top 10 compliance
- SSL certificate validity

---

## X. DEPLOYMENT & MONITORING

### CI/CD Pipeline
```
Git Push
  ↓
GitHub Actions / Jenkins
  ├── Code Quality Check (ESLint)
  ├── Unit Tests
  ├── Build
  ├── Integration Tests
  ├── Security Scan
  ↓
Deploy to Staging
  ├── Manual QA
  ├── Performance Testing
  ↓
Deploy to Production
  ├── Blue-Green Deployment
  ├── Health Checks
  └── Rollback if needed
```

### Monitoring & Alerting
- Application Performance Monitoring (APM): New Relic/Datadog
- Error tracking: Sentry
- Log aggregation: ELK Stack
- Uptime monitoring: UptimeRobot
- Alert channels: Slack, PagerDuty

### Backup & Disaster Recovery
- Database backups (daily)
- WAL archiving (PostgreSQL)
- Multi-region replication
- RTO: 1 hour
- RPO: 15 minutes

---

## XI. FUTURE ENHANCEMENTS

### Phase 2 Features
1. AI-powered recommendations
2. Live chat support with chatbots
3. Dark mode
4. Multi-language support
5. Personalized promotions
6. Coffee subscription service
7. Store pickup tracking
8. Digital gift vouchers
9. Corporate bulk ordering
10. Social commerce integration

### Scalability Plans
- Microservices architecture
- GraphQL API
- Mobile app (iOS/Android)
- Progressive Web App (PWA)
- Voice commerce integration
- AR menu visualization

---

## XII. LAUNCH CHECKLIST

**Pre-Launch (1 week before)**
- [ ] All pages tested on desktop/tablet/mobile
- [ ] Performance scores ≥ 90
- [ ] Security audit completed
- [ ] Analytics properly configured
- [ ] Payment gateway in production mode
- [ ] Email service verified
- [ ] Backup & monitoring systems ready
- [ ] Support documentation completed
- [ ] Team training completed

**Launch Day**
- [ ] DNS propagation confirmed
- [ ] SSL certificate deployed
- [ ] Performance baseline established
- [ ] Error tracking active
- [ ] Monitoring dashboards live
- [ ] Support team on standby

**Post-Launch (1 week after)**
- [ ] Monitor error rates & performance
- [ ] Track user feedback
- [ ] Analyze conversion metrics
- [ ] Address critical bugs
- [ ] Optimize based on analytics

---

**Document Version:** 1.0
**Last Updated:** 2 Juli 2026
**Status:** Ready for Development
