// Data kursus yang diperbarui dengan tujuan dan materi
const courses = [
    {
        id: 1,
        title: 'Pemrograman Web Dasar',
        description: 'Kursus ini memperkenalkan konsep dasar pemrograman web menggunakan HTML, CSS, dan JavaScript. Anda akan belajar cara membuat dan mendesain halaman web yang responsif dan interaktif.',
        duration: '4 minggu',
        goals: 'Memahami dasar-dasar HTML, CSS, dan JavaScript. Mampu membuat halaman web sederhana yang responsif.',
        materials: 'HTML, CSS, JavaScript, Editor kode, Browser web',
        videoUrl: 'pemrograman-web-dasar.mp4'
    },
    {
        id: 2,
        title: 'Desain Grafis dengan Adobe Illustrator',
        description: 'Kursus ini mengajarkan teknik desain grafis menggunakan Adobe Illustrator. Anda akan belajar cara membuat desain vector berkualitas tinggi untuk berbagai aplikasi.',
        duration: '6 minggu',
        goals: 'Menguasai alat dan teknik desain grafis menggunakan Adobe Illustrator. Mampu membuat desain vector untuk kebutuhan profesional.',
        materials: 'Adobe Illustrator, Grafik tablet, Tutorial desain',
        videoUrl: 'desain-grafis-adobe-illustrator.mp4'
    },
    {
        id: 3,
        title: 'Analisis Data dengan Python',
        description: 'Kursus ini dirancang untuk mengajarkan teknik analisis data menggunakan bahasa pemrograman Python. Anda akan belajar cara mengolah data, visualisasi, dan membuat laporan analisis.',
        duration: '5 minggu',
        goals: 'Menguasai teknik analisis data dan visualisasi menggunakan Python. Mampu menghasilkan laporan analisis data yang informatif.',
        materials: 'Python, Pandas, Matplotlib, Jupyter Notebook',
        videoUrl: 'analisis-data-python.mp4'
    },
    {
        id: 4,
        title: 'Pengembangan Aplikasi Mobile dengan Flutter',
        description: 'Kursus ini mengajarkan cara membangun aplikasi mobile cross-platform menggunakan Flutter. Anda akan mempelajari cara membuat antarmuka pengguna dan mengelola state aplikasi.',
        duration: '7 minggu',
        goals: 'Mampu membangun aplikasi mobile yang responsif menggunakan Flutter. Memahami konsep state management dan desain UI/UX.',
        materials: 'Flutter, Dart, IDE (Android Studio/VS Code), Emulator',
        videoUrl: 'pengembangan-aplikasi-flutter.mp4'
    },
    {
        id: 5,
        title: 'Keamanan Siber untuk Pemula',
        description: 'Kursus ini memberikan pengantar ke dunia keamanan siber. Anda akan belajar tentang ancaman keamanan, cara melindungi sistem, dan prinsip dasar keamanan informasi.',
        duration: '4 minggu',
        goals: 'Memahami prinsip dasar keamanan siber. Mampu mengidentifikasi dan melindungi terhadap ancaman keamanan umum.',
        materials: 'Kursus keamanan siber, Alat keamanan, Studi kasus',
        videoUrl: 'keamanan-siber-pemula.mp4'
    },
    {
        id: 6,
        title: 'Pengembangan Web Lanjutan dengan JavaScript',
        description: 'Kursus ini membahas teknik pengembangan web lanjutan menggunakan JavaScript. Fokus pada pembuatan aplikasi web dinamis dengan framework modern seperti React atau Vue.js.',
        duration: '6 minggu',
        goals: 'Menguasai teknik pengembangan web lanjutan dengan JavaScript. Mampu membuat aplikasi web dinamis dan responsif.',
        materials: 'JavaScript, React/Vue.js, Webpack, API',
        videoUrl: 'pengembangan-web-javascript.mp4'
    },
    {
        id: 7,
        title: 'Manajemen Proyek Agile',
        description: 'Kursus ini mengajarkan prinsip dan teknik manajemen proyek menggunakan metodologi Agile. Anda akan mempelajari cara menerapkan Scrum dan Kanban dalam proyek nyata.',
        duration: '5 minggu',
        goals: 'Memahami prinsip-prinsip Agile dan teknik manajemen proyek. Mampu menerapkan Scrum dan Kanban dalam proyek tim.',
        materials: 'Metodologi Agile, Alat manajemen proyek (JIRA/Trello), Studi kasus',
        videoUrl: 'manajemen-proyek-agile.mp4'
    },
    {
        id: 8,
        title: 'Pemasaran Digital dan SEO',
        description: 'Kursus ini dirancang untuk mempelajari teknik pemasaran digital dan optimasi mesin pencari (SEO). Anda akan belajar cara meningkatkan visibilitas website dan efektivitas kampanye pemasaran.',
        duration: '4 minggu',
        goals: 'Menguasai teknik pemasaran digital dan SEO. Mampu merancang kampanye pemasaran yang efektif dan meningkatkan peringkat mesin pencari.',
        materials: 'Alat SEO, Google Analytics, Teknik pemasaran digital',
        videoUrl: 'pemasaran-digital-seo.mp4'
    },
    {
        id: 9,
        title: 'Fotografi Digital dan Editing',
        description: 'Kursus ini mengajarkan teknik dasar fotografi digital dan editing foto menggunakan perangkat lunak seperti Adobe Lightroom dan Photoshop. Anda akan belajar cara mengambil dan mengedit foto berkualitas tinggi.',
        duration: '6 minggu',
        goals: 'Menguasai teknik dasar fotografi dan editing foto. Mampu menghasilkan foto berkualitas tinggi dan melakukan editing profesional.',
        materials: 'Kamera digital, Adobe Lightroom, Adobe Photoshop, Akses ke tutorial',
        videoUrl: 'fotografi-digital-editing.mp4'
    },
    {
        id: 10,
        title: 'Kepemimpinan dan Pengembangan Tim',
        description: 'Kursus ini mengajarkan keterampilan kepemimpinan dan teknik pengembangan tim yang efektif. Anda akan mempelajari cara memimpin tim dengan baik dan meningkatkan kinerja tim.',
        duration: '5 minggu',
        goals: 'Memahami keterampilan kepemimpinan dan teknik pengembangan tim. Mampu memimpin tim secara efektif dan meningkatkan kinerja tim.',
        materials: 'Buku kepemimpinan, Studi kasus, Alat pengembangan tim',
        videoUrl: 'kepemimpinan-pengembangan-tim.mp4'
    }
];

