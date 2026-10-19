// Mengimpor useState untuk menyimpan halaman yang aktif
import { useState } from "react";

// Mengimpor komponen Navbar
import Navbar from "./komponen/Navbar";

// Mengimpor komponen Footer
import Footer from "./komponen/Footer";

// Mengimpor halaman Beranda
import Beranda from "./halaman/Beranda";

// Mengimpor halaman Profil
import Profil from "./halaman/Profil";

// Mengimpor halaman Event
import Event from "./halaman/Event";

// Mengimpor halaman Detail Event
import DetailEvent from "./halaman/DetailEvent";

// Mengimpor halaman Kontak
import Kontak from "./halaman/Kontak";

// Membuat komponen utama aplikasi
function App() {

  // Menyimpan nama halaman yang sedang aktif
  const [menuAktif, setMenuAktif] = useState("beranda");

  // Menyimpan ID event yang sedang dipilih
  const [idEvent, setIdEvent] = useState(null);

  // Fungsi untuk berpindah halaman
  const pindahHalaman = (halaman, id = null) => {

    // Mengubah halaman yang sedang aktif
    setMenuAktif(halaman);

    // Menyimpan ID event yang dipilih
    setIdEvent(id);

    // Mengembalikan posisi halaman ke paling atas
    window.scrollTo(0, 0);
  };

  // Fungsi untuk menentukan halaman yang ditampilkan
  const tampilkanHalaman = () => {

    // Jika halaman Beranda dipilih
    if (menuAktif === "beranda") {
      return <Beranda pindahHalaman={pindahHalaman} />;
    }

    // Jika halaman Profil dipilih
    if (menuAktif === "profil") {
      return <Profil />;
    }

    // Jika halaman Event dipilih
    if (menuAktif === "event") {
      return <Event pindahHalaman={pindahHalaman} />;
    }

    // Jika halaman Detail Event dipilih
    if (menuAktif === "detail") {
      return (
        <DetailEvent
          idEvent={idEvent}
          pindahHalaman={pindahHalaman}
        />
      );
    }

    // Jika halaman Kontak dipilih
    if (menuAktif === "kontak") {
      return <Kontak />;
    }

    // Jika tidak ada halaman yang cocok
    return <Beranda pindahHalaman={pindahHalaman} />;
  };

  // Menampilkan seluruh aplikasi
  return (
    <>
      {/* Menampilkan Navbar */}
      <Navbar
        menuAktif={menuAktif}
        pindahHalaman={pindahHalaman}
      />

      {/* Menampilkan halaman sesuai menu */}
      {tampilkanHalaman()}

      {/* Menampilkan Footer */}
      <Footer />
    </>
  );
}

// Mengekspor App agar dapat digunakan oleh main.jsx
export default App;