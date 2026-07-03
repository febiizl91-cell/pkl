from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, TextAreaField, BooleanField, SubmitField, IntegerField, SelectField
from wtforms.validators import DataRequired, Email, Length, ValidationError, Regexp, NumberRange, Optional
from wtforms.widgets import TextArea


class LoginForm(FlaskForm):
    """Form untuk login user"""
    email = StringField(
        'Email',
        validators=[
            DataRequired(message='Email harus diisi'),
            Email(message='Format email tidak valid')
        ],
        render_kw={'placeholder': 'Masukkan email Anda', 'class': 'input-field'}
    )
    password = PasswordField(
        'Password',
        validators=[
            DataRequired(message='Password harus diisi'),
            Length(min=6, message='Password minimal 6 karakter')
        ],
        render_kw={'placeholder': 'Masukkan password', 'class': 'input-field'}
    )
    remember = BooleanField('Ingat saya')
    submit = SubmitField('Masuk', render_kw={'class': 'btn btn-primary'})


class RegisterForm(FlaskForm):
    """Form untuk register user baru"""
    name = StringField(
        'Nama Lengkap',
        validators=[
            DataRequired(message='Nama harus diisi'),
            Length(min=3, max=80, message='Nama harus 3-80 karakter')
        ],
        render_kw={'placeholder': 'Masukkan nama lengkap', 'class': 'input-field'}
    )
    email = StringField(
        'Email',
        validators=[
            DataRequired(message='Email harus diisi'),
            Email(message='Format email tidak valid')
        ],
        render_kw={'placeholder': 'Masukkan email Anda', 'class': 'input-field'}
    )
    password = PasswordField(
        'Password',
        validators=[
            DataRequired(message='Password harus diisi'),
            Length(min=6, message='Password minimal 6 karakter')
        ],
        render_kw={'placeholder': 'Masukkan password (minimal 6 karakter)', 'class': 'input-field'}
    )
    password_confirm = PasswordField(
        'Konfirmasi Password',
        validators=[
            DataRequired(message='Konfirmasi password harus diisi')
        ],
        render_kw={'placeholder': 'Ulangi password', 'class': 'input-field'}
    )
    terms = BooleanField(
        'Saya setuju dengan syarat dan ketentuan',
        validators=[DataRequired(message='Anda harus menyetujui syarat dan ketentuan')]
    )
    submit = SubmitField('Daftar', render_kw={'class': 'btn btn-primary'})
    
    def validate_password_confirm(self, field):
        if field.data != self.password.data:
            raise ValidationError('Password tidak cocok')


class ContactForm(FlaskForm):
    """Form untuk menghubungi customer service"""
    name = StringField(
        'Nama',
        validators=[
            DataRequired(message='Nama harus diisi'),
            Length(min=3, max=80, message='Nama harus 3-80 karakter')
        ],
        render_kw={'placeholder': 'Nama Anda', 'class': 'input-field'}
    )
    email = StringField(
        'Email',
        validators=[
            DataRequired(message='Email harus diisi'),
            Email(message='Format email tidak valid')
        ],
        render_kw={'placeholder': 'Email Anda', 'class': 'input-field'}
    )
    phone = StringField(
        'Telepon',
        validators=[
            Optional(),
            Regexp(r'^\+?1?\d{9,15}$', message='Format telepon tidak valid')
        ],
        render_kw={'placeholder': 'Nomor telepon (opsional)', 'class': 'input-field'}
    )
    message = TextAreaField(
        'Pesan',
        validators=[
            DataRequired(message='Pesan harus diisi'),
            Length(min=10, max=500, message='Pesan harus 10-500 karakter')
        ],
        render_kw={'placeholder': 'Tulis pesan Anda di sini...', 'class': 'textarea-field', 'rows': 6}
    )
    submit = SubmitField('Kirim Pesan', render_kw={'class': 'btn btn-primary'})


class BookingForm(FlaskForm):
    """Form untuk reservasi meja/event"""
    name = StringField(
        'Nama',
        validators=[
            DataRequired(message='Nama harus diisi'),
            Length(min=3, max=80, message='Nama harus 3-80 karakter')
        ],
        render_kw={'placeholder': 'Nama Anda', 'class': 'input-field'}
    )
    email = StringField(
        'Email',
        validators=[
            DataRequired(message='Email harus diisi'),
            Email(message='Format email tidak valid')
        ],
        render_kw={'placeholder': 'Email Anda', 'class': 'input-field'}
    )
    phone = StringField(
        'Nomor Telepon',
        validators=[
            DataRequired(message='Nomor telepon harus diisi'),
            Regexp(r'^\+?1?\d{9,15}$', message='Format telepon tidak valid')
        ],
        render_kw={'placeholder': '0812-3456-7890', 'class': 'input-field'}
    )
    date = StringField(
        'Tanggal',
        validators=[DataRequired(message='Tanggal harus diisi')],
        render_kw={'placeholder': 'YYYY-MM-DD', 'type': 'date', 'class': 'input-field'}
    )
    time = StringField(
        'Waktu',
        validators=[DataRequired(message='Waktu harus diisi')],
        render_kw={'placeholder': 'HH:MM', 'type': 'time', 'class': 'input-field'}
    )
    people = IntegerField(
        'Jumlah Orang',
        validators=[
            DataRequired(message='Jumlah orang harus diisi'),
            NumberRange(min=1, max=20, message='Jumlah orang harus 1-20')
        ],
        render_kw={'placeholder': '1', 'class': 'input-field'}
    )
    notes = TextAreaField(
        'Catatan Khusus',
        validators=[Optional(), Length(max=200)],
        render_kw={'placeholder': 'Catatan khusus (opsional)', 'class': 'textarea-field', 'rows': 3}
    )
    submit = SubmitField('Kirim Reservasi', render_kw={'class': 'btn btn-primary'})


