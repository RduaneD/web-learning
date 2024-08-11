# Web Learning Online

Web Learning Online adalah platform pembelajaran online yang memungkinkan pengguna untuk menjelajahi kursus, menonton video, dan mengelola akun mereka. Aplikasi ini mencakup berbagai fitur seperti login, registrasi, pengaturan akun, dan navigasi ke halaman video. Namun, perlu dicatat bahwa fitur login dan registrasi saat ini tidak terhubung ke database atau backend.

## Fitur Utama

1. **Halaman Beranda (Home)**
   - Menampilkan daftar kursus yang tersedia.
   - Setiap kursus dapat diklik untuk melihat detail lebih lanjut.

2. **Halaman Kursus**
   - Menampilkan detail kursus yang dipilih.
   - Jika pengguna belum login dan mencoba mengakses video, akan muncul pemberitahuan yang meminta konfirmasi.
     - **OK:** Akan langsung diarahkan ke halaman nonton video.
     - **Cancel:** Akan diarahkan ke halaman login.

3. **Halaman Nonton Video**
   - Halaman untuk menonton video dari kursus yang dipilih.
   - Hanya dapat diakses setelah login.

4. **Halaman Login**
   - Untuk pengguna yang belum memiliki akun, mereka bisa mendaftar.
   - Pengguna yang sudah memiliki akun dapat masuk menggunakan email dan password.
   - **Catatan:** Saat ini, login dan registrasi tidak terhubung ke database atau backend. Data login tidak disimpan dan tidak ada otentikasi yang sebenarnya.

5. **Halaman Registrasi**
   - Untuk pendaftaran akun baru dengan memasukkan email dan password.
   - **Catatan:** Registrasi saat ini hanya bersifat statis dan tidak menyimpan data pengguna.

6. **Halaman Pengaturan Akun**
   - Memungkinkan pengguna untuk mengubah informasi akun mereka.
   - **Catatan:** Pengaturan akun saat ini tidak berfungsi secara penuh karena tidak terhubung ke backend.

7. **Halaman Logout**
   - Mengeluarkan pengguna dari sesi saat ini.
   - **Catatan:** Logout tidak berdampak pada data pengguna karena tidak ada penyimpanan sesi.

## Cara Menggunakan

### 1. **Navigasi ke Halaman Utama**
   - Saat membuka aplikasi, Anda akan diarahkan ke halaman beranda yang menampilkan daftar kursus.

### 2. **Menjelajahi Kursus**
   - Klik pada salah satu kursus untuk melihat detailnya.
   - Jika Anda belum login dan ingin menonton video, akan muncul pemberitahuan yang menanyakan apakah Anda sudah login.

### 3. **Pemberitahuan Login** "apakah anda sudah login?"
   - **OK:** Jika Anda memilih "OK", Anda akan diarahkan ke halaman nonton video.
   - **Cancel:** Jika Anda memilih "Cancel", Anda akan diarahkan ke halaman login.

### 4. **Login dan Registrasi**
   - **Login:** Masukkan email dan password untuk masuk ke akun Anda. **Catatan:** Fitur ini saat ini tidak terhubung ke backend dan tidak menyimpan data.
   - **Registrasi:** Jika Anda belum memiliki akun, daftarkan diri Anda dengan email dan password baru. **Catatan:** Fitur ini juga tidak terhubung ke backend.

### 5. **Mengakses Halaman Video**
   - Setelah login, Anda dapat mengakses halaman nonton video untuk kursus yang telah dipilih.

### 6. **Pengaturan Akun**
   - Akses halaman pengaturan akun dari menu profil untuk mengubah informasi akun Anda. **Catatan:** Fitur ini tidak terhubung ke backend dan perubahan tidak disimpan.

### 7. **Logout**
   - Keluar dari akun Anda dengan mengklik tombol logout di halaman profil atau menu. **Catatan:** Logout tidak berdampak pada data pengguna karena tidak ada penyimpanan sesi.

## Pengaturan dan Instalasi

### Menyiapkan Aplikasi

1. **Clone Repository:**
   ```bash
   git clone https://github.com/RduaneD/web-learning.git
