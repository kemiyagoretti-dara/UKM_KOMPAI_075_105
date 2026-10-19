 # UTS_pbw_075_105
A. Portofolio UKM — Komunitas Paingan (React + Vite)
   Proyek UTS Pemrograman Web, Proyek 1: Portofolio Unit Kegiatan Mahasiswa.
   
B. Cara menjalankan
   1. Install Node.js .
   2. Buka terminal di folder proyek, lalu jalankan `npm install`.
   3. Jalankan ‘npm run dev’, lalu buka alamat yang tampil (biasanya    
      http://localhost:5173).
      
C. Halaman
   Beranda, Profil, Event, Detail Event, Kontak (navigasi memakai useState, 
   tanpa backend).
   
D. Fitur bagian Event dan Detail Event
   - Filter event per divisi (Koor, Misdinar, Lektor, Merbung, Umum, Favorit) — 
     useState.
   - Pencarian event berdasarkan nama — event onChange.
   - Tombol Favorit, tersimpan di localStorage — useState + useEffect.
   - Formulir pendaftaran petugas dengan validasi (nama min. 3 karakter, format 
     email, email tidak ganda, divisi wajib).
   - Daftar petugas bisa ditambah dan dihapus, tersimpan di localStorage, dengan 
     batas kuota.
   - Komponen reusable: Card, Navbar, Footer.
     
### E. Skenario Pengujian

| No. | Skenario Pengujian | Hasil yang Diharapkan | Status |
|---:|---|---|---|
| 1 | Klik menu Event di navbar | Tampil daftar 6 event | Sesuai |
| 2 | Klik filter "Koor" | Hanya event divisi Koor yang tampil | Sesuai |
| 3 | Ketik "bunga" di kolom cari | Hanya Workshop Merangkai Bunga Altar tampil | Sesuai |
| 4 | Cari kata "bsxbx" | Tampil pesan "Event tidak ditemukan." | Sesuai |
| 5 | Klik "Lihat Detail" pada sebuah event | Tampil halaman detail event tersebut | Sesuai |
| 6 | Klik "Kembali ke daftar event" | Kembali ke halaman Event | Sesuai |
| 7 | Kirim formulir dalam keadaan kosong | Muncul 3 pesan error (nama, email, divisi) | Sesuai |
| 8 | Isi email "abc" lalu kirim | Muncul pesan "Format email tidak valid." | Sesuai |
| 9 | Isi formulir lengkap dan valid | Pendaftar masuk daftar, tampil pesan berhasil, kuota berkurang | Sesuai |
| 10 | Daftar dengan email yang sama dua kali | Muncul "Email ini sudah terdaftar di event ini." | Sesuai |
| 11 | Klik Favorit, lalu refresh halaman | Status favorit tetap tersimpan | Sesuai |
| 12 | Perkecil layar (lebar < 768px) | Card menjadi 1 kolom, navbar menjadi vertikal | Sesuai |










