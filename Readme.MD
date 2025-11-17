# Sistem Registrasi & Konfirmasi Peserta – FESTARA EVENT

Sistem ini dibuat untuk mempermudah proses **pendaftaran**, **registrasi ulang**, dan **konfirmasi peserta** menggunakan teknologi web modern dan Firestore. Peserta akan mendapatkan **QR Code unik**, dan panitia dapat melakukan konfirmasi langsung melalui halaman admin.

---

## 🚀 Fitur Utama

### ✅ Untuk Peserta
- Mengisi formulir pendaftaran secara online
- Mendapatkan halaman **success** berisi:
  - Informasi peserta
  - Status konfirmasi (real-time)
  - **QR Code unik**
  - Tombol download QR
- Status otomatis berubah ketika panitia menekan tombol "Konfirmasi"

### 🔐 Untuk Panitia
- Halaman khusus untuk melihat identitas peserta berdasarkan ID
- Tombol **Konfirmasi Peserta**
- Animasi LordIcon untuk efek visual
- Update status ke Firestore secara *real-time*

---

## 🧩 Struktur Halaman

| File | Fungsi |
|------|--------|
| `index.html` | Form pendaftaran awal (opsional) |
| `success.html` | Halaman setelah pendaftaran, termasuk QR & status |
| `konfirmasi-admin.html` | Halaman admin untuk mengonfirmasi peserta |
| `firebase.js` | Inisialisasi Firebase & Firestore |

---

<b>📷 Alur Sistem</b>

Peserta daftar → masuk Firestore

Peserta diarahkan ke success.html?id=<id_peserta>

QR Code otomatis dibuat dari ID

Panitia buka confirm.html?id=<id_peserta>

Klik tombol “Konfirmasi”

Firestore update → success.html otomatis berubah statusnya

🛠️ Catatan Pengembangan

Pastikan Firestore Rules mengizinkan read/write untuk testing

Nonaktifkan write publik saat produksi

Gunakan hosting HTTPS agar QR & imports berjalan stabil

<b>❤️ Credits</b>

Project dibuat untuk kebutuhan acara di FESTARA Milenia Hub.

Anda bebas mengembangkan lebih lanjut sesuai kebutuhan.

---

# FESTARA Software License
Copyright (c) 2025 FESTARA
Developed by: Fizzxxx Devv

Software ini merupakan bagian dari sistem resmi FESTARA dan **seluruh hak cipta dilindungi penuh**.  
Kode sumber pada repositori ini telah **dienkripsi/di-obfuscate** dan hanya diperuntukkan untuk penggunaan internal.

## 1. Hak Penggunaan
Pengguna diperbolehkan:
- Menggunakan software ini hanya untuk kebutuhan operasional acara FESTARA.
- Melakukan penyebaran internal kepada panitia yang berwenang.

Pengguna **tidak diperbolehkan**:
- Membuka, mendekripsi, mendisassemble, atau mencoba memperoleh versi asli kode sumber.
- Menggunakan ulang software untuk event lain tanpa izin tertulis.
- Menggandakan atau mendistribusikan bagian mana pun dari kode untuk kepentingan komersial tanpa persetujuan.

## 2. Akses Source Code Asli (Non-Encrypted)
Versi asli (non-encrypted / non-obfuscated) dari software ini **tidak disertakan dalam publikasi**.

Untuk memperoleh akses ke versi original:
- Pengguna harus membeli lisensi **Source Code Access License** langsung dari pengembang (Fizzxxx Devv).
- Biaya lisensi akan diinformasikan melalui kontak resmi.
- Setelah pembayaran dikonfirmasi, pengguna akan menerima akses repository private yang berisi kode sumber asli.

## 3. Perubahan & Pengembangan
- Modifikasi hanya diperbolehkan pada versi yang telah dienkripsi.
- Modifikasi pada versi original hanya diperbolehkan untuk pemegang **Source Code Access License**.

## 4. Keamanan & Perlindungan
- Semua kode telah di-encode/di-obfuscate untuk mencegah reverse engineering.
- Pengguna yang mencoba membuka enkripsi dianggap melanggar lisensi.

## 5. Larangan Keras
Anda tidak boleh:
- Menjual ulang, membagikan atau meng-upload versi original tanpa izin.
- Menghapus watermark, tag, atau identitas software terkait FESTARA.
- Menggunakan software untuk kegiatan ilegal.

## 6. Penutup
Dengan menggunakan software ini, Anda menyetujui seluruh ketentuan lisensi.  
Pelanggaran lisensi dapat mengakibatkan sanksi hukum serta pencabutan hak penggunaan.

Untuk akses kode asli, kontak:
**Developer: Fizzxxx Devv**
WhatsApp: +62 8899-1114-939
Email    : fizzx404@gmail.com
---

