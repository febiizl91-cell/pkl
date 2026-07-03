#!/usr/bin/env python3
"""
Kopi Ruang - Website resmi dengan menu, promo, outlet, dan reservasi
Production-ready Flask application
"""

import logging
import os
from datetime import datetime, timedelta
from functools import wraps

from flask import Flask, render_template, request, redirect, url_for, flash, jsonify, session
from flask_login import LoginManager, login_user, login_required, logout_user, current_user, UserMixin
from werkzeug.utils import secure_filename

from config import get_config
from models import (
    DatabaseManager, User, Product, Promo, Outlet, Event, Review, Contact, Booking, Newsletter
)
from forms import (
    LoginForm, RegisterForm, ContactForm, BookingForm, NewsletterForm, ReviewForm,
    AdminLoginForm, ProductForm, PromoForm, OutletForm, EventForm
)

# Initialize Flask app
app = Flask(__name__, template_folder='templates', static_folder='static')
app.config.from_object(get_config())

# Setup logging
def setup_logging():
    """Setup application logging"""
    log_dir = os.path.join(app.config['BASEDIR'], 'logs')
    if not os.path.exists(log_dir):
        os.makedirs(log_dir)
    
    handler = logging.FileHandler(app.config['LOG_FILE'])
    handler.setLevel(getattr(logging, app.config['LOG_LEVEL']))
    formatter = logging.Formatter(
        '[%(asctime)s] %(levelname)s in %(module)s: %(message)s',
        '%Y-%m-%d %H:%M:%S'
    )
    handler.setFormatter(formatter)
    app.logger.addHandler(handler)
    app.logger.setLevel(getattr(logging, app.config['LOG_LEVEL']))

setup_logging()

# Initialize database
db_manager = DatabaseManager(app.config['DATABASE_PATH'])
db_manager.init_db()

# Initialize models
user_model = User(db_manager)
product_model = Product(db_manager)
promo_model = Promo(db_manager)
outlet_model = Outlet(db_manager)
event_model = Event(db_manager)
review_model = Review(db_manager)
contact_model = Contact(db_manager)
booking_model = Booking(db_manager)
newsletter_model = Newsletter(db_manager)

# Initialize Flask-Login
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'
login_manager.login_message = 'Silakan login untuk mengakses halaman ini.'


class CurrentUser(UserMixin):
    """Current user wrapper for Flask-Login"""
    def __init__(self, user_data):
        self.id = user_data['id']
        self.email = user_data['email']
        self.name = user_data['name']
        self.is_admin = user_data['is_admin']


@login_manager.user_loader
def load_user(user_id):
    """Load user from database"""
    user_data = user_model.get_by_id(user_id)
    if user_data:
        return CurrentUser(user_data)
    return None


def admin_required(f):
    """Decorator untuk protect admin routes"""
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'admin_authenticated' not in session:
            flash('Akses ditolak. Silakan login sebagai admin.', 'danger')
            return redirect(url_for('admin_login'))
        return f(*args, **kwargs)
    return decorated_function


# ============================================================================
# GLOBAL CONTEXT & ERROR HANDLERS
# ============================================================================

@app.context_processor
def inject_global_vars():
    """Inject variables available to all templates"""
    return {
        'year': datetime.now().year,
        'site_name': 'Kopi Ruang',
        'site_slogan': 'Ruang Kopi & Komunitas'
    }


@app.errorhandler(404)
def error_404(error):
    """Handle 404 errors"""
    app.logger.warning(f'404 error: {request.url}')
    return render_template('errors/404.html'), 404


@app.errorhandler(500)
def error_500(error):
    """Handle 500 errors"""
    app.logger.error(f'500 error: {error}')
    return render_template('errors/500.html'), 500


@app.errorhandler(403)
def error_403(error):
    """Handle 403 errors"""
    app.logger.warning(f'403 error: {request.url}')
    return render_template('errors/403.html'), 403


# ============================================================================
# MAIN ROUTES
# ============================================================================

