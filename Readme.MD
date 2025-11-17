# Sistem Registrasi & Konfirmasi Peserta – 17 Agustus RT 03

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
