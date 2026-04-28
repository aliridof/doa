/**
 * list.js
 * File ini berfungsi sebagai katalog menu di halaman utama.
 * Pastikan properti 'dataVar' sama persis dengan nama variabel di file data masing-masing.
 */

const PRAYER_LIST = [
    {
        id: "ratib-alattas",
        title: "Ratib Al-Attas",
        desc: "Zikir lengkap karya Al-Habib Umar bin Abdurrahman Al-Attas (31 Bagian).",
        tag: "LENGKAP",
        dataVar: "RATIB_ALATTAS_DATA" // Merujuk ke variabel di ratib-alattas.js
    },
    {
        id: "ratib-alhaddad",
        title: "Ratib Al-Haddad",
        desc: "Zikir utama karya Al-Imam Al-Habib Abdullah bin Alwi Al-Haddad (32 Bagian).",
        tag: "LENGKAP",
        dataVar: "RATIB_ALHADDAD_DATA" // Merujuk ke variabel di ratib-alhaddad.js
    }
];
