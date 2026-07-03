import sqlite3
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
import os

class DatabaseManager:
    """Manager untuk SQLite database"""
    
    def __init__(self, db_path):
        self.db_path = db_path
        self.ensure_db_dir()
    
    def ensure_db_dir(self):
        """Ensure database directory exists"""
        db_dir = os.path.dirname(self.db_path)
        if db_dir and not os.path.exists(db_dir):
            os.makedirs(db_dir)
    
    def get_connection(self):
        """Get database connection"""
        conn = sqlite3.connect(self.db_path)
        conn.row_factory = sqlite3.Row
        return conn
    
    def init_db(self):
        """Initialize database schema"""
        conn = self.get_connection()
        cursor = conn.cursor()
        
        # Users table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL,
                password TEXT NOT NULL,
                is_admin INTEGER DEFAULT 0,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        
        # Products table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                category TEXT NOT NULL,
                description TEXT NOT NULL,
                price INTEGER NOT NULL,
                featured INTEGER DEFAULT 0,
                image_url TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        
        # Promos table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS promos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                description TEXT NOT NULL,
                discount_percent INTEGER,
                valid_until TEXT NOT NULL,
                code TEXT UNIQUE,
                active INTEGER DEFAULT 1,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        
        # Outlets table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS outlets (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                address TEXT NOT NULL,
                city TEXT NOT NULL,
                phone TEXT,
                hours TEXT NOT NULL,
                status TEXT DEFAULT 'Buka',
                latitude REAL,
                longitude REAL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        
        # Events table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS events (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                description TEXT NOT NULL,
                date TEXT NOT NULL,
                time TEXT,
                location TEXT NOT NULL,
                capacity INTEGER,
                registered INTEGER DEFAULT 0,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        
        # Reviews table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS reviews (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT,
                rating INTEGER CHECK(rating BETWEEN 1 AND 5),
                comment TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        
        # Contacts table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS contacts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                phone TEXT,
                message TEXT NOT NULL,
                status TEXT DEFAULT 'Baru',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        
        # Bookings table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS bookings (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                phone TEXT NOT NULL,
                date TEXT NOT NULL,
                time TEXT NOT NULL,
                people INTEGER NOT NULL,
                notes TEXT,
                status TEXT DEFAULT 'Pending',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        
        # Newsletter subscriptions table
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS newsletters (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT UNIQUE NOT NULL,
                subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        
        conn.commit()
        self._add_initial_data(cursor, conn)
        conn.close()
    
    def _add_initial_data(self, cursor, conn):
        """Add initial sample data if tables are empty"""
        cursor.execute('SELECT COUNT(*) FROM users')
        if cursor.fetchone()[0] == 0:
            admin_hash = generate_password_hash('admin123', method='pbkdf2:sha256')
            cursor.execute(
                'INSERT INTO users (name, email, password, is_admin) VALUES (?, ?, ?, ?)',
                ('Admin Kopi Ruang', 'admin@kopiruang.id', admin_hash, 1)
            )
        
        cursor.execute('SELECT COUNT(*) FROM products')
        if cursor.fetchone()[0] == 0:
            products = [
                ('Espresso Signature', 'Kopi', 'Espresso shot pekat dengan aroma biji kopi pilihan premium.', 28000, 1, None),
                ('Latte Hazelnut', 'Kopi', 'Latte lembut dengan sirup hazelnut dan foam krim yang sempurna.', 42000, 1, None),
                ('Cold Brew Original', 'Kopi', 'Cold brew segar dengan ekstraksi halus selama 12 jam dari biji pilihan.', 38000, 0, None),
                ('Matcha Latte', 'Non-Kopi', 'Matcha premium dari Jepang dengan susu pilihan dan sedikit manis alami.', 36000, 0, None),
                ('Cappuccino Klasik', 'Kopi', 'Cappuccino tradisional dengan perbandingan kopi, susu, dan foam yang ideal.', 40000, 1, None),
                ('Choco Muffin', 'Snack', 'Muffin cokelat lembut dengan topping almond yang renyah.', 25000, 0, None),
            ]
            cursor.executemany(
                'INSERT INTO products (name, category, description, price, featured, image_url) VALUES (?, ?, ?, ?, ?, ?)',
                products
            )
        
        cursor.execute('SELECT COUNT(*) FROM promos')
        if cursor.fetchone()[0] == 0:
            promos = [
                ('Diskon 20% Hangout', 'Dapatkan potongan 20% untuk semua minuman dan snack setiap hari Rabu.', 20, '31 Juli 2026', 'HANGOUT20', 1),
                ('Beli 2 Gratis 1', 'Promo spesial beli 2 kopi apa saja, gratis 1 menu snack pilihan.', None, '15 Agustus 2026', 'BUY2GET1', 1),
                ('Member Exclusive', 'Diskon 15% untuk member setia Kopi Ruang setiap hari.', 15, '31 Desember 2026', 'MEMBER15', 1),
            ]
            cursor.executemany(
                'INSERT INTO promos (title, description, discount_percent, valid_until, code, active) VALUES (?, ?, ?, ?, ?, ?)',
                promos
            )
        
        cursor.execute('SELECT COUNT(*) FROM outlets')
        if cursor.fetchone()[0] == 0:
            outlets = [
                ('Kopi Ruang Central', 'Jl. Sudirman No. 8, Jakarta Selatan', 'Jakarta', '0812-3456-7890', '08:00 - 22:00', 'Buka', -6.2088, 106.7753),
                ('Kopi Ruang Bandung', 'Jl. Merdeka No. 12, Bandung', 'Bandung', '0274-5555-6666', '09:00 - 21:00', 'Buka', -6.9175, 107.6141),
                ('Kopi Ruang Surabaya', 'Jl. Ahmad Yani No. 45, Surabaya', 'Surabaya', '0331-1234-5678', '08:00 - 23:00', 'Buka', -7.2506, 112.7508),
            ]
            cursor.executemany(
                'INSERT INTO outlets (name, address, city, phone, hours, status, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                outlets
            )
        
        cursor.execute('SELECT COUNT(*) FROM events')
        if cursor.fetchone()[0] == 0:
            events = [
                ('Workshop Latte Art', 'Belajar teknik latte art dari barista profesional bersertifikat internasional.', '10 Juli 2026', '14:00', 'Kopi Ruang Central', 30, 0),
                ('Live Acoustic Night', 'Nikmati musik akustik sambil menyeruput kopi andalan kami. Datang bersama teman!', '18 Juli 2026', '19:00', 'Kopi Ruang Central', 50, 0),
                ('Barista Competition', 'Kompetisi barista dengan hadiah menarik dan kesempatan jadi barista kami.', '25 Juli 2026', '10:00', 'Kopi Ruang Central', 20, 0),
            ]
            cursor.executemany(
                'INSERT INTO events (title, description, date, time, location, capacity, registered) VALUES (?, ?, ?, ?, ?, ?, ?)',
                events
            )
        
        cursor.execute('SELECT COUNT(*) FROM reviews')
        if cursor.fetchone()[0] == 0:
            reviews = [
                ('Wulan Astuti', 'wulan@email.com', 5, 'Tempatnya nyaman, kopi enak, dan layanan cepat. Cocok untuk work from cafe!'),
                ('Faisal Rizki', 'faisal@email.com', 5, 'Promo menarik dan suasana yang cocok untuk kerja. Kopi signature-nya terbaik!'),
                ('Maya Putri', 'maya@email.com', 4, 'Bagus, tapi penuh pada jam 11-13. Sebaiknya datang di luar jam rush.'),
            ]
            cursor.executemany(
                'INSERT INTO reviews (name, email, rating, comment) VALUES (?, ?, ?, ?)',
                reviews
            )
        
        conn.commit()


class User:
    """User model"""
    
    def __init__(self, db_manager):
        self.db = db_manager
    
    def create(self, name, email, password):
        """Create new user"""
        conn = self.db.get_connection()
        cursor = conn.cursor()
        password_hash = generate_password_hash(password, method='pbkdf2:sha256')
        
        try:
            cursor.execute(
                'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
                (name, email, password_hash)
            )
            conn.commit()
            user_id = cursor.lastrowid
            conn.close()
            return user_id
        except sqlite3.IntegrityError:
            conn.close()
            return None
    
    def get_by_id(self, user_id):
        """Get user by ID"""
        conn = self.db.get_connection()
        user = conn.execute('SELECT * FROM users WHERE id = ?', (user_id,)).fetchone()
        conn.close()
        return dict(user) if user else None
    
    def get_by_email(self, email):
        """Get user by email"""
        conn = self.db.get_connection()
        user = conn.execute('SELECT * FROM users WHERE email = ?', (email,)).fetchone()
        conn.close()
        return dict(user) if user else None
    
    def verify_password(self, password_hash, password):
        """Verify password"""
        return check_password_hash(password_hash, password)
    
    def get_all(self):
        """Get all users (admin only)"""
        conn = self.db.get_connection()
        users = conn.execute('SELECT id, name, email, is_admin, created_at FROM users').fetchall()
        conn.close()
        return [dict(u) for u in users]


class Product:
    """Product model"""
    
    def __init__(self, db_manager):
        self.db = db_manager
    
    def create(self, name, category, description, price, featured=0, image_url=None):
        """Create new product"""
        conn = self.db.get_connection()
        cursor = conn.cursor()
        cursor.execute(
            'INSERT INTO products (name, category, description, price, featured, image_url) VALUES (?, ?, ?, ?, ?, ?)',
            (name, category, description, price, featured, image_url)
        )
        conn.commit()
        product_id = cursor.lastrowid
        conn.close()
        return product_id
    
    def get_by_id(self, product_id):
        """Get product by ID"""
        conn = self.db.get_connection()
        product = conn.execute('SELECT * FROM products WHERE id = ?', (product_id,)).fetchone()
        conn.close()
        return dict(product) if product else None
    
    def get_all(self):
        """Get all products"""
        conn = self.db.get_connection()
        products = conn.execute('SELECT * FROM products ORDER BY featured DESC, id ASC').fetchall()
        conn.close()
        return [dict(p) for p in products]
    
    def get_by_category(self, category):
        """Get products by category"""
        conn = self.db.get_connection()
        products = conn.execute('SELECT * FROM products WHERE category = ? ORDER BY featured DESC', (category,)).fetchall()
        conn.close()
        return [dict(p) for p in products]
    
    def get_featured(self, limit=6):
        """Get featured products"""
        conn = self.db.get_connection()
        products = conn.execute('SELECT * FROM products WHERE featured = 1 ORDER BY id DESC LIMIT ?', (limit,)).fetchall()
        conn.close()
        return [dict(p) for p in products]
    
    def update(self, product_id, **kwargs):
        """Update product"""
        conn = self.db.get_connection()
        cursor = conn.cursor()
        fields = ', '.join([f'{k} = ?' for k in kwargs.keys()])
        values = list(kwargs.values()) + [product_id]
        cursor.execute(f'UPDATE products SET {fields}, updated_at = CURRENT_TIMESTAMP WHERE id = ?', values)
        conn.commit()
        conn.close()
    
    def delete(self, product_id):
        """Delete product"""
        conn = self.db.get_connection()
        conn.execute('DELETE FROM products WHERE id = ?', (product_id,))
        conn.commit()
        conn.close()


class Promo:
    """Promo model"""
    
    def __init__(self, db_manager):
        self.db = db_manager
    
    def get_all(self):
        """Get all active promos"""
        conn = self.db.get_connection()
        promos = conn.execute('SELECT * FROM promos WHERE active = 1 ORDER BY id DESC').fetchall()
        conn.close()
        return [dict(p) for p in promos]
    
    def get_by_code(self, code):
        """Get promo by code"""
        conn = self.db.get_connection()
        promo = conn.execute('SELECT * FROM promos WHERE code = ? AND active = 1', (code,)).fetchone()
        conn.close()
        return dict(promo) if promo else None


class Outlet:
    """Outlet model"""
    
    def __init__(self, db_manager):
        self.db = db_manager
    
    def get_all(self):
        """Get all outlets"""
        conn = self.db.get_connection()
        outlets = conn.execute('SELECT * FROM outlets ORDER BY city, name').fetchall()
        conn.close()
        return [dict(o) for o in outlets]
    
    def get_by_city(self, city):
        """Get outlets by city"""
        conn = self.db.get_connection()
        outlets = conn.execute('SELECT * FROM outlets WHERE city = ?', (city,)).fetchall()
        conn.close()
        return [dict(o) for o in outlets]


class Event:
    """Event model"""
    
    def __init__(self, db_manager):
        self.db = db_manager
    
    def get_all(self):
        """Get all events"""
        conn = self.db.get_connection()
        events = conn.execute('SELECT * FROM events ORDER BY date ASC').fetchall()
        conn.close()
        return [dict(e) for e in events]


class Review:
    """Review model"""
    
    def __init__(self, db_manager):
        self.db = db_manager
    
    def create(self, name, email, rating, comment):
        """Create new review"""
        conn = self.db.get_connection()
        cursor = conn.cursor()
        cursor.execute(
            'INSERT INTO reviews (name, email, rating, comment) VALUES (?, ?, ?, ?)',
            (name, email, rating, comment)
        )
        conn.commit()
        conn.close()
    
    def get_all(self):
        """Get all reviews"""
        conn = self.db.get_connection()
        reviews = conn.execute('SELECT * FROM reviews ORDER BY created_at DESC LIMIT 10').fetchall()
        conn.close()
        return [dict(r) for r in reviews]


class Contact:
    """Contact model"""
    
    def __init__(self, db_manager):
        self.db = db_manager
    
    def create(self, name, email, phone, message):
        """Create new contact"""
        conn = self.db.get_connection()
        cursor = conn.cursor()
        cursor.execute(
            'INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)',
            (name, email, phone, message)
        )
        conn.commit()
        conn.close()
    
    def get_all(self):
        """Get all contacts (admin)"""
        conn = self.db.get_connection()
        contacts = conn.execute('SELECT * FROM contacts ORDER BY created_at DESC').fetchall()
        conn.close()
        return [dict(c) for c in contacts]


class Booking:
    """Booking model"""
    
    def __init__(self, db_manager):
        self.db = db_manager
    
    def create(self, name, email, phone, date, time, people, notes=None):
        """Create new booking"""
        conn = self.db.get_connection()
        cursor = conn.cursor()
        cursor.execute(
            'INSERT INTO bookings (name, email, phone, date, time, people, notes) VALUES (?, ?, ?, ?, ?, ?, ?)',
            (name, email, phone, date, time, people, notes)
        )
        conn.commit()
        conn.close()
    
    def get_all(self):
        """Get all bookings (admin)"""
        conn = self.db.get_connection()
        bookings = conn.execute('SELECT * FROM bookings ORDER BY created_at DESC').fetchall()
        conn.close()
        return [dict(b) for b in bookings]


class Newsletter:
    """Newsletter model"""
    
    def __init__(self, db_manager):
        self.db = db_manager
    
    def subscribe(self, email):
        """Subscribe to newsletter"""
        conn = self.db.get_connection()
        cursor = conn.cursor()
        try:
            cursor.execute('INSERT INTO newsletters (email) VALUES (?)', (email,))
            conn.commit()
            conn.close()
            return True
        except sqlite3.IntegrityError:
            conn.close()
            return False
    
    def get_all(self):
        """Get all newsletter subscribers (admin)"""
        conn = self.db.get_connection()
        subscribers = conn.execute('SELECT * FROM newsletters ORDER BY subscribed_at DESC').fetchall()
        conn.close()
        return [dict(s) for s in subscribers]
