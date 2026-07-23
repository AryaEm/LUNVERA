export type CategoryKey = "warna" | "tipografi" | "layout" | "spacing" | "hierarchy" | "alignment";

export type CategoryMeta = {
  key: CategoryKey;
  label: string;
};

export const CATEGORIES: CategoryMeta[] = [
  { key: "warna", label: "Warna" },
  { key: "tipografi", label: "Tipografi" },
  { key: "layout", label: "Layout" },
  { key: "spacing", label: "Spacing" },
  { key: "hierarchy", label: "Hierarki Visual" },
  { key: "alignment", label: "Alignment" },
];

export type Comparison = {
  slug: string;
  categoryKey: CategoryKey;
  title: string;
  problem: string;
  whatChanged: string;
  lesson: string;
};

export const COMPARISONS: Comparison[] = [
  {
    slug: "warna-terlalu-banyak-warna",
    categoryKey: "warna",
    title: "Terlalu banyak warna",
    problem:
      "Desain menggunakan terlalu banyak warna yang saling bertabrakan, membuat tampilan terlihat tidak teratur dan membingungkan. Mata pengguna tidak tahu harus fokus ke mana.",
    whatChanged:
      "Warna dikurangi jadi satu warna utama (gelap), satu warna pendukung (abu-abu muted), dan satu warna aksen (hijau sage), sisanya dihilangkan sama sekali.",
    lesson: "Tidak semua warna harus digunakan dalam satu desain. Batasi diri ke maksimal tiga warna.",
  },
  {
    slug: "warna-kontras-rendah",
    categoryKey: "warna",
    title: "Kontras teks terlalu rendah",
    problem:
      "Teks abu-abu muda ditaruh di atas latar putih, membuat tulisan sulit dibaca terutama di layar dengan pencahayaan terang.",
    whatChanged: "Warna teks digelapkan supaya kontrasnya cukup terhadap latar, tanpa mengubah palet warna utama.",
    lesson: "Kontras yang cukup itu wajib, bukan pilihan estetika semata.",
  },
  {
    slug: "tipografi-tanpa-hierarki",
    categoryKey: "tipografi",
    title: "Tidak ada hierarki ukuran font",
    problem:
      "Ukuran dan gaya font dipakai secara acak, judul kecil, label besar, subjudul huruf kapital semua. Pengguna kesulitan menentukan mana yang harus dibaca duluan.",
    whatChanged:
      "Ukuran font disusun jadi skala yang jelas: judul paling besar, label paling kecil dan seragam, subjudul ukuran standar dengan huruf normal.",
    lesson: "Ukuran font bukan soal selera, tapi soal urutan membaca. Buat skala yang konsisten.",
  },
  {
    slug: "layout-elemen-tidak-dikelompokkan",
    categoryKey: "layout",
    title: "Elemen tidak dikelompokkan",
    problem:
      "Judul, deskripsi, dan tombol diletakkan terpisah tanpa pola yang jelas, seolah tidak saling berhubungan satu sama lain.",
    whatChanged:
      "Ketiga elemen disusun dalam satu kelompok vertikal yang rapi, mengikuti urutan baca alami dari atas ke bawah.",
    lesson: "Elemen yang berhubungan harus terlihat sebagai satu kesatuan, bukan potongan-potongan terpisah.",
  },
  {
    slug: "spacing-terlalu-sempit",
    categoryKey: "spacing",
    title: "Jarak antar elemen terlalu sempit",
    problem: "Semua elemen menempel satu sama lain tanpa jarak, membuat tampilan terasa sesak dan sulit dibaca.",
    whatChanged: "Diberi jarak (padding & gap) yang konsisten antar elemen, memberi ruang bernapas pada desain.",
    lesson: "Ruang kosong bukan ruang yang terbuang, ia membantu mata beristirahat.",
  },
  {
    slug: "hierarki-semua-sama-penting",
    categoryKey: "hierarchy",
    title: "Semua elemen terlihat sama penting",
    problem:
      "Judul, subjudul, dan label memakai ukuran dan ketebalan yang sama, sehingga tidak ada yang menonjol sebagai fokus utama.",
    whatChanged:
      "Judul dibuat lebih besar dan tebal, elemen pendukung dibuat lebih kecil dan lebih pudar, membentuk urutan fokus yang jelas.",
    lesson: "Tidak semua elemen boleh bersaing untuk perhatian yang sama. Satu fokus utama, sisanya pendukung.",
  },
  {
    slug: "hierarki-semua-sama-penting",
    categoryKey: "alignment",
    title: "Semua elemen terlihat sama penting",
    problem:
      "Judul, subjudul, dan label memakai ukuran dan ketebalan yang sama, sehingga tidak ada yang menonjol sebagai fokus utama.",
    whatChanged:
      "Judul dibuat lebih besar dan tebal, elemen pendukung dibuat lebih kecil dan lebih pudar, membentuk urutan fokus yang jelas.",
    lesson: "Tidak semua elemen boleh bersaing untuk perhatian yang sama. Satu fokus utama, sisanya pendukung.",
  },
];

export function getComparisonsByCategory(categoryKey: CategoryKey) {
  return COMPARISONS.filter((item) => item.categoryKey === categoryKey);
}