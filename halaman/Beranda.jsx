// Membuat komponen Beranda untuk halaman utama website
function Beranda({ pindahHalaman }) {

  // Data kegiatan UKM yang akan ditampilkan menggunakan map()
const kegiatan = [
    {
    id: 1,
    judul: "Koor",
    tanggal: "Bertugas Tidak Setiap Minggu",
    deskripsi: "Mengoordinasikan pelayanan koor pada misa mingguan, perayaan Ekaristi dan kegiatan khusus di kampus, serta memenuhi permintaan pelayanan koor dari gereja luar kampus."
    },
    {
    id: 2,
    judul: "Lektor / Lektors",
    tanggal: "Akan mendapatkan jadwal secara bergiliran",
    deskripsi: "Lektor bertugas membacakan Bacaan Pertama dan Bacaan Kedua dari Kitab Suci saat Perayaan Ekaristi.Selain membacakan firman Tuhan, Lektor juga dapat membantu membawakan Doa Umat serta pengumuman paroki."
    },
    {
    id: 3,
    judul: "Misdinar",
    tanggal: "Dilakukan setiap ada misa ",
    deskripsi: "Misdinar atau putra-putri altar bertugas membantu Imam di panti imam selama Perayaan Ekaristi berlangsung.Tugas mereka meliputi membawa salib prosesi, lilin, serta menyiapkan piala dan bahan persembahan di altar."
    },
    {
      id: 4,
      judul: "Merangkai Bunga",
      tanggal: "Dilakukan sebelum misa dimulai",
      deskripsi: "Petugas penata bunga bertugas merangkai dan memperindah area sekitar altar sesuai dengan warna serta suasana liturgi Gereja."
    }
    
];

  // Menampilkan isi halaman Beranda
return (
    <main>

      {/* Bagian pembuka / hero website */}
    <section className="hero">

        {/* Judul utama website */}
        <h1>Komunitas Paingan</h1>

        {/* Penjelasan singkat tentang UKM */}
        <p>
        Tempat mahasiswa berkembang, berkarya, dan berkolaborasi
        melalui berbagai kegiatan positif.
        </p>

        {/* Tombol untuk menuju halaman Profil */}
        <button onClick={() => pindahHalaman("profil")}>
        Tentang kami
        </button>

        {/* Tombol untuk menuju halaman Event */}
        <button onClick={() => pindahHalaman("event")}>
        Lihat Event
        </button>

    </section>


      {/* Bagian kegiatan terbaru */}
    <section className="section">

        {/* Judul bagian kegiatan */}
        <h2>Kegiatan yang dimiliki </h2>

        {/* Menampilkan setiap kegiatan menggunakan map() */}
        <div className="card-container">

        {kegiatan.map((item) => (

            // key digunakan agar React dapat mengenali setiap data
            <div className="card" key={item.id}>

              {/* Menampilkan judul kegiatan */}
            <h3>{item.judul}</h3>

              {/* Menampilkan tanggal kegiatan */}
            <p className="tanggal">{item.tanggal}</p>

              {/* Menampilkan deskripsi kegiatan */}
            <p>{item.deskripsi}</p>

              {/* Tombol menuju halaman Event */}
            <button onClick={() => pindahHalaman("event")}>
                Lihat Selengkapnya
            </button>

            </div>

        ))}

        </div>

    </section>

    </main>
);
}

// Mengekspor komponen agar bisa digunakan oleh App.jsx
export default Beranda;