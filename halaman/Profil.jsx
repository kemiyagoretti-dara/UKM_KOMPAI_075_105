// Mengimpor foto profil dari folder assets
import fotoProfil from "../assets/Logo Kompai.jpeg";
// Membuat komponen Profil untuk halaman profil UKM
function Profil() {

  // Data bidang atau kegiatan yang ada di dalam UKM
const bidangUKM = [
    {
    id: 1,
    nama: "Pengembangan Anggota",
    deskripsi: "Membantu anggota mengembangkan kemampuan dan potensi diri."
    },
    {
    id: 2,
    nama: "Kegiatan Kreatif",
    deskripsi: "Mengadakan kegiatan kreatif untuk meningkatkan kemampuan mahasiswa."
    },
    {
    id: 3,
    nama: "Sosial dan Masyarakat",
    deskripsi: "Melaksanakan kegiatan sosial dan memberikan manfaat bagi masyarakat."
    }
];

  // Menampilkan isi halaman Profil
return (
    <main>

      {/* Bagian utama profil UKM */}
    <section className="section">

        {/* Judul halaman */}
        <h1>Profil Komunitas Paingan</h1>
        {/* Menampilkan foto profil UKM */}
<img
  src={fotoProfil}
  alt="Foto Profil Komunitas Paingan"
  className="foto-profil"
/>

        {/* Penjelasan tentang UKM */}
        <p>
KOMPAI atau Komunitas Paingan hadir sebagai wadah bagi mahasiswa Kampus III Paingan Universitas Sanata Dharma yang rindu untuk memperdalam dan mempraktikkan iman Katolik di lingkungan kampus. 
Seiring dengan kebutuhan akan tempat untuk beribadah, mahasiswa Kampus III Paingan pada awalnya mengikuti misa mingguan di Kapel Bellarminus Mrican atau gereja-gereja terdekat. Namun, muncul keinginan yang lebih besar untuk mengadakan misa di lingkungan kampus mereka sendiri agar lebih mudah diakses dan mampu membangun kebersamaan yang lebih erat antar-mahasiswa Kampus III Paingan.	
		Pada akhirnya para mahasiswa mengambil inisiatif untuk menyiapkan sendiri segala kebutuhan liturgi.
    
        </p>
Mulai dari petugas seperti imam, prodiakon, misdinar, lektor, hingga koor, semuanya dikelola secara mandiri dengan penuh semangat sukarela. Dalam proses ini, tumbuh rasa kebersamaan dan semangat gotong royong yang kemudian menjadi dasar pembentukan Komunitas Paingan (KOMPAI). 
    Untuk mendukung berbagai minat anggota dalam berkontribusi, KOMPAI membentuk beberapa divisi yang sesuai dengan ketertarikan anggotanya. Seperti divisi Koor, Misdinar, Lektor, dan Merangkai Bunga. Masing-masing divisi memiliki kegiatan tersendiri yang dilakukan secara rutin, serta berkontribusi aktif dalam menyukseskan kegiatan misa dan pelayanan di lingkungan Kampus III Paingan. 
		Seiring berjalannya waktu, KOMPAI tidak hanya menjadi tempat untuk beribadah, tetapi juga sebagai ruang bagi mahasiswa untuk berkembang secara sosial dan spiritual. Kebersamaan yang terjalin dan berbagai kegiatan yang dilakukan menumbuhkan rasa persaudaraan dan kekeluargaan yang kuat di antara para anggota.
        <p>
      
        </p>

    </section>


      {/* Bagian visi dan misi */}
    <section className="section">

        {/* Judul bagian visi dan misi */}
        <h2>Visi dan Misi</h2>

        {/* Kotak visi */}
        <div className="profile-box">

          {/* Judul visi */}
        <h3>Visi</h3>

          {/* Isi visi */}
        <p>
          Menjadi wadah persekutuan mahasiswa Katolik yang beriman, solider, dan mampu menjadi saksi kasih Kristus melalui pewartaan zaman modern.
        </p>

        </div>


        {/* Kotak misi */}
        <div className="profile-box">

          {/* Judul misi */}
        <h3>Misi</h3>

          {/* Daftar misi */}
        <ul>

            {/* Misi pertama */}
            <li>Menumbuhkan dan memperkuat iman dan rasa persaudaraan yang erat antarmahasiswa (asas kekeluargaan).</li>

            {/* Misi kedua */}
            <li>​Mengasah kepedulian sosial melalui aksi pelayanan dan pewartaan.</li>

            {/* Misi ketiga */}
            <li> Mengintegrasikan ilmu yang dipelajari di bangku kuliah untuk menjadi pewartaan nyata bagi banyak orang.</li>

        
        </ul>

        </div>

    </section>


      {/* Bagian bidang kegiatan UKM */}
    <section className="section">

        {/* Judul bagian */}
        <h2>Bidang Kegiatan</h2>

        {/* Container untuk menampilkan beberapa bidang */}
        <div className="card-container">

          {/* Mengulang data bidang menggunakan map() */}
        {bidangUKM.map((bidang) => (

            // key digunakan agar setiap data memiliki identitas unik
            <div className="card" key={bidang.id}>

              {/* Menampilkan nama bidang */}
            <h3>{bidang.nama}</h3>

              {/* Menampilkan deskripsi bidang */}
            <p>{bidang.deskripsi}</p>

            </div>

        ))}

        </div>

    </section>

    </main>
);
}

// Mengekspor komponen Profil agar bisa digunakan oleh App.jsx
export default Profil;