@app.route('/')
def index():
    """Homepage - Landing page"""
    products = product_model.get_featured(6)
    promos = promo_model.get_all()
    outlets = outlet_model.get_all()
    events = event_model.get_all()
    reviews = review_model.get_all()
    
    newsletter_form = NewsletterForm()
    contact_form = ContactForm()
    booking_form = BookingForm()
    review_form = ReviewForm()
    
    return render_template(
        'index.html',
        products=products,
        promos=promos,
        outlets=outlets,
        events=events,
        reviews=reviews,
        newsletter_form=newsletter_form,
        contact_form=contact_form,
        booking_form=booking_form,
        review_form=review_form
    )


@app.route('/menu')
def menu():
    """Menu page with all products"""
    category = request.args.get('category', 'all')
    
    if category == 'all':
        products = product_model.get_all()
    else:
        products = product_model.get_by_category(category)
    
    categories = ['Kopi', 'Non-Kopi', 'Snack']
    
    return render_template('menu.html', products=products, categories=categories, active_category=category)


@app.route('/promo')
def promo():
    """Promo and event page"""
    promos = promo_model.get_all()
    events = event_model.get_all()
    
    return render_template('promo.html', promos=promos, events=events)


@app.route('/outlet')
def outlet():
    """Outlet locator page"""
    outlets = outlet_model.get_all()
    cities = list(set([o['city'] for o in outlets]))
    cities.sort()
    
    selected_city = request.args.get('city', 'all')
    if selected_city != 'all':
        outlets = [o for o in outlets if o['city'] == selected_city]
    
    return render_template('outlet.html', outlets=outlets, cities=cities, selected_city=selected_city)


@app.route('/about')
def about():
    """About us page"""
    return render_template('about.html')


@app.route('/contact', methods=['GET', 'POST'])
def contact():
    """Contact page and form handler"""
    form = ContactForm()
    
    if form.validate_on_submit():
        try:
            contact_model.create(
                name=form.name.data,
                email=form.email.data,
                phone=form.phone.data,
                message=form.message.data
            )
            app.logger.info(f'Contact message received from {form.email.data}')
            flash('Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.', 'success')
            return redirect(url_for('contact'))
        except Exception as e:
            app.logger.error(f'Error saving contact: {e}')
            flash('Terjadi kesalahan saat mengirim pesan. Coba lagi nanti.', 'danger')
    
    return render_template('contact.html', form=form)


@app.route('/booking', methods=['POST'])
def booking():
    """Booking form handler"""
    form = BookingForm()
    
    if form.validate_on_submit():
        try:
            booking_model.create(
                name=form.name.data,
                email=form.email.data,
                phone=form.phone.data,
                date=form.date.data,
                time=form.time.data,
                people=form.people.data,
                notes=form.notes.data
            )
            app.logger.info(f'Booking created for {form.email.data}')
            flash('Reservasi Anda telah diterima! Kami akan mengkonfirmasi via email.', 'success')
            return redirect(url_for('index'))
        except Exception as e:
            app.logger.error(f'Error creating booking: {e}')
            flash('Terjadi kesalahan saat membuat reservasi. Coba lagi nanti.', 'danger')
    else:
        for field, errors in form.errors.items():
            for error in errors:
                flash(f'{field}: {error}', 'danger')
    
    return redirect(url_for('index') + '#booking')


@app.route('/review', methods=['POST'])
def review():
    """Review form handler"""
    form = ReviewForm()
    
    if form.validate_on_submit():
        try:
            review_model.create(
                name=form.name.data,
                email=form.email.data,
                rating=int(form.rating.data),
                comment=form.comment.data
            )
            app.logger.info(f'Review created from {form.email.data}')
            flash('Terima kasih atas review Anda!', 'success')
            return redirect(url_for('index'))
        except Exception as e:
            app.logger.error(f'Error creating review: {e}')
            flash('Terjadi kesalahan saat menyimpan review. Coba lagi nanti.', 'danger')
    else:
        for field, errors in form.errors.items():
            for error in errors:
                flash(f'{field}: {error}', 'danger')
    
    return redirect(url_for('index') + '#reviews')


