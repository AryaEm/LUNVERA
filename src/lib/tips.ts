export type Tip = {
  number: string;
  category: string;
  title: string;
  description: string;
  quickTip: string;
  accent: "rust" | "moss";
};

export const TIPS: Tip[] = [
  {
    number: "01",
    category: "Mindset",
    title: "Pakai Referensi",
    description:
      "Referensi membantu kamu memahami bagaimana desainer lain menyusun layout, memilih warna, dan mengatur tipografi. Gunakan referensi sebagai bahan belajar, bukan untuk disalin mentah-mentah.",
    quickTip: "Cari 3 desain bagus setiap hari di Pinterest atau Dribbble.",
    accent: "rust",
  },
  {
    number: "02",
    category: "Mindset",
    title: "Dasar Dulu, Tren Belakangan",
    description:
      "Tren desain selalu berubah, tetapi prinsip dasar seperti layout, warna, tipografi, dan spacing akan selalu relevan. Kuasai fondasinya terlebih dahulu.",
    quickTip: "Belajar satu prinsip desain sebelum mencoba tren baru.",
    accent: "moss",
  },
  {
    number: "03",
    category: "Typography",
    title: "Gunakan Maksimal Dua Font",
    description:
      "Semakin banyak font bukan berarti desain semakin menarik. Mulailah dengan satu font untuk judul dan satu font untuk isi agar tampilan tetap konsisten.",
    quickTip: "Pasangkan font heading dan body yang saling melengkapi.",
    accent: "moss",
  },
  {
    number: "04",
    category: "Layout",
    title: "Perhatikan Spacing",
    description:
      "Kalau desain terasa berantakan, sering kali masalahnya bukan pada warna atau font, tetapi karena semua elemen terlalu rapat. Beri ruang agar setiap elemen punya 'napas'.",
    quickTip: "Gunakan jarak yang konsisten antar elemen.",
    accent: "rust",
  },
  {
    number: "05",
    category: "Design Thinking",
    title: "Selalu Tanyakan Mengapa",
    description:
      "Jangan berhenti di 'desain ini keren'. Biasakan bertanya apa yang membuatnya menarik. Apakah karena layout, warna, tipografi, atau hierarki visual?",
    quickTip: "Analisis satu desain setiap hari selama 5 menit.",
    accent: "moss",
  },
  {
    number: "06",
    category: "Practice",
    title: "Desain Secara Konsisten",
    description:
      "Kemampuan desain berkembang lewat latihan yang konsisten. Tidak perlu menunggu sampai merasa hebat untuk mulai membuat sesuatu.",
    quickTip: "Buat satu desain kecil setiap hari.",
    accent: "rust",
  },
];