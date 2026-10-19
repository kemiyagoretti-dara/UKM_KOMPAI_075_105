// Mengimpor useState dan useEffect dari React
import { useState, useEffect } from "react";

// Mengimpor komponen Card dan data event
import Card from "../komponen/Card";
import { dataEvent, daftarDivisi } from "../data/dataEvent";

// Membuat komponen halaman Event (Proyek/Event)
function Event({ pindahHalaman }) {

  // Menyimpan divisi yang dipilih sebagai filter
const [filter, setFilter] = useState("Semua");

  // Menyimpan kata kunci pencarian
const [kataKunci, setKataKunci] = useState("");

  // Menyimpan daftar id event favorit (diambil dari localStorage)
const [favorit, setFavorit] = useState(() => {
    try {
    return JSON.parse(localStorage.getItem("favoritEvent")) || [];
    } catch {
    return [];
    }
});

  // Menyimpan favorit ke localStorage setiap kali berubah
useEffect(() => {
    localStorage.setItem("favoritEvent", JSON.stringify(favorit));
}, [favorit]);

  // Menambah atau menghapus event dari favorit
  const ubahFavorit = (id) => {
    if (favorit.includes(id)) {
      setFavorit(favorit.filter((item) => item !== id));
    } else {
      setFavorit([...favorit, id]);
    }
  };

  // Menyaring event berdasarkan divisi dan kata kunci
  const eventTampil = dataEvent.filter((item) => {
    const cocokDivisi =
      filter === "Semua" ||
      (filter === "Favorit" && favorit.includes(item.id)) ||
      item.divisi === filter;
    const cocokKata = item.judul
      .toLowerCase()
      .includes(kataKunci.toLowerCase());
    return cocokDivisi && cocokKata;
  });

  // Daftar tombol filter
  const daftarFilter = ["Semua", ...daftarDivisi, "Umum", "Favorit"];

  // Menampilkan halaman Event
  return (
    <main className="section">

      {/* Judul halaman */}
      <h1>Proyek dan Event</h1>
      <p>
        Daftar kegiatan Komunitas Paingan yang melibatkan divisi Koor,
        Misdinar, Lektor, dan Merbung dalam pelayanan ibadah di kampus.
      </p>

      {/* Kolom pencarian event */}
      <input
        className="input-cari"
        type="text"
        placeholder="Cari nama event..."
        value={kataKunci}
        onChange={(e) => setKataKunci(e.target.value)}
      />

      {/* Tombol filter divisi */}
      <div className="filter-bar">
        {daftarFilter.map((nama) => (
          <button
            key={nama}
            className={filter === nama ? "aktif-filter" : ""}
            onClick={() => setFilter(nama)}
          >
            {nama}
          </button>
        ))}
      </div>

      {/* Jumlah hasil */}
      <p className="info-hasil">Menampilkan {eventTampil.length} event</p>

      {/* Daftar card event, atau pesan jika kosong */}
      {eventTampil.length === 0 ? (
        <p className="kosong">Event tidak ditemukan.</p>
      ) : (
        <div className="card-container">
          {eventTampil.map((item) => (
            <Card
              key={item.id}
              event={item}
              favorit={favorit.includes(item.id)}
              onFavorit={ubahFavorit}
              onDetail={(id) => pindahHalaman("detail", id)}
            />
          ))}
        </div>
      )}

    </main>
  );
}

// Mengekspor komponen Event agar dapat digunakan di App.jsx
export default Event;