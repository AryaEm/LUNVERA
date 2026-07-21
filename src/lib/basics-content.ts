export type Block =
    | { kind: "p"; text: string }
    | { kind: "h3"; text: string }
    | { kind: "h4"; text: string }
    | { kind: "list"; items: string[] }
    | { kind: "example"; good: string; bad: string };

export type Topic = {
    slug: string;
    title: string;
    blocks: Block[];
};

export const TOPICS: Topic[] = [
    {
        slug: "warna",
        title: "Warna",
        blocks: [
            {
                kind: "p",
                text: "Pernah membuka aplikasi dan bingung **harus mengeklik tombol yang mana**? Biasanya, masalahnya ada pada warna yang saling bertabrakan atau tidak memiliki arah yang jelas."
            },
            {
                kind: "h3",
                text: "1. Warna Bukan Sekadar Hiasan, Tapi Petunjuk Jalan"
            },
            {
                kind: "p",
                text: "Warna bertugas memberi tahu pengguna **mana yang penting** dan **apa fungsi dari sebuah elemen** tanpa perlu membaca panjang lebar."
            },
            {
                kind: "example",
                good: "Tombol 'Bayar' berwarna kontras menonjol, tombol 'Batal' berwarna samar.",
                bad: "Semua tombol diberi warna merah terang yang sama menyoloknya."
            },
            {
                kind: "h3",
                text: "2. Formula Sederhana: Aturan 60-30-10"
            },
            {
                kind: "p",
                text: "Daripada membingungkan pengguna dengan terlalu banyak warna, gunakan pembagian peran yang terukur:"
            },
            {
                kind: "list",
                items: [
                    "**60% Warna Dominan:** Biasanya latar belakang (putih/gelap) untuk memberikan rasa lega.",
                    "**30% Warna Sekunder:** Digunakan pada card, teks, atau elemen pendukung.",
                    "**10% Warna Aksen:** Warna khusus untuk tombol aksi utama (CTA), notifikasi, atau status."
                ]
            },
            {
                kind: "h3",
                text: "3. Bahasa Warna yang universal"
            },
            {
                kind: "p",
                text: "Gunakan konvensi yang sudah dipahami secara alami oleh otak pengguna:"
            },
            {
                kind: "list",
                items: [
                    "**Hijau:** Keberhasilan, konfirmasi, atau status aktif.",
                    "**Merah:** Error, tindakan berbahaya (seperti tombol \"Hapus\"), atau peringatan.",
                    "**Biru/Aksen Utama:** Informasi penting atau navigasi utama."
                ]
            },
            {
                kind: "h3",
                text: "Ringkasan"
            },
            {
                kind: "p",
                text: "Pembatasan warna membuat antarmuka terasa **tenang, konsisten, dan mudah dipahami dalam hitungan detik**."
            }
        ]
    },

    {
        slug: "tipografi",
        title: "Tipografi",
        blocks: [
            {
                kind: "p",
                text: "Mengapa beberapa artikel sangat nyaman dibaca hingga selesai, sementara yang lain membuat mata cepat lelah? Jawabannya ada pada **hirarki dan ritme bacaan**."
            },
            {
                kind: "h3",
                text: "1. Orang Tidak Membaca, Mereka Melakukan Scanning"
            },
            {
                kind: "p",
                text: "Di layar digital, pengguna akan memindai teks terlebih dahulu. Jika semua tulisan memiliki ukuran dan ketebalan yang sama, mata mereka akan bingung mencari titik awal."
            },
            {
                kind: "example",
                good: "Judul tebal (Bold), subjudul medium, isi teks berukuran sedang dengan kontras pas.",
                bad: "Semua teks menggunakan font tebal dengan ukuran yang hampir mirip."
            },
            {
                kind: "h3",
                text: "2. Bangun Struktur dengan Ukuran & Bobot"
            },
            {
                kind: "p",
                text: "Ciptakan kontras yang jelas agar pengguna paham alur informasi:"
            },
            {
                kind: "list",
                items: [
                    "**Judul Utama (H1/H2):** Menarik perhatian pertama kali.",
                    "**Subjudul (H3/H4):** Membagi topik menjadi poin-poin kecil.",
                    "**Body Text:** Fokus pada keterbacaan (legibility) dan kenyamanan mata."
                ]
            },
            {
                kind: "h3",
                text: "3. Berikan Berapa Ruang Napas (Line Height)"
            },
            {
                kind: "p",
                text: "Teks yang terlalu rapat akan terlihat seperti \"tembok tulisan\" yang menakutkan. Pastikan jarak antarbaris (line-height) berada di kisaran **1.4x hingga 1.6x** dari ukuran font."
            },
            {
                kind: "h3",
                text: "Ringkasan"
            },
            {
                kind: "p",
                text: "Tipografi yang baik adalah tipografi yang **tidak mengganggu**, membuat penyampaian pesan terasa alami tanpa hambatan."
            }
        ]
    },

    {
        slug: "layout",
        title: "Layout",
        blocks: [
            {
                kind: "p",
                text: "Bayangkan masuk ke toko yang barang-barangnya ditumpuk acak di lantai. Sulit menemukan yang dicari, bukan? Sama halnya dengan halaman web."
            },
            {
                kind: "h3",
                text: "1. Hukum Kedekatan (Proximity Rule)"
            },
            {
                kind: "p",
                text: "Otak manusia secara otomatis menganggap elemen yang **saling berdekatan Memiliki hubungan fungsi atau informasi**."
            },
            {
                kind: "example",
                good: "Label nama input berada persis di atas kolomnya dengan jarak rapat.",
                bad: "Label nama input berada di tengah-tengah antara dua kolom yang berbeda."
            },
            {
                kind: "h3",
                text: "2. Kerangka Kerja Berbasis Grid"
            },
            {
                kind: "p",
                text: "Grid membantu menjaga susunan elemen tetap konsisten. Sama seperti papan skak yang memiliki kotak-kotak teratur, grid memberi acuan agar setiap elemen berada di tempat yang tepat."
            },
            {
                kind: "list",
                items: [
                    "**Konsistensi Margin:** Jarak kiri dan kanan yang simetris.",
                    "**Kolom Teratur:** Mengelompokkan konten dalam card atau blok yang sejajar."
                ]
            },
            {
                kind: "h3",
                text: "Ringkasan"
            },
            {
                kind: "p",
                text: "Layout yang matang akan **mengarahkan pandangan mata pengguna secara intuitif** dari atas ke bawah, dari kiri ke kanan."
            }
        ]
    },

    {
        slug: "spacing",
        title: "Spacing",
        blocks: [
            {
                kind: "p",
                text: "Rahasia umum desainer profesional: **Whitespace (ruang kosong) bukanlah area terbuang, melainkan alat desain paling ampuh.**"
            },
            {
                kind: "h3",
                text: "1. Hindari Tampilan yang Sesak"
            },
            {
                kind: "p",
                text: "Banyak pemula merasa setiap ruang kosong harus diisi. Padahal, ruang kosong memberi \"napas\" pada desain sehingga pengguna bisa fokus pada informasi yang penting."
            },
            {
                kind: "example",
                good: "Memberikan padding lega di dalam card sehingga konten punya \"ruang bernapas\".",
                bad: "Teks dan tombol menempel sangat dekat dengan garis tepi card."
            },
            {
                kind: "h3",
                text: "2. Gunakan Sistem Kelipatan (8pt Grid System)"
            },
            {
                kind: "p",
                text: "Jangan mengira-ngira ukuran jarak secara acak (misal 11px, 17px). Gunakan ritme berstandar kelipatan **8 (atau 4)**:"
            },
            {
                kind: "list",
                items: [
                    "**Small (8px - 12px):** Jarak antar elemen erat (icon dengan teks).",
                    "**Medium (16px - 24px):** Jarak antar komponen standar dalam satu card.",
                    "**Large (32px - 64px+):** Jarak pemisah antar section besar."
                ]
            },
            {
                kind: "h3",
                text: "Ringkasan"
            },
            {
                kind: "p",
                text: "Spacing yang terukur menciptakan **rasa elegan, bersih, dan mewah** pada aplikasi."
            }
        ]
    },

    {
        slug: "hierarki-visual",
        title: "Hierarki Visual",
        blocks: [
            {
                kind: "p",
                text: "Saat pengguna pertama kali mendarat di halamanmu, dalam 3 detik pertama, **elemen apa yang paling pertama mereka lihat?**"
            },
            {
                kind: "h3",
                text: "1. Siapa \"Bintang Utama\" di Layar Ini?"
            },
            {
                kind: "p",
                text: "Setiap antarmuka harus memiliki satu Focal Point utama. Jika semua elemen dibuat besar dan terang, maka tidak ada satu pun yang menonjol."
            },
            {
                kind: "example",
                good: "Tombol \"Daftar Sekarang\" menonjol dengan warna paling kontras.",
                bad: "Tombol \"Daftar'\", \"Bantuan\", \"Kirim Feedback\", dan \"Info\" semuanya memakai warna dan ukuran sama."
            },
            {
                kind: "h3",
                text: "2. Teknik Membangun Penekanan Visual"
            },
            {
                kind: "list",
                items: [
                    "**Skala & Ukuran:** Elemen lebih besar diproses lebih cepat oleh mata.",
                    "**Kontras Warna:** Warna terang di atas latar gelap menarik perhatian instan.",
                    "**Isolasi (Whitespace):** Memberikan ruang menyendiri pada sebuah elemen."
                ]
            },
            {
                kind: "h3",
                text: "Ringkasan"
            },
            {
                kind: "p",
                text: "Hierarki visual yang sukses akan **membimbing pengguna melakukan tindakan yang diharapkan** tanpa merasa dipaksa."
            }
        ]
    },

    {
        slug: "alignment",
        title: "Alignment",
        blocks: [
            {
                kind: "p",
                text: "Otak manusia sangat sensitif terhadap ketidaksejajaran. Meleset **2 pixel saja** bisa membuat antarmuka terasa aneh, meski pengguna awam tidak tahu penyebab pastinya."
            },
            {
                kind: "h3",
                text: "1. Rata Kiri Adalah Standar Emas Digital"
            },
            {
                kind: "p",
                text: "Dalam budaya membaca dari kiri ke kanan, teks rata kiri (left-aligned) memberikan anchor point visual yang paling nyaman untuk mata beristirahat saat memulai baris baru."
            },
            {
                kind: "example",
                good: "Paragraf panjang menggunakan Alignment Rata Kiri.",
                bad: "Paragraf deskripsi terdiri dari 4 baris tetapi dipaksa Rata Tengah (Center Alignment)."
            },
            {
                kind: "h3",
                text: "2. Kapan Boleh Menggunakan Rata Tengah?"
            },
            {
                kind: "list",
                items: [
                    "Gunakan **Center Alignment** hanya untuk teks pendek (1-2 baris) seperti Hero Title, Badges, atau Modal Alert.",
                    "Hindari mencampur adukkan rata tengah dan rata kiri dalam satu blok konten yang sama."
                ]
            },
            {
                kind: "h3",
                text: "Ringkasan"
            },
            {
                kind: "p",
                text: "Alignment yang rapi dan tegas adalah fondasi utama yang membedakan **desain amatir dan profesional**."
            }
        ]
    }
];