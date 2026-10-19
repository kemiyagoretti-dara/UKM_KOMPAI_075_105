// Mengimpor useState dan useEffect dari React
import { useState, useEffect } from "react";

// Mengimpor data event
import { dataEvent, daftarDivisi } from "../data/dataEvent";

// Membuat komponen halaman Detail Event
function DetailEvent({ idEvent, pindahHalaman }) {

  // Mencari event berdasarkan id yang dipilih
const event = dataEvent.find((item) => item.id === idEvent);

  // Kunci localStorage khusus untuk event ini
const kunci = "pendaftar-event-" + idEvent;

  // Menyimpan daftar pendaftar pelayanan (dari localStorage)
const [pendaftar, setPendaftar] = useState(() => {
    try {
    return JSON.parse(localStorage.getItem(kunci)) || [];
    } catch {
    return [];
    }
});

  // Menyimpan isi formulir
const [nama, setNama] = useState("");
const [email, setEmail] = useState("");
const [divisi, setDivisi] = useState("");

  // Menyimpan pesan error dan pesan berhasil
const [error, setError] = useState({});
const [sukses, setSukses] = useState("");

  // Menyimpan daftar pendaftar ke localStorage setiap kali berubah
useEffect(() => {
    localStorage.setItem(kunci, JSON.stringify(pendaftar));
  }, [pendaftar, kunci]);

  // Jika event tidak ditemukan, tampilkan pesan
  if (!event) {
    return (
      <main className="section">
        <h1>Event tidak ditemukan</h1>
        <button className="btn-kembali" onClick={() => pindahHalaman("event")}>
          ← Kembali ke daftar event
        </button>
      </main>
    );
  }

  // Menghitung sisa kuota
  const sisaKuota = event.kuota - pendaftar.length;

  // Memeriksa isi formulir, mengembalikan object error
  const validasi = () => {
    const hasil = {};
    if (nama.trim().length < 3) {
      hasil.nama = "Nama wajib diisi minimal 3 karakter.";
    }
    if (email.trim() === "") {
      hasil.email = "Email wajib diisi.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      hasil.email = "Format email tidak valid.";
    } else if (pendaftar.some((p) => p.email === email.trim())) {
      hasil.email = "Email ini sudah terdaftar di event ini.";
    }
    if (divisi === "") {
      hasil.divisi = "Pilih divisi pelayanan.";
    }
    return hasil;
  };

  // Dijalankan ketika formulir dikirim
  const kirimForm = (e) => {
    e.preventDefault();
    setSukses("");

    // Validasi input
    const hasil = validasi();
    setError(hasil);
    if (Object.keys(hasil).length > 0) return;

    // Menambah pendaftar baru
    setPendaftar([
    ...pendaftar,
    { id: Date.now(), nama: nama.trim(), email: email.trim(), divisi },
    ]);

    // Mengosongkan formulir dan menampilkan pesan berhasil
    setNama("");
    setEmail("");
    setDivisi("");
    setSukses("Pendaftaran pelayanan berhasil disimpan.");
};

  // Menghapus satu pendaftar dari daftar
const hapusPendaftar = (id) => {
    setPendaftar(pendaftar.filter((p) => p.id !== id));
};

  // Menampilkan halaman Detail Event
return (
    <main className="section">

      {/* Tombol kembali */}
    <button className="btn-kembali" onClick={() => pindahHalaman("event")}>
        ← Kembali ke daftar event
    </button>

      {/* Informasi utama event */}
    <span className="label-divisi">{event.divisi}</span>
    <h1>{event.judul}</h1>
    <p>{event.deskripsi}</p>

      {/* Kotak informasi waktu, tempat, kuota */}
    <div className="info-box">
        <p><strong>Tanggal:</strong> {event.tanggal}</p>
        <p><strong>Waktu:</strong> {event.waktu}</p>
        <p><strong>Lokasi:</strong> {event.lokasi}</p>
        <p><strong>Sisa kuota petugas:</strong> {sisaKuota} dari {event.kuota}</p>
    </div>

      {/* Rangkaian kegiatan */}
    <h2>Rangkaian Kegiatan</h2>
    <ol className="rangkaian">
        {event.rangkaian.map((langkah, i) => (
        <li key={i}>{langkah}</li>
        ))}
    </ol>

      {/* Formulir pendaftaran pelayanan */}
    <h2>Daftar Menjadi Petugas</h2>

    {sisaKuota <= 0 ? (
        <p className="error">Kuota petugas sudah penuh.</p>
    ) : (
        <form className="contact-form" onSubmit={kirimForm} noValidate>

        <label htmlFor="nama">Nama</label>
        <input
            id="nama"
            type="text"
            placeholder="Masukkan nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
        />
        {error.nama && <span className="error">{error.nama}</span>}

        <label htmlFor="email">Email</label>
        <input
            id="email"
            type="email"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        {error.email && <span className="error">{error.email}</span>}

        <label htmlFor="divisi">Divisi pelayanan</label>
        <select
            id="divisi"
            value={divisi}
            onChange={(e) => setDivisi(e.target.value)}
        >
            <option value="">-- Pilih divisi --</option>
            {daftarDivisi.map((d) => (
            <option key={d} value={d}>{d}</option>
            ))}
        </select>
        {error.divisi && <span className="error">{error.divisi}</span>}

        <button type="submit">Daftar</button>
        </form>
    )}

      {/* Pesan berhasil */}
    {sukses && <p className="hasil-form">{sukses}</p>}

      {/* Daftar petugas yang sudah mendaftar */}
    <h2>Petugas Terdaftar ({pendaftar.length})</h2>
    {pendaftar.length === 0 ? (
        <p className="kosong">Belum ada petugas yang mendaftar.</p>
    ) : (
        <ul className="daftar-pendaftar">
        {pendaftar.map((p) => (
            <li key={p.id}>
            <span>{p.nama} — {p.divisi} ({p.email})</span>
            <button onClick={() => hapusPendaftar(p.id)}>Hapus</button>
            </li>
        ))}
        </ul>
    )}

    </main>
);
}

// Mengekspor komponen DetailEvent agar dapat digunakan di App.jsx
export default DetailEvent;