@app.route('/newsletter', methods=['POST'])
def newsletter_subscribe():
    """Newsletter subscription handler"""
    form = NewsletterForm()
    
    if form.validate_on_submit():
        try:
            if newsletter_model.subscribe(form.email.data):
                app.logger.info(f'Newsletter subscription: {form.email.data}')
                flash('Terima kasih! Anda telah mendaftar newsletter kami.', 'success')
            else:
                flash('Email ini sudah terdaftar di newsletter kami.', 'info')
            return redirect(url_for('index'))
        except Exception as e:
            app.logger.error(f'Error subscribing newsletter: {e}')
            flash('Terjadi kesalahan. Coba lagi nanti.', 'danger')
    
    return redirect(url_for('index') + '#newsletter')


# ============================================================================
# AUTHENTICATION ROUTES
# ============================================================================

@app.route('/register', methods=['GET', 'POST'])
def register():
    """User registration"""
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    
    form = RegisterForm()
    
    if form.validate_on_submit():
        existing_user = user_model.get_by_email(form.email.data)
        if existing_user:
            flash('Email ini sudah terdaftar. Coba dengan email lain atau login.', 'warning')
            return redirect(url_for('register'))
        
        try:
            user_id = user_model.create(
                name=form.name.data,
                email=form.email.data,
                password=form.password.data
            )
            app.logger.info(f'New user registered: {form.email.data}')
            flash('Pendaftaran berhasil! Silakan login untuk melanjutkan.', 'success')
            return redirect(url_for('login'))
        except Exception as e:
            app.logger.error(f'Error registering user: {e}')
            flash('Terjadi kesalahan saat mendaftar. Coba lagi nanti.', 'danger')
    
    return render_template('register.html', form=form)


@app.route('/login', methods=['GET', 'POST'])
def login():
    """User login"""
    if current_user.is_authenticated:
        return redirect(url_for('index'))
    
    form = LoginForm()
    
    if form.validate_on_submit():
        user_data = user_model.get_by_email(form.email.data)
        
        if user_data and user_model.verify_password(user_data['password'], form.password.data):
            user = CurrentUser(user_data)
            login_user(user, remember=form.remember.data)
            app.logger.info(f'User logged in: {form.email.data}')
            flash(f'Selamat datang, {user.name}!', 'success')
            
            next_page = request.args.get('next')
            if next_page and next_page.startswith('/'):
                return redirect(next_page)
            return redirect(url_for('index'))
        else:
            app.logger.warning(f'Failed login attempt: {form.email.data}')
            flash('Email atau password salah.', 'danger')
    
    return render_template('login.html', form=form)


@app.route('/logout')
@login_required
def logout():
    """User logout"""
    app.logger.info(f'User logged out: {current_user.email}')
    logout_user()
    flash('Anda telah logout.', 'info')
    return redirect(url_for('index'))


# ============================================================================
# ADMIN ROUTES
# ============================================================================

@app.route('/admin')
def admin_redirect():
    """Redirect to admin login"""
    return redirect(url_for('admin_login'))


@app.route('/admin/login', methods=['GET', 'POST'])
def admin_login():
    """Admin login"""
    if 'admin_authenticated' in session:
        return redirect(url_for('admin_dashboard'))
    
    form = AdminLoginForm()
    
    if form.validate_on_submit():
        if form.username.data == 'admin' and form.password.data == 'admin123':
            session['admin_authenticated'] = True
            session.permanent = True
            app.logger.info(f'Admin logged in')
            flash('Admin login berhasil.', 'success')
            return redirect(url_for('admin_dashboard'))
        else:
            app.logger.warning('Failed admin login attempt')
            flash('Username atau password admin salah.', 'danger')
    
    return render_template('admin/login.html', form=form)


@app.route('/admin/logout')
@admin_required
def admin_logout():
    """Admin logout"""
    session.pop('admin_authenticated', None)
    app.logger.info('Admin logged out')
    flash('Admin logout berhasil.', 'info')
    return redirect(url_for('admin_login'))


@app.route('/admin/dashboard')
@admin_required
def admin_dashboard():
    """Admin dashboard"""
    stats = {
        'total_products': len(product_model.get_all()),
        'total_promos': len(promo_model.get_all()),
        'total_outlets': len(outlet_model.get_all()),
        'total_events': len(event_model.get_all()),
        'total_contacts': len(contact_model.get_all()),
        'total_bookings': len(booking_model.get_all()),
        'total_newsletter': len(newsletter_model.get_all()),
    }
    
    return render_template('admin/dashboard.html', stats=stats)


