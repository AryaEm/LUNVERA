export type ComparisonSlug = "warna" | "tipografi" | "layout" | "spacing" | "hierarchy";

export type Comparison = {
  slug: ComparisonSlug;
  category: string;
  title: string;
  problem: string;
  whatChanged: string;
  lesson: string;
};

export const COMPARISONS: Comparison[] = [
  {
    slug: "warna",
    category: "Warna",
    title: "Terlalu banyak warna",
    problem:
      "Desain menggunakan terlalu banyak warna yang saling bertabrakan, membuat tampilan terlihat tidak teratur dan membingungkan. Mata pengguna tidak tahu harus fokus ke mana.",
    whatChanged:
      "Warna dikurangi jadi satu warna utama (gelap), satu warna pendukung (abu-abu muted), dan satu warna aksen (hijau sage), sisanya dihilangkan sama sekali.",
    lesson: "Tidak semua warna harus digunakan dalam satu desain. Batasi diri ke maksimal tiga warna.",
  },
  {
    slug: "tipografi",
    category: "Tipografi",
    title: "Tidak ada hierarki ukuran font",
    problem:
      "Ukuran dan gaya font dipakai secara acak, judul kecil, label besar, subjudul huruf kapital semua. Pengguna kesulitan menentukan mana yang harus dibaca duluan.",
    whatChanged:
      "Ukuran font disusun jadi skala yang jelas: judul paling besar, label paling kecil dan seragam, subjudul ukuran standar dengan huruf normal.",
    lesson: "Ukuran font bukan soal selera, tapi soal urutan membaca. Buat skala yang konsisten.",
  },
  {
    slug: "layout",
    category: "Layout",
    title: "Elemen tidak dikelompokkan",
    problem:
      "Judul, deskripsi, dan tombol diletakkan terpisah tanpa pola yang jelas, seolah tidak saling berhubungan satu sama lain.",
    whatChanged:
      "Ketiga elemen disusun dalam satu kelompok vertikal yang rapi, mengikuti urutan baca alami dari atas ke bawah.",
    lesson: "Elemen yang berhubungan harus terlihat sebagai satu kesatuan, bukan potongan-potongan terpisah.",
  },
  {
    slug: "spacing",
    category: "Spacing",
    title: "Jarak antar elemen terlalu sempit",
    problem: "Semua elemen menempel satu sama lain tanpa jarak, membuat tampilan terasa sesak dan sulit dibaca.",
    whatChanged: "Diberi jarak (padding & gap) yang konsisten antar elemen, memberi ruang bernapas pada desain.",
    lesson: "Ruang kosong bukan ruang yang terbuang, ia membantu mata beristirahat.",
  },
  {
    slug: "hierarchy",
    category: "Hierarki Visual",
    title: "Semua elemen terlihat sama penting",
    problem:
      "Judul, subjudul, dan label memakai ukuran dan ketebalan yang sama, sehingga tidak ada yang menonjol sebagai fokus utama.",
    whatChanged:
      "Judul dibuat lebih besar dan tebal, elemen pendukung dibuat lebih kecil dan lebih pudar, membentuk urutan fokus yang jelas.",
    lesson: "Tidak semua elemen boleh bersaing untuk perhatian yang sama. Satu fokus utama, sisanya pendukung.",
  },
];