class NewsletterForm(FlaskForm):
    """Form untuk subscribe newsletter"""
    email = StringField(
        'Email',
        validators=[
            DataRequired(message='Email harus diisi'),
            Email(message='Format email tidak valid')
        ],
        render_kw={'placeholder': 'Masukkan email Anda', 'class': 'input-field'}
    )
    submit = SubmitField('Daftar', render_kw={'class': 'btn btn-secondary'})


class ReviewForm(FlaskForm):
    """Form untuk meninggalkan review"""
    name = StringField(
        'Nama',
        validators=[
            DataRequired(message='Nama harus diisi'),
            Length(min=3, max=80, message='Nama harus 3-80 karakter')
        ],
        render_kw={'placeholder': 'Nama Anda', 'class': 'input-field'}
    )
    email = StringField(
        'Email',
        validators=[
            DataRequired(message='Email harus diisi'),
            Email(message='Format email tidak valid')
        ],
        render_kw={'placeholder': 'Email Anda', 'class': 'input-field'}
    )
    rating = SelectField(
        'Rating',
        choices=[('5', '⭐⭐⭐⭐⭐ Luar Biasa'), 
                 ('4', '⭐⭐⭐⭐ Bagus'), 
                 ('3', '⭐⭐⭐ Cukup'), 
                 ('2', '⭐⭐ Kurang'), 
                 ('1', '⭐ Buruk')],
        validators=[DataRequired()],
        render_kw={'class': 'input-field'}
    )
    comment = TextAreaField(
        'Komentar',
        validators=[
            DataRequired(message='Komentar harus diisi'),
            Length(min=10, max=400, message='Komentar harus 10-400 karakter')
        ],
        render_kw={'placeholder': 'Bagikan pengalaman Anda...', 'class': 'textarea-field', 'rows': 4}
    )
    submit = SubmitField('Kirim Review', render_kw={'class': 'btn btn-primary'})


class AdminLoginForm(FlaskForm):
    """Form untuk admin login"""
    username = StringField(
        'Username',
        validators=[
            DataRequired(message='Username harus diisi')
        ],
        render_kw={'placeholder': 'Username', 'class': 'input-field'}
    )
    password = PasswordField(
        'Password',
        validators=[
            DataRequired(message='Password harus diisi')
        ],
        render_kw={'placeholder': 'Password', 'class': 'input-field'}
    )
    submit = SubmitField('Masuk', render_kw={'class': 'btn btn-primary'})


class ProductForm(FlaskForm):
    """Form untuk manage produk (admin)"""
    name = StringField(
        'Nama Produk',
        validators=[
            DataRequired(message='Nama produk harus diisi'),
            Length(min=3, max=120, message='Nama produk harus 3-120 karakter')
        ],
        render_kw={'class': 'input-field'}
    )
    category = SelectField(
        'Kategori',
        choices=[('Kopi', 'Kopi'), ('Non-Kopi', 'Non-Kopi'), ('Snack', 'Snack')],
        validators=[DataRequired()],
        render_kw={'class': 'input-field'}
    )
    description = TextAreaField(
        'Deskripsi',
        validators=[
            DataRequired(message='Deskripsi harus diisi'),
            Length(min=10, max=500, message='Deskripsi harus 10-500 karakter')
        ],
        render_kw={'class': 'textarea-field', 'rows': 4}
    )
    price = IntegerField(
        'Harga (Rp)',
        validators=[
            DataRequired(message='Harga harus diisi'),
            NumberRange(min=5000, message='Harga minimal Rp 5.000')
        ],
        render_kw={'class': 'input-field'}
    )
    featured = BooleanField('Produk Unggulan')
    image_url = StringField(
        'URL Gambar',
        validators=[Optional(), Length(max=500)],
        render_kw={'class': 'input-field', 'placeholder': 'https://...'}
    )
    submit = SubmitField('Simpan Produk', render_kw={'class': 'btn btn-primary'})


