// Membuat komponen Card untuk menampilkan informasi event
function Card({ event, favorit, onFavorit, onDetail }) {

  // Menampilkan card event
  return (
    <div className="card">

      {/* Menampilkan nama event */}
      <h3>{event.judul}</h3>

      {/* Menampilkan tanggal event */}
      <p>{event.tanggal}</p>

      {/* Tombol untuk melihat detail event */}
      <button onClick={() => onDetail(event.id)}>
        Lihat Detail
      </button>

      {/* Tombol favorit */}
      <button onClick={() => onFavorit(event.id)}>
        {favorit ? "★ Favorit" : "☆ Favorit"}
      </button>

    </div>
  );
}

// Mengekspor Card sebagai default
export default Card;