@app.route('/admin/products')
@admin_required
def admin_products():
    """Manage products"""
    products = product_model.get_all()
    return render_template('admin/products.html', products=products)


@app.route('/admin/products/add', methods=['GET', 'POST'])
@admin_required
def admin_product_add():
    """Add new product"""
    form = ProductForm()
    
    if form.validate_on_submit():
        try:
            product_model.create(
                name=form.name.data,
                category=form.category.data,
                description=form.description.data,
                price=form.price.data,
                featured=1 if form.featured.data else 0,
                image_url=form.image_url.data
            )
            app.logger.info(f'Product added: {form.name.data}')
            flash('Produk berhasil ditambahkan.', 'success')
            return redirect(url_for('admin_products'))
        except Exception as e:
            app.logger.error(f'Error adding product: {e}')
            flash('Terjadi kesalahan saat menambah produk.', 'danger')
    
    return render_template('admin/product_form.html', form=form, title='Tambah Produk')


@app.route('/admin/promos')
@admin_required
def admin_promos():
    """Manage promos"""
    promos = promo_model.get_all()
    return render_template('admin/promos.html', promos=promos)


@app.route('/admin/outlets')
@admin_required
def admin_outlets():
    """Manage outlets"""
    outlets = outlet_model.get_all()
    return render_template('admin/outlets.html', outlets=outlets)


@app.route('/admin/events')
@admin_required
def admin_events():
    """Manage events"""
    events = event_model.get_all()
    return render_template('admin/events.html', events=events)


@app.route('/admin/contacts')
@admin_required
def admin_contacts():
    """View contacts"""
    contacts = contact_model.get_all()
    return render_template('admin/contacts.html', contacts=contacts)


@app.route('/admin/bookings')
@admin_required
def admin_bookings():
    """View bookings"""
    bookings = booking_model.get_all()
    return render_template('admin/bookings.html', bookings=bookings)


@app.route('/admin/newsletter')
@admin_required
def admin_newsletter():
    """View newsletter subscribers"""
    subscribers = newsletter_model.get_all()
    return render_template('admin/newsletter.html', subscribers=subscribers)


# ============================================================================
# API ROUTES
# ============================================================================

@app.route('/api/products')
def api_products():
    """API: Get all products"""
    products = product_model.get_all()
    return jsonify([{
        'id': p['id'],
        'name': p['name'],
        'category': p['category'],
        'price': p['price'],
        'featured': p['featured']
    } for p in products])


@app.route('/api/promos')
def api_promos():
    """API: Get all promos"""
    promos = promo_model.get_all()
    return jsonify([{
        'id': p['id'],
        'title': p['title'],
        'description': p['description'],
        'discount_percent': p['discount_percent'],
        'valid_until': p['valid_until'],
        'code': p['code']
    } for p in promos])


@app.route('/api/outlets')
def api_outlets():
    """API: Get all outlets"""
    outlets = outlet_model.get_all()
    return jsonify([{
        'id': o['id'],
        'name': o['name'],
        'address': o['address'],
        'city': o['city'],
        'phone': o['phone'],
        'hours': o['hours'],
        'status': o['status'],
        'latitude': o['latitude'],
        'longitude': o['longitude']
    } for o in outlets])


@app.route('/api/events')
def api_events():
    """API: Get all events"""
    events = event_model.get_all()
    return jsonify([{
        'id': e['id'],
        'title': e['title'],
        'description': e['description'],
        'date': e['date'],
        'time': e['time'],
        'location': e['location'],
        'capacity': e['capacity'],
        'registered': e['registered']
    } for e in events])


# ============================================================================
# REQUEST HANDLERS
# ============================================================================

@app.before_request
def before_request():
    """Execute before each request"""
    session.permanent = True
    app.permanent_session_lifetime = timedelta(days=7)


# ============================================================================
# MAIN
# ============================================================================

if __name__ == '__main__':
    app.logger.info('Starting Kopi Ruang application')
    app.run(
        host='0.0.0.0',
        port=int(os.environ.get('PORT', 5000)),
        debug=app.config['DEBUG']
    )
