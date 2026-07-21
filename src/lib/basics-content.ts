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
            { kind: "p", text: "Warna adalah salah satu elemen paling penting dalam desain. Selain membuat tampilan lebih menarik, warna juga membantu **menyampaikan suasana**, **menarik perhatian**, dan **mengarahkan fokus** pengguna ke bagian yang paling krusial." },
            { kind: "p", text: "Pemilihan warna yang tepat membuat desain terasa **lebih profesional**, sedangkan penggunaan warna yang berlebihan dapat membuat tampilan terlihat berantakan dan membingungkan." },
            { kind: "h3", text: "Kenapa warna penting?" },
            {
                kind: "list",
                items: [
                    "Membangun suasana atau emosi dalam sebuah desain.",
                    "Menarik perhatian ke elemen penting, seperti tombol atau judul.",
                    "Membantu pengguna memahami informasi dengan lebih cepat.",
                    "Menjadi identitas visual yang membuat sebuah brand mudah dikenali.",
                ],
            },
            { kind: "h3", text: "Tips menggunakan warna" },
            { kind: "h4", text: "Gunakan palet warna yang sederhana" },
            { kind: "p", text: "Tidak perlu memakai banyak warna. Untuk desain pemula, gunakan **maksimal tiga jenis warna**:" },
            {
                kind: "list",
                items: [
                    "Warna utama sebagai identitas desain.",
                    "Warna pendukung untuk melengkapi tampilan.",
                    "Warna aksen untuk menonjolkan elemen penting, seperti tombol atau notifikasi.",
                ],
            },
            { kind: "p", text: "Dengan palet yang sederhana, desain akan terlihat **lebih rapi dan konsisten**." },
            { kind: "h4", text: "Pastikan kontras mudah dibaca" },
            { kind: "p", text: "Teks harus memiliki **kontras yang cukup** dengan warna latar belakang. Hindari menggunakan warna yang terlalu mirip karena akan menyulitkan pengguna saat membaca." },
            { kind: "example", good: "Teks hitam di atas latar putih.", bad: "Teks abu-abu muda di atas latar putih." },
            { kind: "h4", text: "Gunakan warna untuk memberi makna" },
            { kind: "p", text: "Warna tidak hanya berfungsi sebagai dekorasi. Gunakan warna untuk **membantu pengguna memahami informasi**. Contohnya:" },
            {
                kind: "list",
                items: [
                    "**Hijau** untuk keberhasilan atau konfirmasi.",
                    "**Merah** untuk kesalahan atau peringatan.",
                    "**Biru** untuk informasi atau tindakan utama.",
                ],
            },
            { kind: "p", text: "Penggunaan warna yang konsisten akan membuat antarmuka **lebih mudah dipahami**." },
            { kind: "h3", text: "Kesalahan yang sering dilakukan" },
            {
                kind: "list",
                items: [
                    "Menggunakan terlalu banyak warna dalam satu halaman.",
                    "Memilih warna tanpa mempertimbangkan kontras.",
                    "Menggunakan warna yang terlalu mencolok untuk semua elemen.",
                    "Memberikan warna berbeda pada setiap bagian sehingga kehilangan konsistensi.",
                ],
            },
            { kind: "h3", text: "Ringkasan" },
            { kind: "p", text: "Gunakan warna **secukupnya dan dengan tujuan yang jelas**. Pilih satu warna utama, satu warna pendukung, dan satu warna aksen. Pastikan **kontras tetap nyaman dibaca**, serta gunakan warna secara konsisten agar desain terlihat lebih rapi dan memiliki identitas yang kuat." },
        ],
    },

    {
        slug: "tipografi",
        title: "Tipografi",
        blocks: [
            { kind: "p", text: "Tipografi adalah cara mengatur teks agar **mudah dibaca dan dipahami**. Pemilihan font, ukuran, jarak, dan ketebalan huruf sangat memengaruhi kenyamanan pengguna saat membaca sebuah desain." },
            { kind: "p", text: "Tipografi yang baik membuat **informasi lebih jelas**, sedangkan tipografi yang kurang tepat dapat membuat pengguna cepat lelah atau kesulitan menemukan informasi penting." },
            { kind: "h3", text: "Kenapa tipografi penting?" },
            {
                kind: "list",
                items: [
                    "Membuat teks **lebih mudah dibaca**.",
                    "Membantu pengguna **memahami urutan informasi**.",
                    "Meningkatkan **kenyamanan saat membaca**.",
                    "Memberikan **karakter dan identitas** pada sebuah desain.",
                ],
            },
            { kind: "h3", text: "Tips menggunakan tipografi" },
            { kind: "h4", text: "Gunakan maksimal dua jenis font" },
            { kind: "p", text: "Terlalu banyak jenis font membuat desain terlihat **tidak konsisten dan membingungkan**. Untuk pemula, cukup gunakan **satu hingga dua jenis font** dalam satu desain. Contohnya:" },
            {
                kind: "list",
                items: ["Satu font untuk **judul**.", "Satu font untuk **isi teks**."],
            },
            { kind: "p", text: "Dengan begitu, desain akan terlihat **lebih rapi dan profesional**." },
            { kind: "h4", text: "Atur line height yang nyaman" },
            { kind: "p", text: "Line height adalah jarak antarbaris teks. Jika terlalu rapat, teks akan sulit dibaca. Sebaliknya, jika terlalu renggang, alur membaca menjadi kurang nyaman. Gunakan **line height yang cukup** agar setiap baris memiliki ruang dan teks terasa lebih lega." },
            { kind: "h4", text: "Gunakan ukuran dan bobot font untuk hierarki" },
            { kind: "p", text: "Tidak semua teks memiliki tingkat kepentingan yang sama. Gunakan **ukuran dan ketebalan font** untuk membantu pengguna mengetahui informasi mana yang harus dibaca terlebih dahulu. Contohnya:" },
            {
                kind: "list",
                items: [
                    "**Judul** menggunakan ukuran paling besar.",
                    "**Subjudul** sedikit lebih kecil.",
                    "**Isi teks** menggunakan ukuran standar.",
                    "**Informasi tambahan** menggunakan ukuran yang lebih kecil.",
                ],
            },
            { kind: "p", text: "Dengan cara ini, pengguna dapat memahami isi halaman **dengan lebih cepat** tanpa harus membaca semuanya secara berurutan." },
            { kind: "h3", text: "Kesalahan yang sering dilakukan" },
            {
                kind: "list",
                items: [
                    "Menggunakan **terlalu banyak jenis font** dalam satu desain.",
                    "Memilih font yang **sulit dibaca** hanya karena terlihat menarik.",
                    "Menggunakan ukuran teks yang **terlalu kecil**.",
                    "Line height **terlalu rapat** sehingga teks terasa sesak.",
                    "Semua teks memiliki ukuran yang sama sehingga **tidak ada hierarki yang jelas**.",
                ],
            },
            { kind: "h3", text: "Ringkasan" },
            { kind: "p", text: "Tipografi bukan hanya soal memilih font yang bagus, tetapi juga tentang **membuat informasi mudah dibaca**. Gunakan **maksimal dua jenis font**, atur line height yang nyaman, dan manfaatkan ukuran serta bobot font untuk membangun **hierarki visual**." },
        ],
    },

    {
        slug: "layout",
        title: "Layout",
        blocks: [
            { kind: "p", text: "Layout adalah cara menyusun dan mengatur elemen pada sebuah halaman. Susunan yang baik membantu pengguna **memahami informasi dengan mudah**, sedangkan layout yang berantakan membuat pengguna bingung menentukan mana yang harus dilihat duluan." },
            { kind: "p", text: "Layout bukan hanya soal membuat tampilan terlihat rapi, tetapi juga tentang **mengarahkan perhatian pengguna secara alami**." },
            { kind: "h3", text: "Kenapa layout penting?" },
            {
                kind: "list",
                items: [
                    "Membantu pengguna **memahami informasi dengan lebih cepat**.",
                    "Membuat tampilan terlihat **rapi dan terorganisir**.",
                    "Mengarahkan mata pengguna ke **informasi yang paling penting**.",
                    "Meningkatkan **kenyamanan saat melihat** sebuah desain.",
                ],
            },
            { kind: "h3", text: "Tips menggunakan layout" },
            { kind: "h4", text: "Kelompokkan elemen yang berhubungan" },
            { kind: "p", text: "Letakkan elemen yang memiliki hubungan dekat agar **terlihat sebagai satu kesatuan**. Misalnya, judul, deskripsi, dan tombol sebaiknya berada dalam satu kelompok sehingga pengguna langsung memahami bahwa ketiganya saling berkaitan." },
            { kind: "h4", text: "Gunakan grid" },
            { kind: "p", text: "Grid membantu menyusun elemen agar **sejajar dan memiliki jarak yang konsisten**. Dengan menggunakan grid, desain akan terlihat lebih rapi dan memudahkan kamu menjaga keseimbangan antar elemen." },
            { kind: "h4", text: "Berikan ruang untuk setiap elemen" },
            { kind: "p", text: "Setiap elemen membutuhkan ruang agar tidak saling bertabrakan. Gunakan **ruang kosong (whitespace)** secukupnya agar setiap bagian memiliki \"napas\" dan lebih nyaman dilihat." },
            { kind: "h3", text: "Kesalahan yang sering dilakukan" },
            {
                kind: "list",
                items: [
                    "Menempatkan elemen **secara acak** tanpa pola yang jelas.",
                    "**Tidak menggunakan grid** sehingga posisi elemen tidak sejajar.",
                    "Menumpuk **terlalu banyak informasi** dalam satu area.",
                    "Tidak mengelompokkan elemen yang saling berhubungan.",
                    "Memberikan **jarak yang tidak konsisten** antar elemen.",
                ],
            },
            { kind: "h3", text: "Ringkasan" },
            { kind: "p", text: "Layout yang baik membantu pengguna memahami isi desain **tanpa harus berpikir keras**. Kelompokkan elemen yang berhubungan, **gunakan grid**, dan berikan ruang kosong yang cukup pada setiap elemen." },
        ],
    },

    {
        slug: "spacing",
        title: "Spacing",
        blocks: [
            { kind: "p", text: "Spacing adalah **jarak antara elemen-elemen** dalam sebuah desain. Meskipun terlihat sederhana, spacing memiliki peran besar dalam membuat desain terasa rapi, teratur, dan nyaman dilihat." },
            { kind: "p", text: "Banyak desain terlihat berantakan bukan karena warna atau font yang buruk, melainkan karena semua elemen ditempatkan **terlalu rapat atau memiliki jarak yang acak**." },
            { kind: "h3", text: "Kenapa spacing penting?" },
            {
                kind: "list",
                items: [
                    "Membuat desain terasa **lebih rapi dan terorganisir**.",
                    "Membantu pengguna **membedakan kelompok informasi**.",
                    "Meningkatkan **kenyamanan saat membaca**.",
                    "Memberikan ruang agar **setiap elemen memiliki fokus yang jelas**.",
                ],
            },
            { kind: "h3", text: "Tips menggunakan spacing" },
            { kind: "h4", text: "Bedakan jarak antar section dan antar elemen" },
            { kind: "p", text: "Gunakan **jarak yang lebih besar** untuk memisahkan section utama, sedangkan elemen yang masih berhubungan sebaiknya memiliki **jarak yang lebih dekat**. Dengan begitu, pengguna dapat memahami struktur halaman secara lebih mudah." },
            { kind: "h4", text: "Gunakan spacing yang konsisten" },
            { kind: "p", text: "**Konsistensi lebih penting daripada besarnya jarak**. Gunakan sistem spacing terukur sebagai panduan, misalnya **kelipatan 8 pixel** (8, 16, 24, atau 32 pixel)." },
            { kind: "h4", text: "Jangan takut menggunakan ruang kosong" },
            { kind: "p", text: "Ruang kosong atau **whitespace** bukan berarti desain belum selesai. Justru ruang kosong membantu tampilan terasa **lebih bersih dan profesional** dibanding desain yang penuh sesak." },
            { kind: "h3", text: "Kesalahan yang sering dilakukan" },
            {
                kind: "list",
                items: [
                    "Semua elemen ditempatkan **terlalu rapat**.",
                    "Jarak antar elemen **berubah-ubah tanpa pola**.",
                    "Tidak ada perbedaan jarak antara section dan isi.",
                    "**Takut menggunakan ruang kosong** sehingga halaman terasa penuh.",
                    "Menambahkan elemen hanya untuk **mengisi ruang kosong**.",
                ],
            },
            { kind: "h3", text: "Ringkasan" },
            { kind: "p", text: "Spacing mengatur hubungan antar elemen. Gunakan jarak lebih besar untuk memisahkan section, **jaga konsistensi kelipatan angka**, dan manfaatkan ruang kosong agar desain **terasa lebih bernapas**." },
        ],
    },

    {
        slug: "hierarki-visual",
        title: "Hierarki visual",
        blocks: [
            { kind: "p", text: "Hierarki visual adalah cara mengatur elemen agar pengguna mengetahui **urutan informasi yang harus dilihat terlebih dahulu**. Ini dapat dibangun melalui ukuran, warna, kontras, posisi, maupun jarak." },
            { kind: "p", text: "Tanpa hierarki yang jelas, **semua elemen berteriak meminta perhatian** secara bersamaan sehingga pengguna bingung menemukan fokus utama." },
            { kind: "h3", text: "Kenapa Hierarki Visual Penting?" },
            {
                kind: "list",
                items: [
                    "Membantu pengguna menemukan **informasi penting dengan cepat**.",
                    "Mengarahkan **alur membaca secara alami**.",
                    "Membuat desain terasa **terstruktur dan tidak membingungkan**.",
                    "Mengurangi beban pikiran pengguna saat mencerna data.",
                ],
            },
            { kind: "h3", text: "Tips Membangun Hierarki Visual" },
            { kind: "h4", text: "Tonjolkan Elemen yang Paling Penting" },
            { kind: "p", text: "Setiap desain harus memiliki **satu fokus utama**. Gunakan ukuran lebih besar, warna kontras, atau posisi menonjol untuk elemen krusial seperti **judul utama atau tombol aksi (CTA)**." },
            { kind: "h4", text: "Jangan Buat Semua Elemen Sama Penting" },
            { kind: "p", text: "Berikan perbedaan yang tegas antara **elemen utama, elemen pendukung, dan informasi tambahan** agar alur membaca menjadi ringan dan mudah diikuti." },
            { kind: "h4", text: "Uji dengan Pandangan Pertama" },
            { kind: "p", text: "Lihat kembali hasil desain selama 3 detik dan tanyakan: *\"Elemen apa yang pertama kali saya lihat?\"* Jika jawabannya sesuai tujuan, berarti hierarki visualmu **sudah bekerja dengan baik**." },
            { kind: "h3", text: "Kesalahan yang Sering Dilakukan" },
            {
                kind: "list",
                items: [
                    "Semua elemen menggunakan **ukuran yang sama**.",
                    "Warna terlalu ramai sehingga **tidak ada fokus utama**.",
                    "Tombol aksi **terlihat tenggelam** sama seperti elemen biasa.",
                    "Judul, subjudul, dan isi tidak memiliki perbandingan kontras.",
                ],
            },
            { kind: "h3", text: "Ringkasan" },
            { kind: "p", text: "Hierarki visual mengarahkan pandangan mata. **Tonjolkan fokus utama**, bedakan tingkat penekanan tiap elemen, dan uji dengan lirikan pertama agar pesan desain **langsung tersampaikan**." },
        ],
    },

    {
        slug: "alignment",
        title: "Alignment",
        blocks: [
            { kind: "p", text: "Alignment adalah cara menyusun elemen agar **berada pada satu garis acuan yang sama**. Dengan alignment yang presisi, desain akan terlihat lebih teratur dan profesional." },
            { kind: "p", text: "Pergeseran posisi **beberapa pixel saja** sangat mudah disadari oleh mata manusia dan bisa membuat desain terasa mengganggu secara tidak sadar." },
            { kind: "h3", text: "Kenapa Alignment Penting?" },
            {
                kind: "list",
                items: [
                    "Membuat desain terasa **lebih rapi dan terorganisir**.",
                    "Membantu pengguna **memahami hubungan antar elemen**.",
                    "Menciptakan **aliran visual yang konsisten**.",
                    "Memberikan kesan **profesional dan berkelas**.",
                ],
            },
            { kind: "h3", text: "Tips Menggunakan Alignment" },
            { kind: "h4", text: "Gunakan Satu Garis Acuan" },
            { kind: "p", text: "Pilih satu garis referensi utama (seperti **rata kiri**). Untuk sebagian besar desain web, rata kiri adalah pilihan paling alami karena mengikuti kebiasaan membaca manusia." },
            { kind: "h4", text: "Jaga Konsistensi Antar Section" },
            { kind: "p", text: "Pastikan margin dan garis patokan **tetap konsisten** dari satu bagian ke bagian berikutnya agar seluruh halaman terasa menyatu." },
            { kind: "h4", text: "Gunakan Grid atau Garis Bantu" },
            { kind: "p", text: "Jangan hanya mengandalkan perkiraan mata. **Manfaatkan grid atau ruler** untuk memastikan setiap elemen berada di garis yang tepat." },
            { kind: "h3", text: "Kesalahan yang Sering Dilakukan" },
            {
                kind: "list",
                items: [
                    "Menempatkan elemen secara **acak tanpa acuan**.",
                    "Judul dan isi paragraf **tidak sejajar**.",
                    "Margin kiri-kanan **berubah-ubah** di tiap section.",
                    "Mencampur rata kiri, tengah, dan kanan **tanpa alasan jelas**.",
                ],
            },
            { kind: "h3", text: "Ringkasan" },
            { kind: "p", text: "Alignment menjaga keteraturan visual. **Pilih satu garis acuan yang jelas**, pertahankan konsistensi margin, dan gunakan grid agar tampilan terasa rapi dan solid." },
        ],
    },
];