// Render daftar kursus di sidebar
const courseList = document.getElementById('course-list');
const courseDetail = document.getElementById('course-detail');

courses.forEach(course => {
    const li = document.createElement('li');
    li.textContent = course.title;
    li.onclick = () => showCourseDetail(course);
    courseList.appendChild(li);
});

// Tampilkan detail kursus di bagian utama
function showCourseDetail(course) {
    courseDetail.innerHTML = `
        <h3>${course.title}</h3>
        <p><strong>Deskripsi:</strong> ${course.description}</p>
        <p><strong>Durasi:</strong> ${course.duration}</p>
        <p><strong>Tujuan:</strong> ${course.goals}</p>
        <p><strong>Materi:</strong> ${course.materials}</p>
        <button class="btn-learn-now" onclick="handleLearnNow('${course.videoUrl}')">Belajar Sekarang</button>
    `;
}

// Tangani klik tombol "Belajar Sekarang"
function handleLearnNow(videoUrl) {
    if (isUserLoggedIn()) {
        window.location.href = `video.html?video=${videoUrl}`;
    } else {
        askLogin(); // Tanyakan kepada pengguna apakah sudah login
    }
}

// Tanyakan kepada pengguna apakah sudah login
function askLogin() {
    const isLoggedIn = confirm("Apakah Anda sudah login?");
    if (isLoggedIn) {
        // Jika pengguna mengonfirmasi bahwa sudah login, arahkan ke halaman video
        window.location.href = `video.html?video=${videoUrl}`;
    } else {
        // Jika tidak, beri tahu pengguna dan arahkan ke halaman login atau lainnya jika perlu
        alert("Silakan login terlebih dahulu untuk mengakses video.");
        // Optionally, redirect to a login page
        // window.location.href = 'login.html';
    }
}

// Simulasikan fungsi untuk memeriksa apakah pengguna sudah login
// Gantikan dengan logika login sebenarnya jika tersedia
function isUserLoggedIn() {
    // Untuk keperluan debugging, anggap pengguna tidak login
    return false; // Set to true if user is logged in
}

function askLogin(videoUrl) {
    const isLoggedIn = confirm("Apakah Anda sudah login?");
    if (isLoggedIn) {
        // Jika pengguna mengonfirmasi bahwa sudah login, arahkan ke halaman video
        window.location.href = `video.html?video=${encodeURIComponent(videoUrl)}`;
    } else {
        // Jika tidak, beri tahu pengguna
        alert("Silakan login terlebih dahulu untuk mengakses video.");
        // Optionally, redirect to a login page
        // window.location.href = 'login.html';
    }
}
