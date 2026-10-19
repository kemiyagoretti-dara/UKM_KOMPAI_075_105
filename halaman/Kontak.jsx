// Mengimpor useState dari React untuk mengelola data form
import { useState } from "react";

// Membuat komponen halaman Kontak
function Kontak() {

  // Menyimpan nama yang diketik pengguna
const [nama, setNama] = useState("");

  // Menyimpan email yang diketik pengguna
const [email, setEmail] = useState("");

  // Menyimpan pesan yang diketik pengguna
const [pesan, setPesan] = useState("");

  // Menyimpan pesan hasil setelah form dikirim
const [hasil, setHasil] = useState("");

  // Fungsi yang dijalankan ketika form dikirim
const kirimPesan = (event) => {

    // Mencegah halaman melakukan refresh
    event.preventDefault();

    // Mengecek apakah ada input yang masih kosong
    if (nama === "" || email === "" || pesan === "") {

      // Menampilkan pesan jika data belum lengkap
    setHasil("Semua data harus diisi terlebih dahulu.");

      // Menghentikan proses jika validasi gagal
    return;
    }

    // Membuat object untuk menyimpan data kontak
    const dataKontak = {
    nama: nama,
    email: email,
    pesan: pesan
    };

    // Menyimpan data kontak ke localStorage
    localStorage.setItem(
    "pesanKontak",
    JSON.stringify(dataKontak)
    );

    // Menampilkan pesan berhasil
    setHasil("Pesan berhasil dikirim.");

    // Mengosongkan input nama setelah berhasil
    setNama("");

    // Mengosongkan input email setelah berhasil
    setEmail("");

    // Mengosongkan input pesan setelah berhasil
    setPesan("");
};

  // Menampilkan halaman Kontak
return (
    <main>

      {/* Bagian utama halaman kontak */}
    <section className="section">

        {/* Judul halaman */}
        <h1>Hubungi Kami</h1>

        {/* Penjelasan singkat */}
        <p>
        Jika ingin mengetahui lebih lanjut tentang Komunitas Paingan,
        silakan hubungi kami melalui formulir berikut.
        </p>


        {/* Form kontak */}
        <form className="contact-form" onSubmit={kirimPesan}>

          {/* Label untuk input nama */}
        <label htmlFor="nama">
            Nama
        </label>

          {/* Input nama */}
        <input
            id="nama"
            type="text"
            placeholder="Masukkan nama"
            value={nama}
            onChange={(event) => setNama(event.target.value)}
        />


          {/* Label untuk input email */}
        <label htmlFor="email">
            Email
        </label>

          {/* Input email */}
        <input
            id="email"
            type="email"
            placeholder="Masukkan email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
        />


          {/* Label untuk input pesan */}
        <label htmlFor="pesan">
            Pesan
        </label>

          {/* Textarea untuk menulis pesan */}
        <textarea
            id="pesan"
            placeholder="Tulis pesan kamu"
            value={pesan}
            onChange={(event) => setPesan(event.target.value)}
        ></textarea>


          {/* Tombol untuk mengirim form */}
        <button type="submit">
            Kirim Pesan
        </button>

        </form>


        {/* Menampilkan hasil validasi atau pesan berhasil */}
        {hasil && (
        <p className="hasil-form">
            {hasil}
        </p>
        )}

    </section>

    </main>
);
}

// Mengekspor komponen Kontak agar dapat digunakan di App.jsx
export default Kontak;