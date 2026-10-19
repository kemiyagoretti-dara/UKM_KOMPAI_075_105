// Mengimpor fungsi defineConfig dari Vite
import { defineConfig } from "vite";

// Mengimpor plugin React agar Vite dapat menjalankan JSX
import react from "@vitejs/plugin-react";

// Mengekspor konfigurasi Vite
export default defineConfig({

  // Mengaktifkan plugin React
plugins: [react()],

});