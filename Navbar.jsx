// Membuat komponen Navbar untuk menu navigasi website
function Navbar({ menuAktif, pindahHalaman }) {

  // Menampilkan menu navigasi
return (
    <nav className="navbar">

      {/* Nama atau logo UKM */}
    <div className="logo">
        UKM Kampus
    </div>

      {/* Daftar menu halaman */}
    <div className="menu">

        {/* Tombol menuju halaman Beranda */}
        <button
        className={menuAktif === "beranda" ? "aktif" : ""}
        onClick={() => pindahHalaman("beranda")}
        >
        Beranda
        </button>

        {/* Tombol menuju halaman Profil */}
        <button
        className={menuAktif === "profil" ? "aktif" : ""}
        onClick={() => pindahHalaman("profil")}
        >
        Profil
        </button>

        {/* Tombol menuju halaman Event */}
        <button
        className={menuAktif === "event" ? "aktif" : ""}
        onClick={() => pindahHalaman("event")}
        >
        Event
        </button>

        {/* Tombol menuju halaman Kontak */}
        <button
        className={menuAktif === "kontak" ? "aktif" : ""}
        onClick={() => pindahHalaman("kontak")}
        >
        Kontak
        </button>

    </div>

    </nav>
);
}

// Mengekspor Navbar agar bisa digunakan di App.jsx
export default Navbar;