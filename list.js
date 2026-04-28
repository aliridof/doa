/**
 * list.js
 * Berisi daftar doa yang akan tampil di halaman utama (Beranda).
 * id      : ID unik (harus sesuai dengan dataVar)
 * title   : Judul yang tampil di kartu
 * desc    : Keterangan singkat
 * tag     : Label status (Lengkap/Populer dll)
 * dataVar : Nama variabel array data yang ada di file isi doa masing-masing
 */

const PRAYER_LIST = [
    {
        id: "ratib-alattas",
        title: "Ratib Al-Attas",
        desc: "Karya Al-Habib Umar bin Abdurrahman Al-Attas (Lengkap 31 Bagian).",
        tag: "VER 1.0",
        dataVar: "RATIB_ALATTAS_DATA"
    },
    {
        id: "ratib-alhaddad",
        title: "Ratib Al-Haddad",
        desc: "Zikir utama karya Al-Imam Al-Habib Abdullah bin Alwi Al-Haddad (Lengkap 32 Bagian).",
        tag: "VER 1.0",
        dataVar: "RATIB_ALHADDAD_DATA"
    }
];
