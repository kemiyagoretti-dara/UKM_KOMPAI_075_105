// Mengimpor React agar aplikasi dapat menggunakan React
import React from "react";

// Mengimpor ReactDOM untuk menampilkan React ke browser
import ReactDOM from "react-dom/client";

// Mengimpor komponen utama App
import App from "./App.jsx";

// Mengimpor file CSS utama
import "./App.css";

// Mengambil elemen dengan id "root" dari index.html
ReactDOM.createRoot(document.getElementById("root")).render(

  // Menjalankan komponen utama App
<React.StrictMode>
    <App/>
</React.StrictMode>

);