class PromoForm(FlaskForm):
    """Form untuk manage promo (admin)"""
    title = StringField(
        'Judul Promo',
        validators=[
            DataRequired(message='Judul promo harus diisi'),
            Length(min=5, max=120, message='Judul harus 5-120 karakter')
        ],
        render_kw={'class': 'input-field'}
    )
    description = TextAreaField(
        'Deskripsi',
        validators=[
            DataRequired(message='Deskripsi harus diisi'),
            Length(min=10, max=500, message='Deskripsi harus 10-500 karakter')
        ],
        render_kw={'class': 'textarea-field', 'rows': 4}
    )
    discount_percent = IntegerField(
        'Diskon (%)',
        validators=[Optional(), NumberRange(min=1, max=100, message='Diskon 1-100%')],
        render_kw={'class': 'input-field'}
    )
    code = StringField(
        'Kode Promo',
        validators=[
            Optional(),
            Length(min=3, max=20, message='Kode harus 3-20 karakter')
        ],
        render_kw={'class': 'input-field', 'placeholder': 'Contoh: PROMO2026'}
    )
    valid_until = StringField(
        'Berlaku Sampai',
        validators=[DataRequired(message='Tanggal harus diisi')],
        render_kw={'type': 'date', 'class': 'input-field'}
    )
    active = BooleanField('Aktif')
    submit = SubmitField('Simpan Promo', render_kw={'class': 'btn btn-primary'})


class OutletForm(FlaskForm):
    """Form untuk manage outlet (admin)"""
    name = StringField(
        'Nama Outlet',
        validators=[
            DataRequired(message='Nama outlet harus diisi'),
            Length(min=3, max=120, message='Nama harus 3-120 karakter')
        ],
        render_kw={'class': 'input-field'}
    )
    address = StringField(
        'Alamat',
        validators=[
            DataRequired(message='Alamat harus diisi'),
            Length(min=10, max=200, message='Alamat harus 10-200 karakter')
        ],
        render_kw={'class': 'input-field'}
    )
    city = StringField(
        'Kota',
        validators=[
            DataRequired(message='Kota harus diisi'),
            Length(min=3, max=100, message='Kota harus 3-100 karakter')
        ],
        render_kw={'class': 'input-field'}
    )
    phone = StringField(
        'Nomor Telepon',
        validators=[
            Optional(),
            Regexp(r'^\+?1?\d{9,15}$', message='Format telepon tidak valid')
        ],
        render_kw={'class': 'input-field'}
    )
    hours = StringField(
        'Jam Operasional',
        validators=[
            DataRequired(message='Jam operasional harus diisi'),
            Length(min=10, max=50, message='Contoh: 08:00 - 22:00')
        ],
        render_kw={'class': 'input-field', 'placeholder': '08:00 - 22:00'}
    )
    status = SelectField(
        'Status',
        choices=[('Buka', 'Buka'), ('Tutup', 'Tutup')],
        validators=[DataRequired()],
        render_kw={'class': 'input-field'}
    )
    latitude = StringField(
        'Latitude',
        validators=[Optional()],
        render_kw={'class': 'input-field', 'placeholder': '-6.2088'}
    )
    longitude = StringField(
        'Longitude',
        validators=[Optional()],
        render_kw={'class': 'input-field', 'placeholder': '106.7753'}
    )
    submit = SubmitField('Simpan Outlet', render_kw={'class': 'btn btn-primary'})


class EventForm(FlaskForm):
    """Form untuk manage event (admin)"""
    title = StringField(
        'Judul Event',
        validators=[
            DataRequired(message='Judul event harus diisi'),
            Length(min=5, max=120, message='Judul harus 5-120 karakter')
        ],
        render_kw={'class': 'input-field'}
    )
    description = TextAreaField(
        'Deskripsi',
        validators=[
            DataRequired(message='Deskripsi harus diisi'),
            Length(min=10, max=500, message='Deskripsi harus 10-500 karakter')
        ],
        render_kw={'class': 'textarea-field', 'rows': 4}
    )
    date = StringField(
        'Tanggal',
        validators=[DataRequired(message='Tanggal harus diisi')],
        render_kw={'type': 'date', 'class': 'input-field'}
    )
    time = StringField(
        'Waktu',
        validators=[Optional()],
        render_kw={'type': 'time', 'class': 'input-field'}
    )
    location = StringField(
        'Lokasi',
        validators=[
            DataRequired(message='Lokasi harus diisi'),
            Length(min=5, max=120, message='Lokasi harus 5-120 karakter')
        ],
        render_kw={'class': 'input-field'}
    )
    capacity = IntegerField(
        'Kapasitas',
        validators=[Optional(), NumberRange(min=1, message='Kapasitas minimal 1')],
        render_kw={'class': 'input-field'}
    )
    submit = SubmitField('Simpan Event', render_kw={'class': 'btn btn-primary'})
